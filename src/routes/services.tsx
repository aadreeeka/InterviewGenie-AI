import { Briefcase, GraduationCap, FileText, MessageSquare } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Interview Preparation",
      description:
        "Ace your interviews with personalized mock sessions, feedback, and strategies tailored to your target role.",
      icon: <MessageSquare className="w-10 h-10 text-teal-800" />,
    },
    {
      title: "Career Coaching",
      description:
        "Get 1-on-1 career guidance to navigate your professional journey, set goals, and unlock your true potential.",
      icon: <GraduationCap className="w-10 h-10 text-teal-800" />,
    },
    {
      title: "Resume Building",
      description:
        "Craft a resume that stands out to recruiters with optimized formatting, impactful wording, and ATS-friendly design.",
      icon: <FileText className="w-10 h-10 text-teal-800" />,
    },
    {
      title: "Skill Development",
      description:
        "Enhance your skills through curated resources, hands-on projects, and personalized learning paths.",
      icon: <Briefcase className="w-10 h-10 text-teal-800" />,
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-teal-800 mb-4 text-center">
          Our Services
        </h2>
        <p className="text-lg text-gray-600">
          Helping you take the next big step in your career journey
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center transition-transform transform hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
