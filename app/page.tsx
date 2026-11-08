"use client";

import { useEffect, useState } from "react";

const focusAreas = [
  {
    number: "01",
    title: "Social Sciences",
    description:
      "Understanding societies, institutions, human behaviour, and the forces that shape communities."
  },
  {
    number: "02",
    title: "Public Policy & Global Affairs",
    description:
      "Exploring public policy, international relations, global governance, and diplomatic frameworks."
  },
  {
    number: "03",
    title: "Technology & Innovation",
    description:
      "Building practical digital tools and learning how technology can solve real-world problems."
  }
];

const projects = [
  {
    number: "01",
    name: "Bushtigram",
    type: "Mobile application",
    description:
      "A social mobile application concept built with React Native, Expo, and Supabase, with a focus on communication and image sharing.",
    technologies: ["React Native", "Expo", "Supabase"]
  },
  {
    number: "02",
    name: "llspettro",
    type: "Digital magazine",
    description:
      "A digital content magazine exploring culture, editorial news, commentary, and modern discourse.",
    technologies: ["Digital publishing", "Editorial"]
  },
  {
    number: "03",
    name: "dnsstream",
    type: "Open-source contribution",
    description:
      "An open-source contribution involving .gitignore integration and project housekeeping.",
    technologies: ["Git", "GitHub", "Open source"]
  }
];

const stack = [
  {
    title: "Frontend",
    items: ["JavaScript", "TypeScript", "React Native", "Expo", "HTML5", "CSS3"]
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "Supabase", "REST APIs"]
  },
  {
    title: "Tools & Environment",
    items: ["Linux Mint", "Git", "GitHub", "Expo CLI"]
  },
  {
    title: "Learning & Research",
    items: ["Python", "Policy research", "MUN"]
  }
];

export default function Home() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved) {
      setDark(saved === "dark");
    } else {
      setDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
  }, [dark]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen bg-[var(--page)] text-[var(--text)] transition-colors">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#home" className="brand" onClick={closeMenu}>
            <span className="brand-mark">E.</span>
            <span>ESHTAOL EYUEL</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>
          </button>

          <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
            {[
              ["About", "#about"],
              ["Focus Areas", "#focus"],
              ["Projects", "#projects"],
              ["Stack", "#stack"],
              ["Contact", "#contact"]
            ].map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu}>{label}</a>
            ))}
            <button
              className="theme-toggle"
              type="button"
              onClick={() => setDark(!dark)}
              aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
              aria-pressed={dark}
            >
              {dark ? "☼ Light" : "☾ Dark"}
            </button>
          </nav>
        </div>
      </header>

      <div id="main-content">
        <section className="hero container" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> PORTFOLIO · ETHIOPIA</p>
            <h1>Ideas, society<br />& <span>software.</span></h1>
            <p className="hero-intro">
              I&apos;m Eshtaol Eyuel — a social science scholar and software developer
              interested in how ideas, institutions, and technology shape our world.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <span aria-hidden="true">↗</span></a>
              <a className="button button-secondary" href="#contact">Get in touch</a>
            </div>
          </div>
          <div className="hero-side" aria-label="Introduction">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="hero-monogram">EE</div>
            <p className="side-note">CURIOUS BY NATURE.<br />BUILDING WITH PURPOSE.</p>
            <span className="side-index">01 / 05</span>
          </div>
          <div className="hero-bottom">
            <span>SCROLL TO EXPLORE</span>
            <span className="scroll-line" />
            <span>01 — 05</span>
          </div>
        </section>

        <section className="section container" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT</p>
            <h2>Connecting ideas<br />with <span>action.</span></h2>
          </div>
          <div className="section-body">
            <p className="lead">
              I&apos;m Eshtaol Eyuel, based in Ethiopia, with a strong interest in
              social sciences and the role of technology in shaping society.
            </p>
            <p>
              My academic interests include public policy, international relations,
              global governance, diplomatic frameworks, applied economics, and law.
              I enjoy examining complex issues, understanding different perspectives,
              and connecting ideas across disciplines.
            </p>
            <p>
              Alongside my studies, I explore software development and build digital
              projects. I&apos;m interested in using technology as a practical tool for
              communication, creativity, and problem-solving. I also take part in
              Model United Nations (MUN) activities and policy-focused research.
            </p>
          </div>
        </section>

        <section className="section section-alt" id="focus">
          <div className="container">
            <div className="section-heading section-heading-wide">
              <div>
                <p className="eyebrow">02 / FOCUS AREAS</p>
                <h2>Where my curiosity<br /> <span>takes me.</span></h2>
              </div>
              <p className="heading-aside">A multidisciplinary perspective on people, policy, and technology.</p>
            </div>
            <div className="focus-grid">
              {focusAreas.map((item) => (
                <article className="focus-card" key={item.number}>
                  <span className="card-number">{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <span className="card-arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="projects">
          <div className="section-heading section-heading-wide">
            <div>
              <p className="eyebrow">03 / SELECTED WORK</p>
              <h2>Projects in<br /><span>progress.</span></h2>
            </div>
            <p className="heading-aside">A selection of projects and contributions across software and digital media.</p>
          </div>
          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-row" key={project.number}>
                <span className="project-number">{project.number}</span>
                <div className="project-main">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-list">
                    {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
                  </div>
                </div>
                <span className="project-symbol" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-alt" id="stack">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">04 / TECHNICAL STACK</p>
              <h2>Tools for<br /><span>making things.</span></h2>
            </div>
            <div className="stack-grid">
              {stack.map((group, index) => (
                <article className="stack-card" key={group.title}>
                  <span className="card-number">0{index + 1}</span>
                  <h3>{group.title}</h3>
                  <div className="tag-list">
                    {group.items.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section container" id="contact">
          <p className="eyebrow">05 / CONTACT</p>
          <h2>Have an idea?<br /><span>Let&apos;s connect.</span></h2>
          <p className="contact-intro">
            I&apos;m open to thoughtful conversations, learning opportunities,
            collaborations, and new ideas.
          </p>
          <div className="contact-links">
            <a className="contact-email" href="mailto:eshtaoleyualep@gmail.com">
              eshtaoleyualep@gmail.com <span aria-hidden="true">↗</span>
            </a>
            <a href="https://github.com/Eshtaol-io" target="_blank" rel="noopener noreferrer">
              GitHub profile <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </div>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a href="#home" className="brand"><span className="brand-mark">E.</span><span>ESHTAOL EYUEL</span></a>
          <p>© {new Date().getFullYear()} Eshtaol Eyuel. Built with curiosity.</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
