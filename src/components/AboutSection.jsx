import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const AboutSection = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const introRef = useRef(null);
    const starRef = useRef([]);
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        // Title Animation
        gsap. fromTo(
            titleRef.current,
            {y: 100, opacity: 0 },
            {
                y: -290,
                opacity: 1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 40%",
                    toggleActions: "play none none reverse",
                }
            }
        )

        // Intro Animation
        gsap.fromTo(
            introRef.current,
            {y: 100, opacity: 0, filter: "blur(10px)"},
            {
                y: -400,
                opacity: 1,
                filter: "blur(0px)",
                duration: 1.5,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 40%",
                    toggleActions: "play none none reverse",
                }
            }
        )

        // Stars Animation with diffrent speeds and directions
        starRef.current.forEach((star, index) => {
            const direction = index % 2 === 0 ? 1 : -1; // Alternate directions
            const speed = 0.5 + Math.random()*0.5; // Random speed between 0.5 and 1.5

            gsap.to(star, {
                x: `${direction * (100 + index * 20 )}`, // Move left or right
                y: `${direction * -50 - index * 10 }`, // Move up
                rotation: direction * 360, // Rotate
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: speed, // Smooth animation based on scroll
                },
            })
        })
        return () => {
            ScrollTrigger.getAll().forEach((trigger) =>{
                if(trigger.vars.trigger === sectionRef.current){
                    trigger.kill();
                }
            });
        }
    },[])
    const addToStars = (el) => {
        if(el && !starRef.current.includes(el)){
            starRef.current.push(el);
        }
    }
  return (
    <section ref={sectionRef} className="h-screen relative overflow-hidden bg-gradient-to-b from-black to-[#9a74cf50]">
        <div className="absolute inset-0 overflow-hidden">
            {/*Stars*/}
            {[...Array(10)].map((_, i) => (
                <div
                ref={addToStars}
                key={`star-${i}`}
                className="absolute rounded-full"
                style={{
                    width: `${10 + i* 3}px`,
                    height: `${10 + i* 3}px`,
                    backgroundColor: "white",
                    opacity: 0.2 +Math.random()*0.4,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                }}
                />
            ))}
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
            <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold sm:mb-16 text-center text-white opacity-0">
                About Me
            </h1>
        </div>
        <div ref={introRef} className="absolute lg:bottom-[-26rem] md:bottom-[-10rem] bottom-[-20rem] left-0 w-full flex md:flex-row flex-col justify-between lg:px-24 px-5 items-center opacity-0">
            <h3 className="text-sm md:text-2xl font-bold text-purple-200 z-50 lg:max-w-[45rem] max-w-[27rem] tracking-wider md:mt-20 sm:mt-[-40rem] mt-[-32rem]">
                Hi, I'm Rahul, a Full Stack Developer and 2nd year CSE student at Bharati Vidyapeeth's College of Engineering, New Delhi.
                I build complete web applications from RESTful backends with Node.js and Express, to modern React frontends, to AI-powered features using the Gemini API. My projects include Nestique (an Airbnb-inspired rental platform), BrainDrift (an AI career prep tool with resume analysis and ATS generation), and MergeConflict (a real-time collaborative code editor with Docker and Socket.io).
                When I'm not writing code, I'm playing chess, reading tech blogs, or grinding DSA on LeetCode.
            </h3>
            <img className="lg:h-[46rem] md:h-[25rem] h-[20rem] mix-blend-lighten" src="images/my_image.png" alt="my_image" />
        </div>
    </section>
  )
}
export default AboutSection