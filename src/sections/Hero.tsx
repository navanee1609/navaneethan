import memojiImage from "@/assets/images/memoji-computer.png" // Importing an image asset
import ArrowIcon from "@/assets/icons/arrow-down.svg" // Importing an arrow icon
import Image from "next/image" // Importing Next.js's Image component for optimized images
import grainImage from "@/assets/images/grain.jpg" // Importing a grain texture image
import StartIcon from "@/assets/icons/star.svg" // Importing a star icon
import { HeroOrbit } from "@/components/HeroOrbit" // Importing a custom component for orbit animations
import SparkleIcon from "@/assets/icons/sparkle.svg" // Importing a sparkle icon

export const HeroSection = () => {
  return (
    // Main container for the Hero Section
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      
      {/* Masking background with gradient for visual effect */}
      <div
        className="absolute inset-0"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)", // Defining a mask gradient
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)", // Adding WebKit-specific mask
          maskMode: "alpha", // Ensuring the mask uses alpha transparency
        }}
      >
        {/* Background grain texture */}
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})` // Applying the grain image as a background
          }}
        ></div>

        {/* Multiple animated hero rings */}
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        {/* Adding orbiting icons using HeroOrbit component */}
        <HeroOrbit size={800} rotation={-72}>
          <StartIcon className="size-28 text-emerald-300" /> {/* Large star icon */}
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <StartIcon className="size-12 text-emerald-300" /> {/* Medium star icon */}
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}>
          <StartIcon className="size-8 text-emerald-300" /> {/* Small star icon */}
        </HeroOrbit>

        {/* Adding sparkle effects */}
        <HeroOrbit size={430} rotation={-14}>
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79}>
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178}>
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144}>
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>

        {/* Adding plain circular elements */}
        <HeroOrbit size={720} rotation={85}>
          <div className="size-3 rounded-full text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41}>
          <div className="size-2 rounded-full text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}>
          <div className="size-2 rounded-full text-emerald-300/20" />
        </HeroOrbit>
      </div>

      {/* Main content container */}
      <div className="container">
        {/* Centered content section */}
        <div className="flex flex-col items-center">
          {/* Displaying profile image */}
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person seeking behind computer"
          />
          {/* Label box */}
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div> {/* Green indicator */}
            <div className="text-sm font-medium">Front End Developer</div> {/* Text label */}
          </div>
        </div>

        {/* Heading and description */}
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:5xl text-center mt-8 tracking-wide">
            Navaneethan KV {/* Main heading */}
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            perspiciatis, quibusdam ea molestias exercitationem expedita? {/* Placeholder text */}
          </p>
        </div>

        {/* Buttons section */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          {/* Button to explore work */}
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore my work</span>
            <ArrowIcon className="size-4" /> {/* Arrow icon */}
          </button>
          {/* Button to connect */}
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span> {/* Wave emoji */}
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
