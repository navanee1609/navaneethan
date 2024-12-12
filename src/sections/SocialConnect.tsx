"use client";

import { Card } from "@/components/Card";
import { CardHeader } from "@/components/Cardheader";

export const SocialConnect = () => (
  <Card className="h-[380px] p-6 col-span-1 md:col-span-3 shadow-lg to-gray-900 overflow-hidden md:h-[320px]">
    <CardHeader
      title="Let&apos;s Build Together"
      description="Collaboration > Solo Hustle"
      className="mb-6 text-white"
    />

    <div className="p-4 rounded-lg text-white">
      <p className="text-sm text-white/60">
      Code doesn&apos;t have to be a solo journey. Let&apos;s team up, share ideas, and bring creativity to life! is a great invitation for collaboration and community-building in the world of coding. It highlights the importance of working together to turn ideas into reality and creates an open space for creativity to flourish.
      </p>
    </div>
  </Card>
);
