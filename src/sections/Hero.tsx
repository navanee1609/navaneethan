import memojiImage from "@/assets/images/memoji-computer.png"; // Importing an image asset
import ArrowIcon from "@/assets/icons/arrow-down.svg"; // Importing an arrow icon
import Image from "next/image"; // Importing Next.js's Image component for optimized images
import grainImage from "@/assets/images/grain.jpg"; // Importing a grain texture image
import StartIcon from "@/assets/icons/star.svg"; // Importing a star icon
import { HeroOrbit } from "@/components/HeroOrbit"; // Importing a custom component for orbit animations
import SparkleIcon from "@/assets/icons/sparkle.svg"; // Importing a sparkle icon

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      {/* Masking background with gradient for visual effect */}
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
          maskMode: "alpha",
        }}
      >
        {/* Background grain texture */}
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>

        {/* Multiple animated hero rings */}
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        {/* Adding orbiting icons using HeroOrbit component */}
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
          <SparkleIcon className="w-2 h-2 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79}  shouldOrbit orbitDuration="32s" shouldSpin spinDuration="6s">
          <SparkleIcon className="w-2 h-2 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41}  shouldOrbit orbitDuration="34s">
          <div className="w-2 h-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178}  shouldOrbit orbitDuration="36s" shouldSpin spinDuration="6s">
          <SparkleIcon className="w-2 h-2 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}  shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <StartIcon className="w-3 h-3 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}  shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
          <StartIcon className="w-2 h-2 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}  shouldOrbit orbitDuration="42s">
          <div className="w-2 h-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144}  shouldOrbit orbitDuration="44s" shouldSpin spinDuration="6s">
          <SparkleIcon className="w-3 h-3 text-emerald-300/20" />
        </HeroOrbit>

        {/* Adding plain circular elements */}
        <HeroOrbit size={720} rotation={85}  shouldOrbit orbitDuration="46s">
          <div className="w-3 h-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        
        <HeroOrbit size={800} rotation={-72}  shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
          <StartIcon className="w-7 h-7 text-emerald-300" />
        </HeroOrbit>
        
       

        {/* Adding sparkle effects */}
       
       
        
       
        
      </div>

      {/* Main content container */}
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person seeking behind computer"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 w-2.5 h-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">Front End Developer</div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Navaneethan KV
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            perspiciatis, quibusdam ea molestias exercitationem expedita?
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore my work</span>
            <ArrowIcon className="w-4 h-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
