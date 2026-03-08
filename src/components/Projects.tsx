import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Trophy } from "lucide-react";
import { useRef, useState } from "react";
import projectLiftez from "@/assets/imgforgym.png";
import projectInternscrapes from "@/assets/imgforis.jpeg";
import projectGiants from "@/assets/imgforsite.jpg";

const projects = [
  {
    title: "LiftEZ",
    tech: "Python, OpenCV, MediaPipe, PyTorch, React",
    link: "https://github.com/Yug-Vashisth/DeltaHacks-Submission",
    devpost: "https://devpost.com/software/liftez",
    description: "AI-powered real-time form feedback for beginner gym exercises using pose estimation",
    stats: ["DeltaHacks XI", "Real-time CV pipeline", "3 exercises supported"],
    hackathon: true,
    image: projectLiftez
  },
  {
    title: "InternScrapes",
    tech: "Python, SQLite, BeautifulSoup",
    link: "https://github.com/Yug-Vashisth/Internscrapes",
    description: "Automated web scraper monitoring 8+ major tech companies for internship postings",
    stats: ["90% reduction in job search time", "1000+ unique postings tracked", "Daily email digests"],
    image: projectInternscrapes
  },
  {
    title: "Giants Gameday Predictor",
    tech: "Machine Learning, Python, Pandas",
    link: "https://github.com/Yug-Vashisth/Giants_ML_Predictor",
    description: "ML model predicting NFL game outcomes using historical data and betting lines",
    stats: ["70%+ validation accuracy", "Custom feature engineering", "Automated data pipelines"],
    image: projectGiants
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [showLabel, setShowLabel] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const labelX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const labelY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  // Parallax for image
  const imgY = useMotionValue(0);
  const imgYSpring = useSpring(imgY, { stiffness: 200, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    const yPercent = (e.clientY - rect.top) / rect.height - 0.5;
    imgY.set(yPercent * -20);
  };

  return (
    <motion.a
      ref={cardRef}
      key={index}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setShowLabel(true)}
      onMouseLeave={() => { setShowLabel(false); imgY.set(0); }}
      className="group block border border-border overflow-hidden hover:bg-foreground hover:text-background transition-colors duration-300 relative"
      whileHover={{ scale: 1.02 }}
    >
      {/* Floating VIEW label */}
      <motion.div
        className="absolute z-10 pointer-events-none font-mono text-xs tracking-widest bg-foreground text-background px-3 py-1.5 group-hover:bg-background group-hover:text-foreground"
        style={{ left: labelX, top: labelY, x: "-50%", y: "-50%" }}
        animate={{ opacity: showLabel ? 1 : 0, scale: showLabel ? 1 : 0.5 }}
        transition={{ duration: 0.15 }}
      >
        VIEW →
      </motion.div>

      {/* Project Image with parallax */}
      <div className="aspect-video overflow-hidden border-b border-border">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 group-hover:saturate-0 group-hover:contrast-125"
          style={{ y: imgYSpring }}
        />
      </div>

      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-3 flex-wrap">
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
      </div>
    </motion.a>
  );
};

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
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
