import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
        <h2 className="text-5xl md:text-7xl font-bold mt-4 mb-8">LET'S CONNECT</h2>
        <p className="text-xl opacity-70 mb-12 max-w-2xl">
          I'm always interested in discussing new opportunities, innovative projects, 
          or just connecting with fellow engineers and developers.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <a 
            href="mailto:vashisty@mcmaster.ca"
            className="group flex justify-between items-center border border-background/20 p-6 hover:bg-background hover:text-foreground transition-colors"
          >
            <div>
              <div className="font-mono text-sm opacity-60">EMAIL</div>
              <div className="text-xl mt-1">vashisty@mcmaster.ca</div>
            </div>
            <ArrowUpRight className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          <a 
            href="https://linkedin.com/in/yug-vashisth"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex justify-between items-center border border-background/20 p-6 hover:bg-background hover:text-foreground transition-colors"
          >
            <div>
              <div className="font-mono text-sm opacity-60">LINKEDIN</div>
              <div className="text-xl mt-1">linkedin.com/in/yug-vashisth</div>
            </div>
            <ArrowUpRight className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          <a 
            href="https://github.com/yug-vashisth"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex justify-between items-center border border-background/20 p-6 hover:bg-background hover:text-foreground transition-colors"
          >
            <div>
              <div className="font-mono text-sm opacity-60">GITHUB</div>
              <div className="text-xl mt-1">github.com/yug-vashisth</div>
            </div>
            <ArrowUpRight className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
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