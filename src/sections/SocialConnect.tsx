"use client";

import { Card } from "@/components/Card";
import { CardHeader } from "@/components/Cardheader";

export const SocialConnect = () => (
  <Card className="h-[320px] p-6 col-span-1 md:col-span-3 shadow-lg to-gray-900 overflow-hidden">
    <CardHeader
      title="Let&apos;s Build Together"
      description="Collaboration > Solo Hustle"
      className="mb-6 text-white"
    />

    <div className="p-4 rounded-lg text-white">
      <p className="text-lg font-medium">
        Code doesn&apos;t have to be a solo journey. Let&apos;s team up, share ideas, and bring creativity to life! Hit me up on social media – let&apos;s create something next-level!
      </p>
    </div>
  </Card>
);
