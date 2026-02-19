import AOS from "aos";
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});

import "aos/dist/aos.css";
import { useEffect } from "react";

import { Typewriter } from "react-simple-typewriter";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="container">
      
      <section className="hero" data-aos="fade-up">

        <h1>Naveenkumar G</h1>
      <h2>
  <Typewriter
    words={[
      "Frontend Developer",
      "React JS Developer",
      "JavaScript Enthusiast",
    ]}
    loop={true}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1500}
  />
</h2>

        <p>
          Frontend Developer with strong foundation in React.js and modern JavaScript.
          Passionate about building clean, scalable, and responsive web applications.
        </p>

        <div className="buttons">
          <a
            href="https://github.com/naveenkumarnk8701-glitch"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/YOUR-LINKEDIN-ID"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            LinkedIn
          </a>

          <a href="/Naveenkumar_Resume.pdf" className="btn" download>
            Download Resume
          </a>
        </div>
      </section>

      <section data-aos="fade-right">

<section data-aos="fade-right">
       <h3>Skills</h3>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React JS</span>
          <span>Git</span>
        </div>
      </section>
     
      <section data-aos="fade-left">

        <h3>Projects</h3>
        <div className="projects">
          <div className="card">
            <h4>YouTube Clone</h4>
            <p>Responsive video UI with search functionality.</p>
          </div>

          <div className="card">
            <h4>FoodMuch Website</h4>
            <p>Restaurant website with animations and form validation.</p>
          </div>
        </div>
      </section>

     <footer data-aos="fade-up">

        <p>© 2026 Naveenkumar G</p>
      </footer>
    </div>
  );
}

export default App;
