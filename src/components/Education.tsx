import { motion } from "framer-motion";

const Education = () => {
  return (
    <section className="py-32 section-padding">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-16 items-center"
      >
        <div>
          <span className="font-mono text-sm tracking-wider text-muted-foreground">EDUCATION</span>
          <h2 className="text-5xl md:text-7xl font-bold mt-4 leading-tight">
            McMASTER
            <br />
            UNIVERSITY
          </h2>
        </div>

        <div className="space-y-8">
          <div>
            <div className="font-mono text-sm text-muted-foreground mb-2">DEGREE</div>
            <div className="text-2xl font-medium">Bachelor of Engineering</div>
            <div className="text-xl text-muted-foreground">Software Engineering</div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="font-mono text-sm text-muted-foreground mb-2">TIMELINE</div>
              <div className="text-xl">Sep 2023 – Apr 2027</div>
            </div>
            <div>
              <div className="font-mono text-sm text-muted-foreground mb-2">GPA</div>
              <div className="text-5xl font-bold">3.85</div>
            </div>
          </div>

          <div>
            <div className="font-mono text-sm text-muted-foreground mb-2">LOCATION</div>
            <div className="text-xl">Hamilton, Ontario</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;