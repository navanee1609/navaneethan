"use client";

import { SectionHeader } from "./SectionHeader";
import { AiFillLinkedin } from "react-icons/ai"; // Import LinkedIn icon from react-icons
import { Card } from "@/components/Card";
import ArrowUp from "@/assets/icons/arrow-up-right.svg";

const articles = [
  {
    name: "Future of Front-End",
    domain: "Web Development",
    description:
      "Explore how Web Components are changing front-end development by enabling reusable, modular, and interoperable designs that enhance scalability and efficiency.",
    articleLink: "https://www.linkedin.com/posts/navaneethan-k-v-546a9025b_frontenddevelopment-webcomponents-modulardesign-activity-7205554564538728448-6_tz?utm_source=share&utm_medium=member_desktop", 
  },
  {
    name: "Code Quality Practices",
    domain: "Web Performance",
    description:
      "Discover essential practices for maintaining code quality and optimizing performance to achieve faster load times, better architecture, and improved usability.",
    articleLink: "https://www.linkedin.com/posts/navaneethan-k-v-546a9025b_codequality-webperformance-seo-activity-7203374051715596288-iPHR?utm_source=share&utm_medium=member_desktop", 
  },
  {
    name: "The Rise of PWAs",
    domain: "Progressive Web Apps",
    description:
      "Dive into how Progressive Web Apps merge web and mobile app capabilities, offering offline functionality, fast performance, and seamless experiences.",
    articleLink: "https://www.linkedin.com/posts/navaneethan-k-v-546a9025b_progressivewebapps-pwas-webdevelopment-activity-7195827416991248387-nL_B?utm_source=share&utm_medium=member_desktop", 
  },
  {
    name: "Power of Animation",
    domain: "Web Design",
    description:
      "Learn how animations enhance usability, engage users, and reinforce branding, helping developers and designers create stunning digital experiences.",
    articleLink: "https://www.linkedin.com/posts/navaneethan-k-v-546a9025b_webdesign-animation-userexperience-activity-7195824917169201153-m4ZO?utm_source=share&utm_medium=member_desktop", 
  },
];


export const Articles = () => {
  return (
    <section id="article">
      <div className="py-16 lg:my-20">
        <div className="container">
          {/* Updated Section Header */}
          <SectionHeader
            eyebrow="Latest Articles & Insights"
            title="Discover My Latest LinkedIn Articles"
            description="Explore in-depth articles that dive into the world of frontend development, design thinking, and web technologies. Gain insights from real-world experiences and case studies."
          />

          <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image: linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
            <div className="flex gap-8 flex-none animate-move-left-card hover:[animation-play-state:paused]">
              {articles.map((article) => (
                <Card
                  key={article.name}
                  className="max-w-xs p-6 md:p-8 md:max-w-md hover:-rotate-3 transition duration-300 group cursor-pointer"
                >
                  <div className="flex gap-4 items-center">
                    <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                      <AiFillLinkedin className="text-2xl" />
                    </div>
                    <div>
                      <div className="font-semibold">{article.name}</div>
                      <div className="text-sm text-white/40">{article.domain}</div>
                    </div>
                  </div>

                  <p className="mt-4 md:mt-6 text-sm md:text-base">{article.description}</p>

                  {/* Button to open article in a new tab */}
                  <a
                    href={article.articleLink} // The article link from the data
                    target="_blank" // Open the link in a new tab
                    rel="noopener noreferrer"
                  >
                    <button className="mt-4 px-6 py-3 bg-white text-black border border-gray-300 rounded-lg hover:bg-gray-200 transition flex items-center gap-2 mx-auto lg:mx-0">
                      <span className="font-semibold">Explore Article</span>
                      <ArrowUp className="size4" />
                    </button>
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
