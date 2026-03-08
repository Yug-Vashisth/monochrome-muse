import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";

const floatingDots = Array.from({ length: 12 }, (_, i) => ({
  x: Math.cos((i / 12) * Math.PI * 2) * 120 + 150,
  y: Math.sin((i / 12) * Math.PI * 2) * 120 + 150,
  delay: i * 0.15,
}));

const Education = () => {
  return (
    <section className="py-32 section-padding">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* McMaster Crescent Background with floating particles */}
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] pointer-events-none">
          <svg viewBox="0 0 300 300" className="w-full h-full opacity-[0.03]">
            <path
              d="M150 15 C225 15 285 75 285 150 C285 225 225 285 150 285 C75 285 15 225 15 150 C15 75 75 15 150 15"
              fill="none"
              stroke="currentColor"
              strokeWidth="24"
              strokeLinecap="round"
              strokeDasharray="360 180"
            />
          </svg>
          {/* Floating dots */}
          {floatingDots.map((dot, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-foreground/10"
              style={{ left: dot.x, top: dot.y }}
              animate={{
                y: [0, -10, 0, 10, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4,
                delay: dot.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <span className="font-mono text-sm tracking-wider text-muted-foreground">EDUCATION</span>

            {/* McMaster Crescent Icon */}
            <motion.div
              initial={{ rotate: -180, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="inline-block ml-4 align-middle"
            >
              <svg viewBox="0 0 40 40" className="w-8 h-8">
                <path
                  d="M20 4 C30 4 38 12 38 22 C38 32 30 38 20 38"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-bold mt-4 leading-tight">
              McMASTER
              <br />
              <span className="relative">
                UNIVERSITY
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-2 left-0 w-full h-1 bg-foreground origin-left"
                />
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="mt-8 text-muted-foreground font-mono text-sm max-w-xs"
            >
              Building the future through engineering innovation and research excellence.
            </motion.p>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="border border-border p-6 hover:bg-foreground hover:text-background transition-all duration-300 group backdrop-blur-sm hover:shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]"
            >
              <div className="font-mono text-sm text-muted-foreground group-hover:text-background/60 mb-2">DEGREE</div>
              <div className="text-2xl font-medium">Bachelor of Engineering</div>
              <div className="text-xl text-muted-foreground group-hover:text-background/70">Software Engineering</div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="border border-border p-6 hover:bg-foreground hover:text-background transition-all duration-300 group"
              >
                <div className="font-mono text-sm text-muted-foreground group-hover:text-background/60 mb-2">TIMELINE</div>
                <div className="text-lg">Sep 2023</div>
                <div className="text-muted-foreground group-hover:text-background/70">→ Apr 2027</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="border border-border p-6 bg-foreground text-background relative overflow-hidden"
              >
                <div className="font-mono text-sm text-background/60 mb-2">GPA</div>
                <div className="text-5xl font-bold">
                  <AnimatedCounter target={3.85} decimals={2} duration={1.5} />
                </div>
                {/* Subtle glow */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-background/10 blur-2xl" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 font-mono text-sm"
            >
              <div className="w-3 h-3 border border-foreground rotate-45" />
              <span className="text-muted-foreground">Hamilton, Ontario, Canada</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
