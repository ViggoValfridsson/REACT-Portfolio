import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { AiOutlineHome, AiOutlineUser, AiFillFolderOpen, AiOutlineMessage } from "react-icons/ai";
import {BiBookAlt} from "react-icons/bi"
import "./nav.css";

const Nav = ({active, updatePage, removeButtonFocus}) => {
  return (
    <nav id="top" className="container container__nav" onClick={removeButtonFocus}>
      <Link to="/" className={active === "home" ? "active" : ""} onClick={() => updatePage("home")}>
        <AiOutlineHome />
      </Link>
      <HashLink smooth to="/#about" onClick={() => updatePage("home")}>
        <AiOutlineUser />
      </HashLink>
      <HashLink smooth to="/#experience" onClick={() => updatePage("home")}>
        <BiBookAlt />
      </HashLink>
      <Link to="/portfolio" className={active === "portfolio" ? "active" : ""} onClick={() => updatePage("portfolio")}>
        <AiFillFolderOpen />
      </Link>
      <Link to="/contact" className={active === "contact" ? "active" : ""} onClick={() => updatePage("contact")}>
        <AiOutlineMessage />
      </Link>
    </nav>
  );
};

export default Nav;
