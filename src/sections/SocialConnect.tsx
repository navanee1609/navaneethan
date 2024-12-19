"use client";

import { Card } from "@/components/Card";
import { CardHeader } from "@/components/Cardheader";

export const SocialConnect = () => {
  return (
    <Card className="h-[400px] p-6 col-span-1 md:col-span-3 shadow-lg to-gray-900 overflow-hidden md:h-[320px] relative">
      <CardHeader
        title="Connect with Me"
        description=""
        className="mb-2 text-white"
      />

      {/* Content Section with Enhanced Animations */}
      <div className="p-6 text-center text-white space-y-6 bg-white/10 backdrop-blur-xl rounded-xl shadow-xl transition-all duration-700 mt-8 mb-8">
        {/* Heading Animation */}
        <h2 className="text-3xl font-semibold animate-bounceIn">
          Let’s Connect!
        </h2>

        {/* Paragraph Animation */}
        <p className="text-lg text-white/80 animate-fadeInZoom">
          I&apos;m always open to collaboration opportunities and new connections. 
          Let&apos;s discuss exciting ideas, projects, or just share a conversation. Reach out anytime!
        </p>
      </div>
    </Card>
  );
};
