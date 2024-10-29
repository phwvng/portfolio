import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFreeCodeCamp, faPython, faJs, faReact, faGithub } from '@fortawesome/free-brands-svg-icons';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Patrick Wang</h1>
        <p>
          Information Science student at Utrecht University, The Netherlands.
        </p>

        <div className="links">
          <a class="linkedin" href="https://www.linkedin.com/in/patrick-wang-b42702294/" target="_blank_">
            <FontAwesomeIcon icon={faLinkedin} />
        </a>

          <a class="github" href="https://github.com/moonprincelol" target="_blank_">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

        <div className="row">
        <div className="column">
        <div className="skills">
          <h2>Skills</h2>
          <p className="pythontext"><FontAwesomeIcon icon={faPython} />Python</p>
          <p className='jstext'><FontAwesomeIcon icon={faJs}/>JavaScript</p>
          <p className="reacttext"><FontAwesomeIcon icon={faReact}/>React</p>
        </div>
        </div>
        <div className="column">
        <div className="projects">
        <h2>Projects</h2>
        <h3 className="freecodecamp">freeCodeCamp <FontAwesomeIcon icon={faFreeCodeCamp}/></h3>
        <hr></hr>
        <p className="project">
          <a href="https://moonprincelol.github.io/randomQuoteMachine" target="_blank_">Random Quote Machine</a>
        </p>
        <p className="project">
          <a href="https://moonprincelol.github.io/markdown-previewer"  target="_blank_">Markdown Previewer</a>
        </p>

        <p className="project">
          <a href="https://moonprincelol.github.io/drum-machine"  target="_blank_">Drum Machine</a>
        </p>

        <p className="project">
          <a href="https://moonprincelol.github.io/js-calculator/"  target="_blank_">Calculator</a>
        </p>
        <p className="project">
          <a href="https://moonprincelol.github.io/25plus5-clock"  target="_blank_">Pomodoro Clock</a>
        </p>
        </div>
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
