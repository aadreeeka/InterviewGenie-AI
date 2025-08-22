import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"; // Added GitHub
import { Link } from "react-router-dom";
import { Container } from "@/components/container";
import { MainRoutes } from "@/lib/helpers";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  hoverColor: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, hoverColor }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`hover:${hoverColor}`}
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <li>
      <Link
        to={to}
        className="hover:underline text-gray-300 hover:text-white"
      >
        {children}
      </Link>
    </li>
  );
};

export const Footer = () => {
  return (
    <div className="w-full bg-[#365a6b] text-gray-300 hover:text-white py-6">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* First Column: Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {MainRoutes.map((route) => (
                <FooterLink key={route.href} to={route.href}>
                  {route.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Second Column: About Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <p>
              We are committed to helping you unlock your full potential with
              AI-powered tools. Our platform offers resources to improve your
              interview skills and career growth.
            </p>
          </div>

          {/* Third Column: Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <FooterLink to="/services/interview-prep">
                Interview Preparation
              </FooterLink>
              <FooterLink to="/services/career-coaching">
                Career Coaching
              </FooterLink>
              <FooterLink to="/services/resume-building">
                Resume Building
              </FooterLink>
            </ul>
          </div>

          {/* Fourth Column: Address and Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p className="mb-4">Malaviya Nagar, Varanasi, Uttar Pradesh, India</p>
            <div className="flex gap-4">
              <SocialLink
                href="https://www.facebook.com/profile.php?id=100093022721157"
                icon={<Facebook size={22} />}
                hoverColor="text-blue-500"
              />
              <SocialLink
                href="https://twitter.com"
                icon={<Twitter size={22} />}
                hoverColor="text-blue-400"
              />
              <SocialLink
                href="https://www.instagram.com/aadreeeka/"
                icon={<Instagram size={22} />}
                hoverColor="text-pink-500"
              />
              <SocialLink
                href="https://www.linkedin.com/in/aadreeka/"
                icon={<Linkedin size={22} />}
                hoverColor="text-blue-700"
              />
              <SocialLink
                href="https://github.com/aadreeeka"
                icon={<Github size={22} />}
                hoverColor="text-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Signature */}
        <div className="mt-8 text-center text-sm text-gray-400">
          Made with ❤️ by <span className="font-semibold">Aadrika Barnwal</span> | <span className="italic">Aadrikode</span>
        </div>
      </Container>
    </div>
  );
};


