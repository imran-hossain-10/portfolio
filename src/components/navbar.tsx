
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Journey", href: "#journey" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link href="#home" className="logo">
          <span className="logo-icon">I</span>
          <span>
            IMRAN<span className="logo-accent">.</span>
          </span>
        </Link>

        <nav className="desktop-nav">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              {item.name}
            </Link>
          ))}
        </nav>

        <a
          href="/MD_Imran_Hosen_Resume_Updated.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-resume"
        >
          Resume <ArrowUpRight size={16} />
        </a>

        <button
          className="mobile-menu"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <a href="/MD_Imran_Hosen_Resume_Updated.pdf" target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
        </nav>
      )}
    </header>
  );
}
