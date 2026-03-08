import { motion, useScroll, useTransform } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

const StickyNav = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [300, 500], [0, 1]);
  const y = useTransform(scrollY, [300, 500], [-40, 0]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-[9990] backdrop-blur-xl bg-background/70 border-b border-border/50"
      style={{ opacity, y }}
    >
      <div className="flex items-center justify-between section-padding py-3">
        <span className="font-mono text-xs tracking-widest font-bold">YV</span>
        <div className="flex items-center gap-6 font-mono text-xs">
          <a href="#experience" className="hover-underline tracking-wider">EXP</a>
          <a href="#projects" className="hover-underline tracking-wider">PROJ</a>
          <a href="#skills" className="hover-underline tracking-wider">SKILLS</a>
          <a href="#contact" className="hover-underline tracking-wider">CONTACT</a>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
};

export default StickyNav;
