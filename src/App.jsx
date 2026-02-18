import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Naveenkumar G</h1>
      <h2>Frontend Developer | React JS</h2>

      <section>
        <h3>About Me</h3>
        <p>
         <p>
Frontend Developer with strong foundation in React.js and modern JavaScript.
BCA graduate with hands-on experience building responsive web applications.
Passionate about creating clean UI and scalable solutions.
Currently seeking entry-level Frontend Developer opportunities.
</p>

        </p>
      </section>

      <section>
        <h3>Skills</h3>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React JS</span>
          <span>Git</span>
        </div>
      </section>

      <section>
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

      <section>
        <h3>Contact</h3>
        <p>Email: naveenkumarnk8701@gmail.com</p>
        <a 
          href="https://github.com/naveenkumarnk8701-glitch"

         target="_blank" 
          rel="noreferrer"
          className="btn"
        >
          Visit My GitHub
        </a>
      </section>

      <footer>
        <p>© 2026 Naveenkumar G</p>
      </footer>
    </div>
  );
}

export default App;
