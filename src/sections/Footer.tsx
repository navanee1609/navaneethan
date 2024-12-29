import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg";

// Footer links
const footerLinks = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip z-20">
      {/* Background */}
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        {/* Footer Content */}
        <div className="border-t border-white/15 py-6 text-sm flex justify-center items-center">
          {/* Centered Footer Text */}
          <div className="text-white/40 text-xl font-medium text-center">
            Elevating the Digital Experience
          </div>
        </div>
      </div>
    </footer>
  );
};