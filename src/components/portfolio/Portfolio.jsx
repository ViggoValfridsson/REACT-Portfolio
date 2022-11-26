import "./portfolio.css";
import data from "../../data/portfolio_projects.json";

const Portfolio = ({removeButtonFocus}) => {
  return (
    <section id="portfolio">
      <h1>Portfolio</h1>
      <h2>My Recent Projects</h2>
      <div className="container portfolio__container" onClick={removeButtonFocus}>
        {data.projects.map(({ id, title, imagePath, githubLink, liveDemoLink }) => {
          return (
            <article className="portfolio-item" key={id} data-aos="fade-up">
              <div className="portfolio-image">
                <img src={imagePath} alt={`A screenshot of the project ${title}.`} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio-cta">
                <a
                  href={githubLink}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a href={liveDemoLink} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
