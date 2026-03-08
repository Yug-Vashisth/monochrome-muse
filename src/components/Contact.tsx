import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const contactLinks = [
  { label: "EMAIL", value: "vashisty@mcmaster.ca", href: "mailto:vashisty@mcmaster.ca" },
  { label: "LINKEDIN", value: "linkedin.com/in/yug-vashisth", href: "https://linkedin.com/in/yug-vashisth", external: true },
  { label: "GITHUB", value: "github.com/yug-vashisth", href: "https://github.com/yug-vashisth", external: true },
];

const TiltCard = ({ children, href, external }: { children: React.ReactNode; href: string; external?: boolean }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(y * -10);
    rotateY.set(x * 10);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformPerspective: 800,
      }}
      className="group flex justify-between items-center border border-background/20 p-6 hover:bg-background hover:text-foreground transition-colors relative overflow-hidden"
    >
      {/* Animated border glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 border border-background/40" />
      </div>
      {children}
    </motion.a>
  );
};

const TypewriterText = ({ text }: { text: string }) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <h2 ref={ref} className="text-5xl md:text-7xl font-bold mt-4 mb-8">
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block w-[3px] h-[1em] bg-current ml-1 align-middle"
      />
    </h2>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 section-padding bg-foreground text-background">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl"
      >
        <span className="font-mono text-sm tracking-wider opacity-60">04</span>
        <TypewriterText text="LET'S CONNECT" />
        <p className="text-xl opacity-70 mb-12 max-w-2xl">
          I'm always interested in discussing new opportunities, innovative projects,
          or just connecting with fellow engineers and developers.
        </p>

        <div className="grid md:grid-cols-2 gap-8" style={{ perspective: 800 }}>
          {contactLinks.map((link) => (
            <TiltCard key={link.label} href={link.href} external={link.external}>
              <div>
                <div className="font-mono text-sm opacity-60">{link.label}</div>
                <div className="text-xl mt-1">{link.value}</div>
              </div>
              <ArrowUpRight className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </TiltCard>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        className="mt-32 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="font-mono text-sm opacity-60">
          © 2025 YUG VASHISTH — ALL RIGHTS RESERVED
        </div>
        <div className="font-mono text-sm opacity-60">
          DUAL CITIZEN — USA / CANADA
        </div>
      </motion.footer>
    </section>
  );
};

export default Contact;
