import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const cursorBorderRef = useRef(null);

    // Computed before any hook so the value is stable across renders.
    // The early return comes AFTER all hooks — Rules of Hooks requires
    // hooks to be called unconditionally on every render.
    const isMobile =
        typeof window !== "undefined" &&
        window.matchMedia("(max-width: 768px)").matches;

    useEffect(() => {
        // Skip cursor setup on mobile — elements won't be mounted anyway
        if (isMobile) return;

        const cursor = cursorRef.current;
        const cursorBorder = cursorBorderRef.current;
        if (!cursor || !cursorBorder) return;

        // Start off-screen so they don't flash at (0, 0) on mount
        gsap.set([cursor, cursorBorder], { xPercent: -50, yPercent: -50 });

        // Dot moves fast; border ring lags slightly for a trailing effect
        const xTo       = gsap.quickTo(cursor,       "x", { duration: 0.2, ease: "power3.out" });
        const yTo       = gsap.quickTo(cursor,       "y", { duration: 0.2, ease: "power3.out" });
        const xToBorder = gsap.quickTo(cursorBorder, "x", { duration: 0.5, ease: "power3.out" });
        const yToBorder = gsap.quickTo(cursorBorder, "y", { duration: 0.5, ease: "power3.out" });

        const handleMouseMove = (e) => {
            xTo(e.clientX);
            yTo(e.clientY);
            xToBorder(e.clientX);
            yToBorder(e.clientY);
        };

        const handleMouseDown = () => {
            gsap.to([cursor, cursorBorder], { scale: 0.6, duration: 0.2 });
        };

        const handleMouseUp = () => {
            gsap.to([cursor, cursorBorder], { scale: 1, duration: 0.2 });
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mousedown", handleMouseDown);
        document.addEventListener("mouseup", handleMouseUp);

        // Remove listeners on unmount — prevents ghost handlers on hot-reload
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mousedown", handleMouseDown);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isMobile]);

    // Now safe to return null — all hooks have already been called above
    if (isMobile) return null;
    return(
        <>
            {/* Main Cursor Dot */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-[20px] h-[20px] bg-white rounded-full pointer-events-none z-[999] mix-blend-difference"
            />
            <div
                ref={cursorBorderRef}
                className="fixed top-0 left-0 w-[40px] h-[40px] border rounded-full border-white pointer-events-none z-[999] mix-blend-difference opacity-50"
            />
        </>
    );
};
export default CustomCursor;