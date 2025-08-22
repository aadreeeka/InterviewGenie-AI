import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Page Heading */}
      <h1 className="text-4xl font-extrabold text-teal-800 mb-4 text-center">
        Get in Touch
      </h1>
      <p className="text-lg text-neutral-700 text-center max-w-2xl mx-auto mb-12">
        Have questions, ideas, or just want to connect? Our team at{" "}
        <span className="font-semibold text-teal-700">NextHire AI</span> is
        always here to help. Whether it’s about interview prep, career
        guidance, or partnerships, we’d love to hear from you.
      </p>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
          <Mail className="w-10 h-10 text-teal-800 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-neutral-900">Email Us</h2>
          <p className="text-neutral-700 mt-2">
            <a
              href="mailto:support@nexthireai.com"
              className="text-teal-700 hover:underline"
            >
              support@nexthireai.com
            </a>
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
          <Phone className="w-10 h-10 text-teal-800 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-neutral-900">Call Us</h2>
          <p className="text-neutral-700 mt-2">+91 98765 43210</p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
          <MapPin className="w-10 h-10 text-teal-800 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-neutral-900">Visit Us</h2>
          <p className="text-neutral-700 mt-2 leading-relaxed">
            NextHire AI Pvt. Ltd. <br />
            123 Innovation Hub, Tech City <br />
            Bengaluru, Karnataka, India
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-teal-800 mb-2 text-center">
          Send Us a Message
        </h2>
        <p className="text-neutral-600 mb-6 text-center">
          We’re committed to responding promptly. Drop us a line and we’ll get
          back to you within 24–48 hours.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-neutral-800 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-800"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-neutral-800 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-800"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-neutral-800 font-medium mb-1">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-800"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-teal-800 text-white font-medium rounded-lg hover:bg-teal-900 transition"
          >
            <Send className="w-5 h-5" /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
export { ContactPage };

 