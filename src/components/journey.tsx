"use client";

import { motion } from "framer-motion";
import { GraduationCap, BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";

const journeyItems = [
  {
    type: "Education",
    year: "2026  Present",
    title: "Computer Science & Engineering",
    place: "Satkhira Government Polytechnic Institute",
    description:
      "Learning programming fundamentals, software development, data structures, and modern web technologies.",
    icon: GraduationCap,
    tags: ["Programming", "Computer Science", "Web Development"],
  },
  {
    type: "Experience",
    year: "2025 – Present",
    title: "Frontend Web Developer",
    place: "Personal Projects",
    description:
      "Developing responsive and interactive web applications using React, Next.js, Node.js, Express.js, and MongoDB.",
    icon: BriefcaseBusiness,
    tags: ["React", "Next.js", "Node.js", "MongoDB"],
  },
];

export default function Journey() {
  return (
    <section id="journey" className="journey-section">
      <div className="journey-container">
        <motion.div
          className="journey-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">03 / MY JOURNEY</p>
          <h2>
            Education <span>& Experience</span>
          </h2>
          <p>
            My learning journey, practical experience, and the milestones
            shaping my growth as a developer.
          </p>
        </motion.div>

        <div className="timeline">
          {journeyItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                className={`timeline-item ${
                  index % 2 === 0 ? "left" : "right"
                }`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="timeline-dot" />

                <article className="timeline-card">
                  <div className="journey-card-top">
                    <span className="timeline-type">
                      <Icon size={16} />
                      {item.type}
                    </span>

                    <span className="journey-card-number">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="timeline-year">
                    <CalendarDays size={15} />
                    {item.year}
                  </p>

                  <h3>{item.title}</h3>

                  <h4>
                    <MapPin size={15} />
                    {item.place}
                  </h4>

                  <p className="timeline-description">
                    {item.description}
                  </p>

                  <div className="journey-tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}