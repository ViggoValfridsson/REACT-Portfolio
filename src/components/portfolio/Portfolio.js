import "./portfolio.css"

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h1>Portfolio</h1>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <img src="" alt="" className="portfolio-image" />
          <h2>Project name</h2>
          <a href="https://github.com" className="btn">GitHub</a>
          <a href="site" className="btn btn-primary">Live Demo</a>
        </article>
      </div>
    </section>
    )
}

export default Portfolio