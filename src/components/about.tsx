
"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Database,
  Monitor,
  Braces,
  Layers,
} from "lucide-react";

const skills = [
  { name: "HTML & CSS", level: 90, icon: Monitor },
  { name: "JavaScript", level: 85, icon: Braces },
  { name: "React.js", level: 85, icon: Code2 },
  { name: "Next.js", level: 80, icon: Layers },
  { name: "Node.js & Express", level: 75, icon: Database },
  { name: "UI & Responsive Design", level: 85, icon: Palette },
];

const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">01 / ABOUT ME</p>

          <h2>
            Turning ideas into
            <br />
            <span>digital experiences.</span>
          </h2>

          <p className="about-description">
            Hi, I&apos;m Rifat Hossain, a passionate Full Stack Web Developer
            who enjoys creating modern, responsive, and user-friendly web
            applications.
          </p>

          <p className="about-description">
            I work with frontend and backend technologies to turn ideas into
            practical digital experiences. I enjoy learning new tools,
            solving problems, and writing clean, maintainable code.
          </p>

          <div className="about-highlights">
            <div className="about-highlight">
              <Code2 size={22} />
              <div>
                <h3>Clean Code</h3>
                <p>Readable and maintainable solutions</p>
              </div>
            </div>

            <div className="about-highlight">
              <Monitor size={22} />
              <div>
                <h3>Responsive Design</h3>
                <p>Experiences for different screen sizes</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          id="skills"
          className="skills-content"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="section-label">02 / MY EXPERTISE</p>

          <h3 className="skills-heading">Skills & Technologies</h3>

          <p className="skills-intro">
            Tools and technologies I use to build web experiences.
          </p>

          <div className="skills-list">
            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                >
                  <div className="skill-item-top">
                    <div className="skill-name">
                      <Icon size={18} />
                      <span>{skill.name}</span>
                    </div>

                    <span className="skill-percentage">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="skill-progress">
                    <motion.div
                      className="skill-progress-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: 0.2 + index * 0.08,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="technology-tags">
            {technologies.map((technology) => (
              <span key={technology} className="technology-tag">
                {technology}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
