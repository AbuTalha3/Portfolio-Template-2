import './Projects.css';
import { FaLocationArrow } from "react-icons/fa";
import Project from './project/Project';
import image1 from '../../assets/projects/project1.png'
import image2 from '../../assets/projects/project2.png'
import image3 from '../../assets/projects/project3.png'
import image4 from '../../assets/projects/project4.png'
import image5 from '../../assets/projects/project5.png'
import image6 from '../../assets/projects/project6.png'

const Projects = () => {
  const everyProject = [
    {
      id: 1,
      title: 'Exploration Getaways',
      subtitle: 'Trip Agency application - 2022',
      description: 'Exploration Getaways is a travelling application where the user can register new accounts, login and book a set of different trip packages. It is built and connected by using two different repos, including back-end(Rails) and front-end(React/Redux)',
      image: image4,
      live: 'https://exploration-getaways.netlify.app/',
      github: 'https://github.com/VitorGuedesMadeira/Exploration-Getaways-FRONTEND',
      skills: ['Ruby', 'Rails', 'React', 'Redux'],
    },
    {
      id: 2,
      title: 'Shoe Store',
      subtitle: 'e-commerce application - 2023',
      description: 'Shoes Store is an e-commerece application where the customer can register new accounts, login, add shoes to the shopping cart and buy it. The admin user can login and add new products to the inventory and check analytics related to the customers and products. It is built as a single repo application, by integrating backend and frontend with RAILS.',
      image: image6,
      live: 'https://vt-shoe-store.herokuapp.com/',
      github: 'https://github.com/VitorGuedesMadeira/Shoes-Store',
      skills: ['Ruby', 'Rails', 'JavaScript', 'AWS'],
    },
    {
      id: 3,
      title: 'Pokedéx',
      subtitle: 'PokeAPI application - 2022',
      description: 'This was the final project for Microverse\'s second module (JavaScript). It is a Pokedéx based on PokeAPI, where the user can look for all the existent Pokémons and their respective stats. Built with plain HTML, CSS and JavaScript',
      image: image5,
      live: 'https://vitorguedesmadeira.github.io/Capstone-Javascript/dist/',
      github: 'https://github.com/VitorGuedesMadeira/Capstone-Javascript',
      skills: ['HTML', 'CSS', 'JavaScript', 'API'],
    },
    {
      id: 4,
      title: 'Bookstore',
      subtitle: 'Digital Library application - 2022',
      description: 'The Bookstore is a website that allows the user to display a list of books, and add or remove a book from an API. Built with React/Redux (Redux ToolKit).',
      image: image1,
      live: 'https://bookstore-vitorguedes.netlify.app/',
      github: 'https://github.com/VitorGuedesMadeira/Bookstore-React',
      skills: ['HTML', 'CSS', 'React', 'Redux'],
    },
    {
      id: 5,
      title: 'Marvel Characters',
      subtitle: 'Marvel Comics API - 2022',
      description: 'This was the final project for Microverse\'s third module (React/Redux). It is based on the official MARVEL API and it displays every existent character and it\'s respective comics. Built with React/Redux (Redux ToolKit)',
      image: image2,
      live: 'https://capstone-react-vitorguedesmadeira.netlify.app/',
      github: 'https://github.com/VitorGuedesMadeira/Capstone-React',
      skills: ['HTML', 'CSS', 'React', 'Redux'],
    },
    {
      id: 6,
      title: 'Space Traveler',
      subtitle: 'Rockets/Mission application - 2022',
      description: 'This project is a web application that consumes an SpaceX API. It provides commercial and scientific space travel services that allows users to book rockets and join selected space missions. Built with React/Redux (Redux ToolKit)',
      image: image3,
      live: 'https://spacetraveler-guedeskatana.netlify.app/',
      github: 'https://github.com/VitorGuedesMadeira/Space-Traveler',
      skills: ['HTML', 'CSS', 'React', 'Redux'],
    },
  ]

    return (
      <section id="projects" className="projects-section-container">
        <div className="projects-flex-column">
          <div className="about-title" data-aos="fade-up">
            <FaLocationArrow className="arrow-icon" />
            <span>Projects</span>
            <p className="microverse-date">GitHub - Pinned Projects</p>
          </div>
          <div className="main-projects">
            {everyProject.map((project) => 
              <Project project={project} />
            )}
          </div>

          <a className="email-link" href="https://github.com/VitorGuedesMadeira?tab=repositories" target="_blank" rel="noreferrer">Check More Projects</a>
        </div>
      </section>
    );
  };
  
export default Projects;
  