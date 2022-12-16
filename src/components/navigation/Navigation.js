import { useState } from 'react';
import { FaUserAlt, FaEnvelope } from "react-icons/fa";
import './Navigation.css';

const Navigation = () => {
    const [isHamburgerActive, setActive] = useState(false);

    const toggleClass = () => {
      setActive(!isHamburgerActive);
    };

    return (
      <nav>
        <div className="flex-row">
          <span>VGMadeira</span>
          <div className="contact-info">
            <FaUserAlt />
            <span>+55 51 985615374</span>
          </div>
          <div className="contact-info">
            <FaEnvelope />
            <span>vgm_rox@hotmail.com</span>
          </div>
        </div>

        <ul className={isHamburgerActive ? 'navigation-list on' : 'navigation-list'}>
          <li onClick={toggleClass}><a href="#headline">Home</a></li>
          <li onClick={toggleClass}><a href="#about">About</a></li>
          <li onClick={toggleClass}><a href="#projects">Projects</a></li>
          <li onClick={toggleClass}><a href="#contact">Contact</a></li>
        </ul>

        <div onClick={toggleClass} className={isHamburgerActive ? 'hamburger-menu on' : 'hamburger-menu'}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    );
  };
  
  export default Navigation;
  