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
        <div className="border-t border-white/15 py-6 text-sm flex flex-wrap justify-between items-center gap-4 md:gap-8">
          {/* Footer Text */}
          <div className="text-white/40 text-md font-medium">Elevating the Digital Experience</div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center items-center gap-4 md:gap-8 z-30">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                className="inline-flex items-center gap-1.5 hover:text-emerald-300 transition-colors cursor-pointer"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
