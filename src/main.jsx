import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const projects = [
  {
    number: "01",
    title: "CareSight",
    description:
      "AI-powered healthcare application designed to help users manage medicines, prescriptions, reminders and health information.",
    tags: ["React", "MongoDB", "Flask", "AI", "OCR"],
    link: "https://github.com/keerthimrao05",
  },
  {
    number: "02",
    title: "AI ASHA",
    description:
      "Digital assistant concept for ASHA workers with patient records, vaccination support, training resources and AI-assisted healthcare features.",
    tags: ["React", "Python", "AI", "MongoDB"],
    link: "https://github.com/keerthimrao05",
  },
  {
    number: "03",
    title: "DevOps CI/CD Pipeline",
    description:
      "A CI/CD pipeline simulator demonstrating automated testing, Docker builds, deployment workflows and environment management.",
    tags: ["Next.js", "Docker", "GitHub", "AWS", "CI/CD"],
    link: "https://github.com/keerthimrao05",
  },
  {
    number: "04",
    title: "Prodigy Data Science",
    description:
      "Data science projects involving data analysis, visualization and machine learning as part of a practical internship experience.",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "ML"],
    link: "https://github.com/keerthimrao05",
  },
];

const skills = [
  {
    number: "01",
    title: "Programming",
    text: "Python • JavaScript • HTML • CSS",
  },
  {
    number: "02",
    title: "Frontend",
    text: "React • Vite • Next.js • Responsive UI",
  },
  {
    number: "03",
    title: "Backend",
    text: "Flask • FastAPI • REST APIs • Node.js",
  },
  {
    number: "04",
    title: "Database",
    text: "MongoDB • MongoDB Atlas • PostgreSQL",
  },
  {
    number: "05",
    title: "AI / ML",
    text: "Machine Learning • Data Science • OCR • AI Applications",
  },
  {
    number: "06",
    title: "Cloud & DevOps",
    text: "AWS • Git • GitHub • Docker • CI/CD",
  },
];

