"use client";

import { Card } from "@/components/Card";
import { CardHeader } from "@/components/Cardheader";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

export const SocialConnect = () => (
  <Card className="h-[320px] p-6 col-span-3 shadow-lg to-gray-900 overflow-hidden">
    <CardHeader
      title="Connect with Me"
      description="Let's connect and collaborate on exciting projects."
      className="mb-6 text-white"
    />

    <div className="grid grid-cols-2 lg:gap-4 md:grid-cols-3">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center p-4 bg-gray-800/90 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700/90 transition"
      >
        <FaInstagram className="text-3xl text-white mr-3" />
        <span className="text-white text-lg font-medium">Instagram</span>
      </a>
      <a
        href="https://wa.me"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center p-4 bg-gray-800/90 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700/90 transition"
      >
        <FaWhatsapp className="text-3xl text-white mr-3" />
        <span className="text-white text-lg font-medium">WhatsApp</span>
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center p-4 bg-gray-800/90 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700/90 transition"
      >
        <FaLinkedin className="text-3xl text-white mr-3" />
        <span className="text-white text-lg font-medium">LinkedIn</span>
      </a>
      <a
        href="mailto:someone@example.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center p-4 bg-gray-800/90 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700/90 transition"
      >
        <FaEnvelope className="text-3xl text-white mr-3" />
        <span className="text-white text-lg font-medium">Email</span>
      </a>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center p-4 bg-gray-800/90 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700/90 transition"
      >
        <FaGithub className="text-3xl text-white mr-3" />
        <span className="text-white text-lg font-medium">GitHub</span>
      </a>
      <a
        href="tel:+123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center p-4 bg-gray-800/90 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700/90 transition"
      >
        <FaPhone className="text-3xl text-white mr-3" />
        <span className="text-white text-lg font-medium">Phone</span>
      </a>
    </div>
  </Card>
);
