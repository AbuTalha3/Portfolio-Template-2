import './About.css';
import { FaLocationArrow, FaAngleRight } from "react-icons/fa";

const About = () => {
    return (
      <section id="about" className="about-section-container">
        <div className="about-information">
          <div className="about-title">
            <FaLocationArrow className="arrow-icon" />
            <span>About</span>
            <p className="microverse-date">Get to know me better!</p>
          </div>
          <p>My interest in web development started back in 2021 when I was working with Hotmart online courses and I had to configure my first webpage by using WordPress — Even though I had no idea back than on how it worked, those were my first contact with HTML & CSS!</p>
          <p>Fast-forward to today, and I’ve had the privilege of working at <a href="https://www.microverse.org/" target="_blank">Microverse</a> with several other applicants from all around the globe and very different cultures! My main focus these days is building accessible, inclusive products and digital experiences so I can improve my skills everyday.</p>
          <p>I also recently wrote a <a href="https://medium.com/@vitorguedesmadeira/you-teach-you-learn-6f5ac50aae65" target="_blank" rel="noreferrer">Medium article</a> that covers some topics that really helped me, specially during my very first development steps. Feel very welcome to read it!</p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul>
            <li>
              <FaAngleRight className="small-arrow-icon" />
              <span>JavaScript</span>
            </li>
            <li>
              <FaAngleRight className="small-arrow-icon" />
              <span>VSCode</span>
            </li>
            <li>
              <FaAngleRight className="small-arrow-icon" />
              <span>RSpec/Capybara</span>
            </li>
            <li>
              <FaAngleRight className="small-arrow-icon" />
              <span>React/Redux</span>
            </li>
            <li>
              <FaAngleRight className="small-arrow-icon" />
              <span>Node.js</span>
            </li>
            <li>
              <FaAngleRight className="small-arrow-icon" />
              <span>Photoshop</span>
            </li>
            <li>
              <FaAngleRight className="small-arrow-icon" />
              <span>Ruby/Rails</span>
            </li>
            <li>
              <FaAngleRight className="small-arrow-icon" />
              <span>PostgreSQL</span>
            </li>
            <li>
              <FaAngleRight className="small-arrow-icon" />
              <span>Figma</span>
            </li>
          </ul>
        </div>
      </section>
    );
  };
  
export default About;
  