function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="app">

      {/* SIDE BAR */}
      <aside className="side">
        <div className="mark">
          K<span>.</span>
        </div>

        <div className="sideLine" />

        <div className="sideText">
          AI / ML • FULL STACK • DEVELOPER
        </div>

        <div className="sideSocial">
          <a
            href="https://github.com/keerthimrao05"
            target="_blank"
            rel="noreferrer"
          >
            GH
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            IN
          </a>
        </div>
      </aside>

      {/* NAVBAR */}
      <header className="topbar">
        <button className="logo" onClick={() => scrollTo("home")}>
          KEERTHI <b>↗</b>
        </button>

        <nav>
          <button onClick={() => scrollTo("home")}>HOME</button>
          <button onClick={() => scrollTo("about")}>ABOUT</button>
          <button onClick={() => scrollTo("work")}>WORK</button>
          <button onClick={() => scrollTo("skills")}>SKILLS</button>
          <button onClick={() => scrollTo("contact")}>CONTACT</button>
        </nav>

        <button
          className="menu"
          onClick={() =>
            document.querySelector(".topbar nav")?.classList.toggle("open")
          }
        >
          MENU
        </button>
      </header>

      {/* HERO */}
      <section className="hero" id="home">

        <div className="heroTop">
          <span>PORTFOLIO / 2026</span>

          <span className="location">
            ● INDIA / KARNATAKA
          </span>
        </div>

        <div className="heroTitle">

          <p>
            AI / ML DEVELOPER — FULL STACK BUILDER
          </p>

          <div className="heroNameRow">

            <h1>
              Keerthi
              <i>M Rao</i>
            </h1>

            {/* HIRE ME BUTTON */}
            <a
              className="hireBtn"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=keerthimrao05@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <span>HIRE</span>
              <span>ME</span>
              <span>↗</span>
            </a>

          </div>

          <div className="heroTag">
            AI / ML <span>×</span> FULL STACK <span>×</span> CLOUD
          </div>

        </div>
        <div className="heroActions">
          <a
            href="/Keerthi_M_Rao_Resume.pdf"
            download="Keerthi_M_Rao_Resume.pdf"
            className="resumeBtn"
          >
            DOWNLOAD RESUME ↓
          </a>
        </div>
        <div className="heroBottom">

          <p>
            I build practical digital products by combining
            artificial intelligence, modern web development,
            data and cloud technologies.
          </p>

          <button
            className="circleBtn"
            onClick={() => scrollTo("work")}
          >
            VIEW
            <br />
            WORK ↓
          </button>

        </div>

        <div className="heroNumber">
          01
          <small> / 05</small>
        </div>

      </section>

      {/* ABOUT */}
      <section className="about" id="about">

        <div className="sectionLabel">
          01 — ABOUT ME
        </div>

        <div className="aboutGrid">

          <h2>
            Building
            <br />
            <em>ideas</em>
            <br />
            into reality.
          </h2>

          <div className="aboutCopy">

            <p className="lead">
              I'm Keerthi M Rao, a 7th-semester Information
              Science & Engineering student focused on AI/ML,
              full-stack development and cloud technologies.
            </p>

            <p>
              I enjoy creating applications that solve practical
              problems rather than building projects just for
              demonstration. My work combines Python, React,
              MongoDB, APIs, machine learning and cloud technologies.
            </p>

            <p style={{ marginTop: "20px" }}>
              Currently looking for internship opportunities where
              I can contribute to real-world projects, strengthen
              my engineering skills and keep learning.
            </p>

            <div className="quick">

              <div>
                <span>07</span>
                <small>SEMESTER</small>
              </div>

              <div>
                <span>AI</span>
                <small>FOCUS</small>
              </div>

              <div>
                <span>∞</span>
                <small>LEARNING</small>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section className="work" id="work">

        <div className="sectionLabel">
          02 — SELECTED WORK
        </div>

        <div className="workIntro">

          <h2>
            Things I've
            <br />
            <em>built.</em>
          </h2>

          <span>
            04 / PROJECTS
          </span>

        </div>

        <div className="projects">

          {projects.map((project) => (
            <article
              className="project"
              key={project.number}
            >

              <div className="pTop">
                <span>{project.number}</span>
                <span>PROJECT</span>
              </div>

              <h3>{project.title}</h3>

              <p>
                {project.description}
              </p>

              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                VIEW PROJECT ↗
              </a>

            </article>
          ))}

        </div>

      </section>

      {/* SKILLS */}
      <section className="skills" id="skills">

        <div className="sectionLabel">
          03 — SKILLS
        </div>

        <div className="skillHead">

          <h2>
            My
            <br />
            <em>toolkit.</em>
          </h2>

          <p>
            Technologies I use to transform ideas into
            functional applications and intelligent systems.
          </p>

        </div>

        <div className="skillRows">

          {skills.map((skill) => (
            <div className="skillRow" key={skill.number}>

              <span>{skill.number}</span>

              <b>{skill.title}</b>

              <p>{skill.text}</p>

            </div>
          ))}

        </div>

      </section>

      {/* EXPERIENCE */}
      <section className="experience">

        <div className="sectionLabel">
          04 — EXPERIENCE
        </div>

        <div className="expGrid">

          <div className="expMain">

            <span>INTERNSHIP / DATA SCIENCE</span>

            <h2>
              Learning by
              <br />
              <em>building.</em>
            </h2>

            <p>
              Practical experience through data science and
              software development projects, working with
              Python, data analysis, visualization and
              machine learning concepts.
            </p>

          </div>

          <div className="expSide">

            <div>
              <span>01</span>

              <h3>
                Prodigy InfoTech
              </h3>

              <p>
                Data Science Intern
              </p>
            </div>

            <div>
              <span>02</span>

              <h3>
                Current Focus
              </h3>

              <p>
                AI/ML • Full Stack • Cloud • DevOps
              </p>
            </div>

            <div>
              <span>03</span>

              <h3>
                2027
              </h3>

              <p>
                Expected graduation
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">

        <div className="sectionLabel">
          05 — CONTACT
        </div>

        <h2>
          Let's make
          <br />
          something
          <br />
          <em>great.</em>
        </h2>

        <p>
          Have an internship opportunity, project idea,
          collaboration or simply want to connect?
          Feel free to reach out.
        </p>

        <div className="contactLinks">

          <a href="mailto:keerthimrao05@gmail.com">
            EMAIL
            <span>keerthimrao05@gmail.com ↗</span>
          </a>

          <a
            href="https://github.com/keerthimrao05"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
            <span>@keerthimrao05 ↗</span>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN
            <span>CONNECT ↗</span>
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer>

        <span>
          © 2026 KEERTHI M RAO
        </span>

        <span>
          DESIGNED + BUILT WITH REACT
        </span>

        <span>
          MADE WITH ♡
        </span>

      </footer>

    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);