"use client";

import { Card } from "@/components/Card";
import { CardHeader } from "@/components/Cardheader";

export const SocialConnect = () => {
  return (
    <Card className="h-auto p-6 col-span-1 md:col-span-3 shadow-lg overflow-hidden md:h-[320px] relative">
      <CardHeader
        title="Connect Beyond Limits"
        description=""
        className="text-center text-white mb-6"
      />

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-center md:h-full">
        {/* Floating 3D Ring - Hidden on small devices */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-48 h-48 border-8 border-t-transparent border-white/20 rounded-full animate-spin-slow md:block hidden"></div>

        {/* Centerpiece Glow Orb - Hover Effect */}
        <div className="relative z-10 w-32 h-32 bg-gradient-to-br from-white to-purple-300 rounded-full shadow-xl flex items-center justify-center animate-pulse group hover:scale-110 transition-transform duration-300 hover:bg-gradient-to-br hover:from-emerald-400 hover:to-indigo-500">
          <p className="text-sm md:text-xl font-bold text-gray-800 group-hover:text-white text-center transition-colors duration-300">
            Unleash
          </p>
          {/* Border Glow Effect */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-white group-hover:animate-ping"></div>
        </div>

        {/* Abstract Floating Particles - Hidden on small devices */}
        <div className="absolute w-4 h-4 bg-white/20 rounded-full animate-floating particle-1 md:block hidden"></div>
        <div className="absolute w-6 h-6 bg-white/30 rounded-full animate-floating particle-2 md:block hidden"></div>
        <div className="absolute w-3 h-3 bg-white/10 rounded-full animate-floating particle-3 md:block hidden"></div>

        {/* Caption Section - Hidden on small devices */}
        <div className="lg:mt-12 text-center space-y-4">
          <h2 className="text-3xl font-extrabold text-white">
            Build, Create, Inspire
          </h2>
          <p className="text-white/80 max-w-lg mx-auto">
            Unlock new dimensions of creativity and collaboration. Let&apos;s
            transform visions into reality with ideas that transcend boundaries.
          </p>
        </div>
      </div>
    </Card>
  );
};
