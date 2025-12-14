import { motion } from "framer-motion";
import { ArrowUpRight, Trophy } from "lucide-react";

const projects = [
  {
    title: "LiftEZ",
    tech: "Python, OpenCV, MediaPipe, PyTorch, React",
    link: "https://github.com/Yug-Vashisth/DeltaHacks-Submission",
    devpost: "https://devpost.com/software/liftez",
    description: "AI-powered real-time form feedback for beginner gym exercises using pose estimation",
    stats: ["DeltaHacks XI", "Real-time CV pipeline", "3 exercises supported"],
    hackathon: true
  },
  {
    title: "InternScrapes",
    tech: "Python, SQLite, BeautifulSoup",
    link: "https://github.com/Yug-Vashisth/Internscrapes",
    description: "Automated web scraper monitoring 8+ major tech companies for internship postings",
    stats: ["90% reduction in job search time", "1000+ unique postings tracked", "Daily email digests"]
  },
  {
    title: "Giants Gameday Predictor",
    tech: "Machine Learning, Python, Pandas",
    link: "https://github.com/Yug-Vashisth/Giants_ML_Predictor",
    description: "ML model predicting NFL game outcomes using historical data and betting lines",
    stats: ["70%+ validation accuracy", "Custom feature engineering", "Automated data pipelines"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 section-padding">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="font-mono text-sm tracking-wider text-muted-foreground">02</span>
        <h2 className="text-5xl md:text-7xl font-bold mt-2">PROJECTS</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="group block border border-border p-8 hover:bg-foreground hover:text-background transition-colors duration-300"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="font-mono text-sm text-muted-foreground group-hover:text-background/60">
                  {project.tech}
                </div>
                {project.hackathon && (
                  <span className="flex items-center gap-1 text-xs font-mono border border-current px-2 py-0.5">
                    <Trophy size={12} />
                    HACKATHON
                  </span>
                )}
              </div>
              <ArrowUpRight 
                size={24} 
                className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0" 
              />
            </div>

            <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
            <p className="text-muted-foreground group-hover:text-background/70 mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-4">
              {project.stats.map((stat, i) => (
                <span 
                  key={i} 
                  className="font-mono text-xs px-3 py-1 border border-current opacity-60"
                >
                  {stat}
                </span>
              ))}
            </div>

            {project.devpost && (
              <a
                href={project.devpost}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-block font-mono text-xs underline opacity-60 hover:opacity-100 transition-opacity"
              >
                View on DevPost →
              </a>
            )}
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;