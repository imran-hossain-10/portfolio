
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  ArrowDown,
  ArrowUpRight,
  Link,
  Mail,
  Code2,
  Download,
} from "lucide-react";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* LEFT CONTENT */}

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-status">
            <span className="status-dot" />
            Available for opportunities
          </div>

          <p className="hero-greeting">
            HELLO, I&apos;M
          </p>

          <h1 className="hero-title">
            IMRAN
            <br />
            <span>HOSSAIN</span>
            <span className="hero-title-dot">.</span>
          </h1>

          <h2 className="hero-designation">
            FRONTEND <span>WEB DEVELOPER</span>
          </h2>

          <p className="hero-description">
            I build modern, responsive and interactive web
            applications with clean code and creative design.
            Turning ideas into meaningful digital experiences.
          </p>

          <div className="hero-buttons">
            <a
              href="#projects"
              className="hero-primary-btn"
            >
              Explore My Work
              <ArrowUpRight size={18} />
            </a>

            <a
              href="/MD_Imran_Hosen_Resume_Updated.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-secondary-btn"
            >
              Download Resume
              <Download size={18} />
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Code2 size={20} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Link size={20} />
            </a>

            <a
              href="mailto:your-email@example.com"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT PROFILE */}

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="hero-glow" />

          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />

          <div className="hero-profile">
            <Image
              src="/images/profile1.jpg"
              alt="Imran Hossain"
              width={500}
              height={600}
              priority
            />
          </div>

          <motion.div
            className="hero-floating-card"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Code2 size={22} />

            <div>
              <strong>Frontend Developer</strong>
              <span>Building the future of web</span>
            </div>
          </motion.div>

          <div className="hero-code-card">
            <span className="code-dot red" />
            <span className="code-dot yellow" />
            <span className="code-dot green" />

            <div className="code-content">
              <p>
                <span>const</span> developer = {"{"}
              </p>

              <p className="code-indent">
                name: <span>&quot;Imran&quot;</span>,
              </p>

              <p className="code-indent">
                role: <span>&quot;Frontend&quot;</span>,
              </p>

              <p className="code-indent">
                passion: <span>&quot;Building&quot;</span>
              </p>

              <p>{"}"}</p>
            </div>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={16} />
      </a>

      <div className="hero-bottom-glow" />
    </section>
  );
}
