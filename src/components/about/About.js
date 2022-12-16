import './About.css';
import { FaLocationArrow, FaAngleRight } from "react-icons/fa";

const About = () => {
    return (
      <section id="about" className="about-section-container">
        <div className="about-title">
          <FaLocationArrow className="arrow-icon" />
          <span>About</span>
        </div>
        <div className="about-information">
          <p>My interest in web development started back in 2021 when I was working with Hotmart online courses and I had to configure my first webpage by using WordPress — Even though I had no idea back than on how it worked, those were my first contact with HTML & CSS!</p>
          <p>Fast-forward to today, and I’ve had the privilege of working at <a href="https://www.microverse.org/" target="_blank">Microverse</a> with several other applicants from all around the globe! My main focus these days is building accessible, inclusive products and digital experiences so I can improve my skills everyday.</p>
          <p>I also recently <a href="https://www.newline.co/courses/build-a-spotify-connected-app" target="_blank" rel="noreferrer">launched a course</a> that covers everything you need to build a web app with the Spotify API using Node &amp; React.</p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul>
            <li>
              <FaAngleRight className="small-arrow-icon" />
              <span>JavaScript</span>
            </li>
            <li>
              <FaAngleRight className="small-arrow-icon" />
              <span>React/Redux</span>
            </li>
            <li>
              <FaAngleRight className="small-arrow-icon" />
              <span>Ruby/Rails</span>
            </li>
            <li>
              <FaAngleRight className="small-arrow-icon" />
              <span>RSpec/Capybara</span>
            </li>
            <li>
              <FaAngleRight className="small-arrow-icon" />
              <span>Node.js</span>
            </li>
            <li>
              <FaAngleRight className="small-arrow-icon" />
              <span>PostgreSQL</span>
            </li>
          </ul>
        </div>
      </section>
    );
  };
  
export default About;
  