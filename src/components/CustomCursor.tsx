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

      {/* Outer ring — morphs shape on hover */}
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
          width: isClicking ? 30 : isHovering ? 64 : 40,
          height: isClicking ? 30 : isHovering ? 64 : 40,
          opacity: isVisible ? 1 : 0,
          borderRadius: isHovering ? "30%" : "50%",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <div className="w-full h-full border border-background relative">
          <div
            className="absolute inset-0"
            style={{ borderRadius: "inherit" }}
          />
          {/* Corner accents when hovering */}
          {isHovering && (
            <>
              <motion.div
                className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-background"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.div
                className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-background"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.15, delay: 0.05 }}
              />
              <motion.div
                className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-background"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.15, delay: 0.1 }}
              />
              <motion.div
                className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-background"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.15, delay: 0.15 }}
              />
            </>
          )}
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
