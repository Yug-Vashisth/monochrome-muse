import { motion } from "framer-motion";

const experiences = [
  {
    company: "McMaster University",
    role: "Teaching Assistant",
    period: "Aug 2025 – Present",
    location: "Hamilton, ON",
    description: "Digital Systems & Computer Architecture",
    highlights: [
      "Led weekly lab sessions for 60+ undergraduate students",
      "Designed simulation-based lab tools using VHDL/Verilog",
      "Contributed to 20% increase in lab performance metrics"
    ]
  },
  {
    company: "RBC – Royal Bank of Canada",
    role: "Data Engineering Intern",
    period: "May 2025 – Aug 2025",
    location: "Toronto, ON",
    description: "Enterprise HR Analytics",
    highlights: [
      "Engineered data pipelines and ETL processes across cloud and on-premise platforms",
      "Automated Tableau dashboards, improving reporting speed by 65%",
      "Reduced manual testing effort by 75% with QA automation scripts"
    ]
  },
  {
    company: "Atlantis AI",
    role: "AI Software Engineer Intern",
    period: "Mar 2025 – May 2025",
    location: "Remote",
    description: "LLM Tools & RAG Systems",
    highlights: [
      "Designed backend architecture for LLM tools with RAG",
      "Built ReAct agents with advanced retrieval capabilities",
      "Developed Python APIs using Flask and Django"
    ]
  },
  {
    company: "McMaster ExoSkeleton",
    role: "Embedded Software Engineer",
    period: "Oct 2024 – Present",
    location: "Hamilton, ON",
    description: "Exoskeleton Technology",
    highlights: [
      "Designed motor control algorithms for exoskeleton technology",
      "Developed predictive AI models for user adaptability",
      "Integrated sensor feedback systems for precise movement"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 section-padding bg-foreground text-background">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="font-mono text-sm tracking-wider opacity-60">01</span>
        <h2 className="text-5xl md:text-7xl font-bold mt-2">EXPERIENCE</h2>
      </motion.div>

      <div className="space-y-0">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border-t border-background/20 py-10 grid md:grid-cols-12 gap-8"
          >
            <div className="md:col-span-4">
              <div className="font-mono text-sm opacity-60">{exp.period}</div>
              <h3 className="text-2xl font-bold mt-2">{exp.company}</h3>
              <div className="text-lg mt-1">{exp.role}</div>
              <div className="font-mono text-sm opacity-60 mt-2">{exp.location}</div>
            </div>
            <div className="md:col-span-8">
              <div className="font-mono text-sm opacity-60 mb-4">{exp.description}</div>
              <ul className="space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="opacity-40 font-mono">→</span>
                    <span className="opacity-80">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;