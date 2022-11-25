import "./footer.css";
import { HashLink } from "react-router-hash-link";
import { AiOutlineLinkedin } from "react-icons/ai";
import { SlSocialGithub } from "react-icons/sl";
import { BsFacebook } from "react-icons/bs";

const Footer = ({ updatePage, removeButtonFocus }) => {
  return (
    <footer onClick={removeButtonFocus}>
      <div className="logo-container">
        <HashLink className="footer-logo" smooth to="/#top" onClick={() => updatePage("home")}>
          Viggo Valfridsson
        </HashLink>
      </div>
      <ul className="permalinks">
        <li>
          <HashLink smooth to="/#top" onClick={() => updatePage("home")}>
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#about" onClick={() => updatePage("home")}>
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#experience" onClick={() => updatePage("home")}>
            Experience
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/portfolio#top" onClick={() => updatePage("portfolio")}>
            Portfolio
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/contact#top" onClick={() => updatePage("contact")}>
            Contact
          </HashLink>
        </li>
      </ul>
      <div className="footer-socials">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <AiOutlineLinkedin className="footer-icon" />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <SlSocialGithub className="footer-icon" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <BsFacebook className="footer-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
