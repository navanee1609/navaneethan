import { SectionHeader } from "./SectionHeader";
import { AiFillLinkedin } from "react-icons/ai"; // Import LinkedIn icon from react-icons
import { Card } from "@/components/Card";
import { Fragment } from "react";
import ArrowUp from "@/assets/icons/arrow-up-right.svg";

// Mock data for testimonials
const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    articleLink: "https://www.linkedin.com/pulse/your-article-link-1", // Add article link here
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    articleLink: "https://www.linkedin.com/pulse/your-article-link-2", // Add article link here
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    articleLink: "https://www.linkedin.com/pulse/your-article-link-3", // Add article link here
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    articleLink: "https://www.linkedin.com/pulse/your-article-link-4", // Add article link here
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    articleLink: "https://www.linkedin.com/pulse/your-article-link-5", // Add article link here
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
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.name}
                  className="max-w-xs p-6 md:p-8 md:max-w-md hover:-rotate-3 transition duration-300 group cursor-pointer"
                >
                  <div className="flex gap-4 items-center">
                    <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                      <AiFillLinkedin className="text-2xl" />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-white/40">{testimonial.position}</div>
                    </div>
                  </div>

                  <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>

                  {/* Button to open article in a new tab */}
                  <a
                    href={testimonial.articleLink} // The article link from the testimonial data
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
