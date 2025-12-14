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

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-mono text-sm tracking-wider text-muted-foreground mb-6 border-b border-border pb-4">
              {category.title}
            </h3>
            <ul className="space-y-3">
              {category.skills.map((skill, i) => (
                <li key={i} className="text-lg hover:translate-x-2 transition-transform cursor-default">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Marquee */}
      <motion.div 
        className="mt-24 overflow-hidden border-y border-border py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
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