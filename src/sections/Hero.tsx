import memojiImage from "@/assets/images/memoji-computer.png"
import ArrowIcon from "@/assets/icons/arrow-down.svg"
import Image from "next/image"


export const HeroSection = () => {
  return (
   <div className="py-32 md:py-48 lg:py-60">
    <div className="container">
      <div className="flex flex-col items-center">
      <Image src={memojiImage} className="size-[100px]" alt="Person seeking behind computer" />
      <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
        <div className="bg-green-500 size-2.5 rounded-full"></div>
        <div className="text-sm font-medium">Front End Developer</div>
      </div>
      </div>
      <div className="max-w-lg mx-auto">
      <h1 className="font-serif text-3xl md:5xl text-center mt-8 tracking-wide">Navaneethan KV</h1>
      <p className="mt-4 text-center text-white/60 md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. In perspiciatis, quibusdam ea molestias exercitationem expedita?</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
          <span className="font-semibold">Explore my work</span>
          <ArrowIcon className="size-4"/>
        </button>
        <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
          <span>👋</span>
          <span className="font-semibold">Let's Connect</span>
        </button>
      </div>
    </div>
  </div>)
}