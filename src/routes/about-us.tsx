import { Users, Target, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutUsPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-teal-800 mb-4 text-center">
        About Us
      </h1>

      {/* Intro Section */}
      <p className="text-lg text-neutral-700 leading-relaxed text-center mb-10 max-w-3xl mx-auto">
        Welcome to <span className="font-semibold text-teal-800">NextHire AI</span>, 
        your intelligent companion for mastering interviews. We empower students, professionals, 
        and job-seekers with AI-powered mock interviews, personalized feedback, 
        and structured practice to make interview preparation more engaging and effective.
      </p>

      {/* Cards Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card className="rounded-2xl shadow-lg hover:shadow-xl transition">
          <CardContent className="p-6 text-center">
            <Users className="mx-auto h-10 w-10 text-teal-800 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
            <p className="text-neutral-600 text-sm">
              To help every candidate build confidence and walk into interviews fully prepared 
              through AI-driven learning and practice.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-lg hover:shadow-xl transition">
          <CardContent className="p-6 text-center">
            <Target className="mx-auto h-10 w-10 text-teal-800 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
            <p className="text-neutral-600 text-sm">
              A future where no candidate feels anxious or underprepared before an interview, 
              bridging the gap between talent and opportunity.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-lg hover:shadow-xl transition">
          <CardContent className="p-6 text-center">
            <Star className="mx-auto h-10 w-10 text-teal-800 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Why Choose Us?</h2>
            <ul className="text-neutral-600 text-sm text-left list-disc list-inside space-y-1">
              <li>AI-driven mock interviews</li>
              <li>Instant, constructive feedback</li>
              <li>Personalized learning paths</li>
              <li>Accessible for everyone</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Closing Statement */}
      <div className="text-center">
        <p className="text-lg text-neutral-700 leading-relaxed mb-6 max-w-2xl mx-auto">
          Thank you for trusting us with your journey. Let’s get you closer to your dream career— 
          one interview at a time.
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-teal-800 text-white font-semibold rounded-xl shadow-md hover:bg-teal-900 transition"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export { AboutUsPage };



