
"use client";

import { motion } from "framer-motion";
import {
  UserRound,
  Globe,
  MapPin,
  Phone,
  Mail,
  GraduationCap,
} from "lucide-react";

const personalInfo = [
  {
    label: "NAME",
    value: "Imran Hossain",
    Icon: UserRound,
  },
  {
    label: "NATIONALITY",
    value: "Bangladeshi",
    Icon: Globe,
  },
  {
    label: "ADDRESS",
    value: "Satkhira, Bangladesh",
    Icon: MapPin,
  },
  {
    label: "PHONE",
    value: "+8801956750549",
    Icon: Phone,
  },
  {
    label: "E-MAIL",
    value: "imran098765678@gmail.com",
    Icon: Mail,
  },
  {
    label: "EDUCATION",
    value: "Diploma in CST",
    Icon: GraduationCap,
  },
];

export function AboutInfo() {
  return (
    <section className="about-info-section">
      <div className="about-info-grid">
        {personalInfo.map((item, index) => {
          const Icon = item.Icon;

          return (
            <motion.div
              key={item.label}
              className="about-info-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="about-info-icon">
                <Icon size={25} strokeWidth={2.5} />
              </div>

              <div className="about-info-content">
                <span>{item.label}</span>
                <h3>{item.value}</h3>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
