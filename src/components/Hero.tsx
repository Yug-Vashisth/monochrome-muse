import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const TypewriterDescription = ({ text, delay }: { text: string; delay: number }) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 25);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <div className="mt-12 max-w-xl">
      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
        {displayed}
        {started && displayed.length < text.length && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.4, repeat: Infinity }}
            className="inline-block w-[2px] h-[1em] bg-muted-foreground ml-0.5 align-middle"
          />
        )}
      </p>
    </div>
  );
};


const letterVariants = {
  hidden: { opacity: 0, y: 80, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      delay: 0.3 + i * 0.04,
      ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
    },
  }),
};

const MagneticLink = ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { children: React.ReactNode }) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    e.currentTarget.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = "translate(0, 0)";
  };

  return (
    <a
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex items-center gap-2 font-mono text-sm hover-underline transition-transform duration-200"
      {...props}
    >
      {children}
    </a>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-between section-padding py-8">
      {/* Header */}
      <motion.header
        className="flex justify-between items-start gap-4 min-h-0 overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="font-mono text-sm tracking-wider shrink-0">
          <span className="text-muted-foreground">SOFTWARE ENGINEER</span>
        </div>
        <nav
          className="flex items-center gap-4 md:gap-6 font-mono text-sm shrink min-w-0 overflow-x-auto overflow-y-hidden py-1 -my-1 [scrollbar-width:thin] [-webkit-overflow-scrolling:touch] touch-pan-x"
          aria-label="Main navigation"
        >
          <a href="#experience" className="hover-underline whitespace-nowrap">EXPERIENCE</a>
          <a href="#projects" className="hover-underline whitespace-nowrap">PROJECTS</a>
          <a href="#skills" className="hover-underline whitespace-nowrap">SKILLS</a>
          <a href="#contact" className="hover-underline whitespace-nowrap">CONTACT</a>
          <span className="shrink-0">
            <ThemeToggle />
          </span>
        </nav>
      </motion.header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center -mt-20">
        <div className="overflow-hidden">
          <h1 className="text-[clamp(2.5rem,12vw,9rem)] font-bold leading-[0.85] tracking-tighter flex flex-wrap">
            {nameLetters.map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className={letter === " " ? "mr-[0.2em]" : "inline-block"}
                style={{ display: "inline-block" }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Animated line */}
        <motion.div
          className="h-[1px] bg-foreground mt-8 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
        />

        <TypewriterDescription
          text="Software Engineering student at McMaster University with a passion for AI/ML, data science, and embedded systems, crafting intelligent solutions from silicon to software."
          delay={1}
        />

        <motion.div
          className="mt-8 flex gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <MagneticLink href="https://github.com/yug-vashisth" target="_blank" rel="noopener noreferrer">
            <Github size={18} />
            GITHUB
          </MagneticLink>
          <MagneticLink href="https://linkedin.com/in/yug-vashisth" target="_blank" rel="noopener noreferrer">
            <Linkedin size={18} />
            LINKEDIN
          </MagneticLink>
          <MagneticLink href="mailto:vashisty@mcmaster.ca">
            <Mail size={18} />
            EMAIL
          </MagneticLink>
        </motion.div>
      </div>

      {/* Bottom */}
      <motion.div
        className="flex justify-between items-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <div className="font-mono text-sm text-muted-foreground">
          <div>3.85 GPA</div>
          <div>USA/CANADA DUAL CITIZEN</div>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={24} />
        </motion.div>
        <div className="font-mono text-sm text-right text-muted-foreground">
          <div>MISSISSAUGA, ON</div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
