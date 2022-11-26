import { HashLink } from "react-router-hash-link";
import "./errorPage.css";

const ErrorPage = ({removeButtonFocus}) => {
  return (
    <section id="errorPage" onPointerUp={removeButtonFocus}>
      <h1>Error 404</h1>
      <h2>Page Not Found</h2>
      <div className="container errorPage__container">
        <h3>We could not find the site you were looking for!</h3>
        <div className="link-container">
          <h4>Here are some links to help you back.</h4>
          <ul className="error-links">
            <li>
              <HashLink className="btn btn-primary" smooth to="/#top">
                Home
              </HashLink>
            </li>
            <li>
              <HashLink className="btn" smooth to="/#about">
                About
              </HashLink>
            </li>
            <li>
              <HashLink className="btn" smooth to="/#experience">
                Experience
              </HashLink>
            </li>
            <li>
              <HashLink className="btn" smooth to="/portfolio#top">
                Portfolio
              </HashLink>
            </li>
            <li>
              <HashLink className="btn" smooth to="/contact#top">
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
