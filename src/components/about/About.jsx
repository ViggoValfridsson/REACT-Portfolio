import "./about.css";
import me_image_temp from "../../assets/me_image_temp.png";
import { RiComputerLine } from "react-icons/ri";
import { AiFillFolderOpen } from "react-icons/ai";
import { Link } from "react-router-dom";

const About = ({updatePage}) => {
  return (
    <section id="about">
      <h3>Who Am i?</h3>
      <h2>Get to know me!</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={me_image_temp} alt="Me with a clear background" className="about-me-img" />
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <RiComputerLine className="card-icon" />
              <h4>Experience</h4>
              <p>Currently Studying</p>
            </article>
            <article className="about-card">
              <AiFillFolderOpen className="card-icon" />
              <h4>Projects</h4>
              <Link onClick={() => updatePage("portfolio")} to="/portfolio">Click to read more about my projects</Link>
            </article>
 
          </div>
          <p className="about-me-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magnam consequuntur corporis aliquid,
              nemo numquam alias aperiam, a corrupti itaque labore, quae soluta aspernatur voluptatum? Sequi assumenda
              ea mollitia! Necessitatibus.
            </p>
            <Link onClick={() => updatePage("contact")} className="btn btn-primary" to="/contact">Let's get started</Link>
        </div>
      </div>
    </section>
  );
};

export default About;
