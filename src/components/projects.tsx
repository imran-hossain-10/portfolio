"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [

{
  title: "Fit Logo",
  number: "01",
  category: "Web Application",
  description:
    "A web project designed to deliver a clean, responsive, and user-friendly experience.",
  image: "/images/fitlogo.jpg",
  technologies: ["Next.js", "React", "Tailwind CSS"],
  live: "https://fit-logo-qq4cwwktg-imran-wevsites.vercel.app/",
  github: "https://github.com/imran-hossain-10/fit-logo",
},


{
  title: "BazarDor",
  number: "02",
  category: "Frontend Web Application",
  description:
    "A responsive product browsing application that helps users explore products and categories through an intuitive interface.",
  image: "/images/bazer.jpg",
  technologies: ["Next.js", "React", "API", "Tailwind CSS"],
  live: "https://bazar-dor-ub6x.vercel.app/",
  github: "https://github.com/imran-hossain-10/bazar-dor",
},

  
{
  title: "DevStack",
  number: "03",
  category: "Web Application",
  description:
    "A web application built to provide a modern, responsive, and user-friendly experience.",
  image: "/images/devsteck.jpg",
  technologies: ["Next.js", "React", "Tailwind CSS"],
  live: "https://devstack-fjs6uzok5-imran-wevsites.vercel.app/",
  github: "https://github.com/imran-hossain-10/devstack",
},

];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">04 / SELECTED WORKS</p>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p>
            A collection of projects that showcase my skills and passion
            for building modern web applications.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className="project-image-content"
                />

                <span className="project-number">{project.number}</span>

                <span className="project-image-overlay">
                  <ArrowUpRight size={30} />
                </span>
              </div>

              <div className="project-details">
                <p className="project-category">{project.category}</p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  ) : (
                    <span className="project-link-disabled">
                      <ExternalLink size={16} />
                      Live Demo
                    </span>
                  )}

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} GitHub repository`}
                    >
                      <Code2 size={16} />
                      GitHub
                    </a>
                  ) : (
                    <span className="project-link-disabled">
                      <Code2 size={16} />
                      GitHub
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}