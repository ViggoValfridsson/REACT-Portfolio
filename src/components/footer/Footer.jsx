import "./footer.css";
import { HashLink } from "react-router-hash-link";
import { AiOutlineLinkedin } from "react-icons/ai";
import { SlSocialGithub } from "react-icons/sl";
import { BsFacebook } from "react-icons/bs";

const Footer = ({ removeButtonFocus }) => {
  return (
    <footer onClick={removeButtonFocus}>
      <div className="logo-container">
        <HashLink className="footer-logo" smooth to="/#top">
          Viggo Valfridsson
        </HashLink>
      </div>
      <ul className="permalinks">
        <li>
          <HashLink smooth to="/#top">
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#about">
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#experience">
            Experience
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/portfolio#top">
            Portfolio
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/contact#top">
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
