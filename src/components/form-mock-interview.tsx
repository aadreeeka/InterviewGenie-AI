import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Interview } from "@/types";
import { CustomBreadCrumb } from "./custom-bread-crumbs";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { toast } from "sonner";
import { Headings } from "./headings";
import { Button } from "./ui/button";
import { Loader, Trash2 } from "lucide-react";
import { Separator } from "./ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { chatSession } from "@/scripts";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/config/firebase.config";

interface FormMockInterviewProps {
  initialData: Interview | null;
}

const formSchema = z.object({
  position: z
    .string()
    .min(1, "Position is required")
    .max(100, "Position must be 100 characters or less"),
  description: z.string().min(10, "Description is required"),
  experience: z.coerce.number().min(0, "Experience cannot be empty or negative"),
  techStack: z.string().min(1, "Tech stack must be at least a character"),
});

// Types: input (what RHF sees from the DOM) vs output (after Zod)
type FormInput = z.input<typeof formSchema>;   // experience is string | number (coerced)
type FormOutput = z.output<typeof formSchema>; // experience is number

// Use this for your app logic
type FormData = FormOutput;

export const FormMockInterview = ({ initialData }: FormMockInterviewProps) => {
  const navigate = useNavigate();
  const { userId } = useAuth();
  const [loading, setLoading] = useState(false);

  // **** CRITICAL FIX ****
  // Tell RHF the input type and the transformed (output) type.
  const form = useForm<FormInput, any, FormOutput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      position: initialData?.position ?? "",
      description: initialData?.description ?? "",
      // defaultValues must match the *input* type (string | number is fine here)
      experience:
        (initialData?.experience as unknown as string | number | undefined) ?? 0,
      techStack: initialData?.techStack ?? "",
    },
    mode: "onChange",
  });

  const { isValid, isSubmitting } = form.formState;

  const title = initialData ? initialData.position : "Create a new mock interview";
  const breadCrumpPage = initialData ? initialData.position : "Create";
  const actions = initialData ? "Save Changes" : "Create";
  const toastMessage = initialData
    ? { title: "Updated..!", description: "Changes saved successfully..." }
    : { title: "Created..!", description: "New Mock Interview created..." };

  const cleanAiResponse = (responseText: string) => {
    let cleanText = responseText.trim();
    cleanText = cleanText.replace(/```json|```|`/g, "");
    const jsonMatch = cleanText.match(/(\[.*\]|\{.*\})/s);
    if (jsonMatch) cleanText = jsonMatch[0];
    cleanText = cleanText.replace(/,\s*([}\]])/g, "$1");
    try {
      return JSON.parse(cleanText);
    } catch (error) {
      console.error("JSON parsing failed:", error, "\nCleaned text:", cleanText);
      throw new Error("Invalid JSON format: " + (error as Error)?.message);
    }
  };

  const generateAiResponse = async (data: FormData) => {
    const aiPrompt = `
      As an experienced prompt engineer, generate a JSON array containing 5 technical interview questions along with detailed answers based on the following job information. Each object in the array should have the fields "question" and "answer", formatted as follows:

      [
        { "question": "<Question text>", "answer": "<Answer text>" },
        ...
      ]

      Job Information:
      - Job Position: ${data.position}
      - Job Description: ${data.description}
      - Years of Experience Required: ${data.experience}
      - Tech Stacks: ${data.techStack}

      The questions should assess skills in ${data.techStack} development and best practices, problem-solving, and experience handling complex requirements. Please format the output strictly as an array of JSON objects without any additional labels, code blocks, or explanations. Return only the JSON array with questions and answers.
    `;

    const aiResult = await chatSession(aiPrompt);
    // If chatSession returns an object, adjust this line accordingly:
    // const text = typeof aiResult === "string" ? aiResult : aiResult.response?.text?.() ?? "";
    const cleanedResponse = cleanAiResponse(String(aiResult));
    return cleanedResponse;
  };

  // onSubmit receives the **transformed** type (FormOutput)
  const onSubmit = async (data: FormOutput) => {
    try {
      setLoading(true);

      if (initialData) {
        if (isValid) {
          const aiResult = await generateAiResponse(data);
          await updateDoc(doc(db, "interviews", initialData.id), {
            questions: aiResult,
            ...data,
            updatedAt: serverTimestamp(),
          });
          toast(toastMessage.title, { description: toastMessage.description });
        }
      } else {
        if (isValid) {
          const aiResult = await generateAiResponse(data);
          await addDoc(collection(db, "interviews"), {
            ...data,
            userId,
            questions: aiResult,
            createdAt: serverTimestamp(),
          });
          toast(toastMessage.title, { description: toastMessage.description });
        }
      }

      navigate("/generate", { replace: true });
    } catch (error) {
      console.log(error);
      toast.error("Error..", {
        description: `Something went wrong. Please try again later`,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialData) {
      // reset accepts input-type values
      form.reset({
        position: initialData.position ?? "",
        description: initialData.description ?? "",
        experience:
          (initialData.experience as unknown as string | number | undefined) ?? 0,
        techStack: initialData.techStack ?? "",
      });
    }
  }, [initialData, form]);

  return (
    <div className="w-full flex-col space-y-4">
      <CustomBreadCrumb
        breadCrumbPage={breadCrumpPage}
        breadCrumpItems={[{ label: "Mock Interviews", link: "/generate" }]}
      />

      <div className="mt-4 flex items-center justify-between w-full">
        <Headings title={title} isSubHeading />
        {initialData && (
          <Button size={"icon"} variant={"ghost"}>
            <Trash2 className="min-w-4 min-h-4 text-red-500" />
          </Button>
        )}
      </div>

      <Separator className="my-4" />
      <div className="my-6" />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full p-8 rounded-lg flex-col flex items-start justify-start gap-6 shadow-md "
        >
          {/* Position */}
          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem className="w-full space-y-4">
                <div className="w-full flex items-center justify-between">
                  <FormLabel>Job Role / Job Position</FormLabel>
                  <FormMessage className="text-sm" />
                </div>
                <FormControl>
                  <Input
                    className="h-12"
                    disabled={loading}
                    placeholder="eg:- Full Stack Developer"
                    {...field}
                    value={field.value ?? ""}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full space-y-4">
                <div className="w-full flex items-center justify-between">
                  <FormLabel>Job Description</FormLabel>
                  <FormMessage className="text-sm" />
                </div>
                <FormControl>
                  <Textarea
                    className="h-12"
                    disabled={loading}
                    placeholder="eg:- describe your job role"
                    {...field}
                    value={field.value ?? ""}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Experience (coerced to number by Zod) */}
          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem className="w-full space-y-4">
                <div className="w-full flex items-center justify-between">
                  <FormLabel>Years of Experience</FormLabel>
                  <FormMessage className="text-sm" />
                </div>
                <FormControl>
                  <Input
                    type="number"
                    className="h-12"
                    disabled={loading}
                    placeholder="eg:- 5 Years"
                    // value must be a string for the DOM; coerce both string/number safely
                    value={
                      field.value === undefined || field.value === null
                        ? ""
                        : String(field.value)
                    }
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Tech Stack */}
          <FormField
            control={form.control}
            name="techStack"
            render={({ field }) => (
              <FormItem className="w-full space-y-4">
                <div className="w-full flex items-center justify-between">
                  <FormLabel>Tech Stacks</FormLabel>
                  <FormMessage className="text-sm" />
                </div>
                <FormControl>
                  <Textarea
                    className="h-12"
                    disabled={loading}
                    placeholder="eg:- React, Typescript..."
                    {...field}
                    value={field.value ?? ""}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="w-full flex items-center justify-end gap-6">
            <Button
              type="reset"
              size={"sm"}
              variant={"outline"}
              disabled={isSubmitting || loading}
            >
              Reset
            </Button>
            <Button
              type="submit"
              size={"sm"}
              disabled={isSubmitting || !isValid || loading}
            >
              {loading ? (
                <Loader className="text-gray-50 animate-spin" />
              ) : (
                actions
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
