import "./portfolio.css";
import data from "../../data/portfolio_projects.json";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h1>Portfolio</h1>
      <div className="container portfolio__container">
        {data.projects.map(({ id, title, imagePath, githubLink, liveDemoLink }) => {
          return (
            <article className="portfolio-item" key={id}>
              <div className="portfolio-image">
                <img src={imagePath} alt={`A screenshot of the project ${title}.`} />
              </div>
              <h2>{title}</h2>
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
