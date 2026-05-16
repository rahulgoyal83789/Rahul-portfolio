import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SlShareAlt } from "react-icons/sl";
const ProjectSection = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const titleLineRef = useRef(null);
    const triggerRef = useRef(null);
    const horizontalRef = useRef(null);
    //Project images data
    const projectImages = [
        {
            id: 1,
            title: "Nestique - Property Rental Platform",
            imageSrc: "/images/Nestique_image.png"
        },
        {
            id: 2,
            title: "BrainDrift - AI-Powered Interview Preparation Platform",
            imageSrc: "/images/Braindrift_image.png"
        },
        {
            id: 3,
            title: "MergeConflict - Live Code Collaboration Tool",
            imageSrc: "/images/MergeConflict_image.png"
        },
        {
            id: 4,
            title: "WeatherOs - React based basic weather app",
            imageSrc: "/images/Weatherapp_image.png"
        },
    ];
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        // Title Reveal Animation
        gsap. fromTo(
            titleRef.current,
            {y: 100, opacity: 0 },
            {y: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            }}
        )
        // Title Line Animation
        gsap.fromTo(
            titleLineRef.current,
            {width: "0%", opacity: 0},
            {width: "100%", opacity: 1, duration: 1.5, ease: "power3.inOut", delay: 0.3, scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            }}
        )
        // Section Entrance Animation
        gsap.fromTo(
            triggerRef.current,
            {y: 100, rotateX: 20, opacity: 0},
            {y: 0, rotateX: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.2, scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse",
            }}
        )
        // Parallex Effect for the entire section
        gsap.fromTo(
            horizontalRef.current, 
            {
                backgroundPosition: "50% 0%",
            },
            {
                backgroundPosition: "50% 100%",
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                }
            },
        )
        // Horizontal Scroll Animation
        //Create the horizontal scrolling animation
        const horizontalScroll = gsap.to(".panel", {
            xPercent: -100 * (projectImages.length - 1), // Scroll through all panels
            ease: "none",
            scrollTrigger: {
                trigger: horizontalRef.current,
                start: "top top",
                end: () => `+=${horizontalRef.current.offsetWidth}`, // End after scrolling the width of the container
                scrub: 1, // Smooth scrubbing
                pin: true, // Pin the section during scroll
                snap: {
                    snapTo: 1 / (projectImages.length - 1), // Snap to each panel
                    duration: {main: 0.2, max: 0.3}, // Snap animation duration
                    delay: 0.1, // Delay before snapping"
                },
                invalidateOnRefresh: true, // Recalculate on refresh
            }
        })
        // Image animation
        // animate each image panel
        const panels = gsap.utils.toArray(".panel")
        panels.forEach((panel, i) => {
            const image = panel.querySelector(".project-image")
            const imageTitle = panel.querySelector(".project-title")
            // create a timeline for each panel
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: panel,
                    containerAnimation: horizontalScroll, // Link to the horizontal scroll animation
                    start: "left right",
                    end: "right left",
                    scrub: true,
                }
            })
            //Image scale and opacity animation
            tl.fromTo(image, {scale: 0, rotate: -20}, {scale: 1, rotate: 1, duration: 0.5})
            // Title animation if it exists
            if(imageTitle){
                tl.fromTo(imageTitle, {y: 30,}, {y: -100, duration: 0.3}, "0.2") // Start slightly before the image animation ends
            }
        })
    },[projectImages.length])
  return (
    <section ref={sectionRef} id="horizontal-section" className="relative py-20 bg-[#f6f6f6]">
        {/* Section Title */}
        <div className="container mx-auto px-4 mb-16 relative z-10">
            <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-4 opacity-0">Featured Projects</h2>
            <div ref={titleLineRef} className="w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto opacity-0"></div>
        </div>
        {/* Horizontal scroll section */}
        <div ref={triggerRef} className="opacity-0">
            <div ref={horizontalRef} className="horizontal-section flex md:w-[400%] w-[420%]">
                {projectImages.map((project) => (
                    <div Loading key={project.id} className="panel relative flex items-center justify-center">
                        <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-8 md:p-12">
                            <img src={project.imageSrc} alt={project.title} className="project-image max-w-full max-h-full rounded-2xl object-cover" />
                            <h2 className="project-title flex items-center gap-3 md:text-3xl text-sm md:font-bold text-black mt-6 z-50 text-nowrap hover:text-gray-400 transition-colors duration-300 cursor-pointer">
                                {project.title} <SlShareAlt />
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
export default ProjectSection