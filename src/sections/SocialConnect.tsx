"use client";

import { Card } from "@/components/Card";
import { CardHeader } from "@/components/Cardheader";

export const SocialConnect = () => (
  <Card className="h-[320px] p-6 col-span-1 md:col-span-3 shadow-lg to-gray-900 overflow-hidden">
    <CardHeader
      title="Let's Connect"
      description="Collaboration > Coding Alone"
      className="mb-6 text-white"
    />

    <div className="p-4 rounded-lg text-white">
      <p className="text-lg font-medium">
        Bugs are hard, but boredom is harder. Let's chat and make coding fun! Hit me up on social media and let's build something amazing!
      </p>
    </div>
  </Card>
);
