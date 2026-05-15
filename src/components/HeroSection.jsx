import {motion} from "framer-motion"
import Spline from "@splinetool/react-spline"

const HeroSection = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">
      {/*Left Section */}
      <div className="z-40 xl:mb-0 mb-[20%]">
        <motion.p
          initial={{opacity: 0,y: 80}}
          animate={{opacity: 1,y: 0}}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 0.8,
            duration: 1.5
          }}
          className="text-violet-400 font-semibold tracking-widest uppercase text-sm mb-4 px-0.75"
        >
        Full Stack Web Developer · Delhi, India
        </motion.p>

        <motion.h1 
        initial={{opacity: 0,y: 80}}
        animate={{opacity: 1,y: 0}}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 25,
          delay: 1.3,
          duration: 1.5
        }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6">Building Fast <br /> Reliable Results</motion.h1>
        <motion.p 
        initial={{opacity: 0,y: 80}}
        animate={{opacity: 1,y: 0}}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 25,
          delay: 1.8,
          duration: 1.5
        }}
        className="text-xl md:text-1xl lg:text-2xl text-purple-200 max-w-2xl">
          I'm Rahul, a 2nd year CS student at BVP Delhi who builds
          full-stack web apps that actually ship. From AI-powered career tools
          to real-time collaborative editors, I turn ideas into deployed
          products.
        </motion.p>
      </div>

      {/* Right Section */}
      <Spline className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0" scene="https://prod.spline.design/ZH0N0X5EF3nNQdC1/scene.splinecode"/>

    </section>
  )
}

export default HeroSection