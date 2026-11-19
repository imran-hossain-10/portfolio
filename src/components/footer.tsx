"use client";

"use client";

import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  MessageCircle,
  Code2,
  Home,
  User,
  Briefcase,
  GraduationCap,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main">

          {/* BRAND SECTION */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="footer-logo-mark">
                <Code2 size={30} />
              </span>

              <span>
                IMRAN.
                <small>WEB DEVELOPER</small>
              </span>
            </a>

            <p>
              I am Imran Hossain, a passionate Frontend Web
              Developer. I build modern, responsive, and
              interactive web applications using the latest
              technologies.
            </p>

<div className="footer-socials">
  <a
    href="https://github.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>

  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn />
  </a>

  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <FaFacebookF />
  </a>

  <a
    href="mailto:your-email@example.com"
    aria-label="Email"
  >
    <Mail />
  </a>
</div>
          </div>

          {/* NAVIGATION SECTION */}
          <div className="footer-navigation">
            <h3>QUICK LINKS</h3>

            <nav aria-label="Footer navigation">
              <a href="#home">
                <Home size={18} />
                Home
              </a>

              <a href="#about">
                <User size={18} />
                About Me
              </a>

              <a href="#skills">
                <Code2 size={18} />
                My Skills
              </a>

              <a href="#education">
                <GraduationCap size={18} />
                Education
              </a>

              <a href="#projects">
                <Briefcase size={18} />
                Projects
              </a>

              <a href="#contact">
                <ArrowUpRight size={18} />
                Contact
              </a>
            </nav>
          </div>

          {/* CONTACT SECTION */}
          <div className="footer-contact">
            <h3>GET IN TOUCH</h3>

            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={23} />
              </div>

              <div>
                <small>EMAIL ADDRESS</small>
                <a href="mailto:your-email@example.com">
                  imran098765678@example.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={23} />
              </div>

              <div>
                <small>PHONE NUMBER</small>
                <p>+880 1956750549</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={23} />
              </div>

              <div>
                <small>LOCATION</small>
                <p>Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">
          <p>
            © 2026 <strong>IMRAN HOSSAIN</strong>.
            All rights reserved.
          </p>

          <div className="availability">
            <span />
            AVAILABLE FOR OPPORTUNITIES
          </div>
        </div>
      </div>

      {/* FLOATING CONTACT BUTTON */}
      <a
        href="#contact"
        className="footer-chat"
        aria-label="Contact Me"
      >
        <MessageCircle size={28} />
      </a>
    </footer>
  );
}