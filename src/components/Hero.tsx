import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-between section-padding py-8">
      {/* Header */}
      <motion.header 
        className="flex justify-between items-start"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="font-mono text-sm tracking-wider">
          <span className="text-muted-foreground">SOFTWARE ENGINEER</span>
        </div>
        <nav className="flex gap-6 font-mono text-sm">
          <a href="#experience" className="hover-underline">EXPERIENCE</a>
          <a href="#projects" className="hover-underline">PROJECTS</a>
          <a href="#skills" className="hover-underline">SKILLS</a>
          <a href="#contact" className="hover-underline">CONTACT</a>
        </nav>
      </motion.header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center -mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-[clamp(2.5rem,12vw,9rem)] font-bold leading-[0.85] tracking-tighter">
            YUG
            <br />
            VASHISTH
          </h1>
        </motion.div>

        <motion.div 
          className="mt-12 max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Software Engineering student at McMaster University passionate about 
            AI/ML, data science, and building intelligent systems that make an impact.
          </p>
        </motion.div>

        <motion.div 
          className="mt-8 flex gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <a 
            href="https://github.com/yug-vashisth" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-sm hover-underline"
          >
            <Github size={18} />
            GITHUB
          </a>
          <a 
            href="https://linkedin.com/in/yug-vashisth" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-sm hover-underline"
          >
            <Linkedin size={18} />
            LINKEDIN
          </a>
          <a 
            href="mailto:vashisty@mcmaster.ca"
            className="flex items-center gap-2 font-mono text-sm hover-underline"
          >
            <Mail size={18} />
            EMAIL
          </a>
        </motion.div>
      </div>

      {/* Bottom */}
      <motion.div 
        className="flex justify-between items-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
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