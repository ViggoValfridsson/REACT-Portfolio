import "./experience.css";
import { SiJavascript, SiHtml5, SiCss3, SiVisualstudiocode, SiBootstrap, SiNodedotjs, SiGraphql } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";

const Experience = () => {
  return (
    <section id="experience">
      <h2>My skills and experiences</h2>
      <div className="container experience__container">
        <div className="experience-card" data-aos="fade-up">
          <h3>What I know</h3>
          <div className="card-content">
            <div className="tech">
              <SiJavascript className="tech-icons" />
              <h4>JavaScript</h4>
            </div>
            <div className="tech">
              <GrReactjs className="tech-icons" />
              <h4>REACT</h4>
            </div>
            <div className="tech">
              <SiNodedotjs className="tech-icons" />
              <h4>Not yet</h4>
            </div>
            <div className="tech">
              <SiGraphql className="tech-icons" />
              <h4>Not yet</h4>
            </div>
            <div className="tech">
              <SiHtml5 className="tech-icons" />
              <h4>HTML</h4>
            </div>
            <div className="tech">
              <SiCss3 className="tech-icons" />
              <h4>CSS</h4>
            </div>
            <div className="tech">
              <FaSass className="tech-icons" />
              <h4>SASS</h4>
            </div>
            <div className="tech">
              <SiBootstrap className="tech-icons" />
              <h4>Bootstrap</h4>
            </div>
            <div className="tech">
              <SiVisualstudiocode className="tech-icons" />
              <h4>Visual Studio Code</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
