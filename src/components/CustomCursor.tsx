import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  const trailId = useRef(0);

  const cursorX = useSpring(0, { stiffness: 400, damping: 25 });
  const cursorY = useSpring(0, { stiffness: 400, damping: 25 });
  const dotX = useSpring(0, { stiffness: 2000, damping: 50 });
  const dotY = useSpring(0, { stiffness: 2000, damping: 50 });

  // Rotation based on velocity
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotation = useTransform([rawX, rawY], ([x, y]: number[]) => {
    return (x + y) * 0.05;
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    let lastX = 0;
    let lastY = 0;
    let frameCount = 0;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      rawX.set(e.clientX - lastX);
      rawY.set(e.clientY - lastY);
      lastX = e.clientX;
      lastY = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Trail particles every few frames
      frameCount++;
      if (frameCount % 3 === 0) {
        trailId.current++;
        setTrail((prev) => [
          ...prev.slice(-8),
          { x: e.clientX, y: e.clientY, id: trailId.current },
        ]);
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const addHoverListeners = () => {
      const interactives = document.querySelectorAll("a, button, [role='button'], input, textarea, select, .hover-underline");
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      observer.disconnect();
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Trail particles */}
      {trail.map((point) => (
        <motion.div
          key={point.id}
          className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
          initial={{ x: point.x, y: point.y, scale: 1, opacity: 0.4, translateX: "-50%", translateY: "-50%" }}
          animate={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onAnimationComplete={() => {
            setTrail((prev) => prev.filter((p) => p.id !== point.id));
          }}
        >
          <div className="w-2 h-2 rounded-full bg-background" />
        </motion.div>
      ))}

      {/* Outer crosshair arrows */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          rotate: rotation,
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.7 : isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <div className="relative w-10 h-10">
          {/* Top arrow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div className="w-[1px] h-2 bg-background" />
            <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-l-transparent border-r-transparent border-b-background -mt-[1px] rotate-180" />
          </div>
          {/* Bottom arrow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-t-[4px] border-l-transparent border-r-transparent border-t-background -mb-[1px] rotate-180" />
            <div className="w-[1px] h-2 bg-background" />
          </div>
          {/* Left arrow */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-row items-center">
            <div className="w-0 h-0 border-t-[3px] border-b-[3px] border-r-[4px] border-t-transparent border-b-transparent border-r-background" />
            <div className="h-[1px] w-2 bg-background -ml-[1px]" />
          </div>
          {/* Right arrow */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-row items-center">
            <div className="h-[1px] w-2 bg-background -mr-[1px]" />
            <div className="w-0 h-0 border-t-[3px] border-b-[3px] border-l-[4px] border-t-transparent border-b-transparent border-l-background" />
          </div>
        </div>
      </motion.div>

      {/* Inner crosshair dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.5 : 1,
        }}
        transition={{ duration: 0.1 }}
      >
        {/* Crosshair */}
        <div className="relative w-3 h-3">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-background -translate-y-1/2" />
          <div className="absolute left-1/2 top-0 h-full w-[1px] bg-background -translate-x-1/2" />
        </div>
      </motion.div>
    </>
  );
};

export default CustomCursor;
