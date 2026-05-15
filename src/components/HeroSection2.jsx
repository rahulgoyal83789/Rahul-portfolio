import { motion } from "framer-motion"

const HeroSection2 = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">
      {/*Left Section */}
      <div className="max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 0.5,
            duration: 1.2,
          }}
          className="text-violet-400 font-semibold tracking-widest uppercase text-sm mb-4"
        >
          Full Stack Developer · Delhi, India
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 1.5,
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6"
        >
          Building Fast <br /> Reliable Results
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 2.0,
            duration: 1.5,
          }}
          className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
        >
          I'm Rahul — a 2nd year CS student at BVP Delhi who builds
          full-stack web apps that actually ship. From AI-powered career tools
          to real-time collaborative editors, I turn ideas into deployed
          products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 2.6,
            duration: 1.2,
          }}
          className="flex gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="https://github.com/rahulgoyal83789"
            target="_blank"
            rel="noreferrer"
            className="border border-violet-400 text-violet-300 hover:bg-violet-900/40 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            GitHub
          </a>
        </motion.div>
      </div>

      {/* Right Section — your 3D Spline model goes here */}
      <div className="xl:w-1/2 w-full flex justify-center items-center">
        {/* paste your <Spline> component here from the tutorial */}
      </div>
    </section>
  )
}

export default HeroSection2