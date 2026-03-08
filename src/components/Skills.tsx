import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "LANGUAGES",
    skills: ["TypeScript", "JavaScript", "Ruby", "Python", "Java", "SQL", "C", "C++", "Bash"]
  },
  {
    title: "FRONTEND",
    skills: ["React", "HTML", "CSS", "Tailwind"]
  },
  {
    title: "BACKEND",
    skills: ["Node.js", "Ruby on Rails", "Flask", "Django", "REST APIs"]
  },
  {
    title: "DATA & INFRA",
    skills: ["PostgreSQL", "Docker", "CI/CD (GitHub Actions)", "Linux", "Git"]
  },
  {
    title: "TOOLS & PRACTICES",
    skills: ["Testing (Jest/PyTest/JUnit)", "SDLC", "Agile", "System Design Basics", "OOP"]
  },
  {
    title: "ADDITIONAL",
    skills: ["Arduino", "ESP32", "STM32", "I2C", "UART", "Verilog", "VHDL", "Tableau"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 section-padding bg-secondary">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="font-mono text-sm tracking-wider text-muted-foreground">03</span>
        <h2 className="text-5xl md:text-7xl font-bold mt-2">SKILLS</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <h3 className="font-mono text-sm tracking-wider text-muted-foreground mb-6 border-b border-border pb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  className="px-4 py-2 text-sm font-mono border border-border hover:bg-foreground hover:text-background transition-all duration-300 cursor-default relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative">{skill}</span>
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Marquee with gradient fade */}
      <motion.div
        className="mt-24 overflow-hidden border-y border-border py-6 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-secondary to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-secondary to-transparent" />

        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex">
              {skillCategories.flatMap(cat => cat.skills).map((skill, index) => (
                <span key={index} className="mx-8 text-2xl font-bold opacity-20">
                  {skill}
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
