import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser, AiFillFolderOpen, AiOutlineMessage } from "react-icons/ai";
import { FiBook } from "react-icons/fi";
import "./nav.css";

const Nav = () => {
  const [active, setActive] = useState("home");

  const removeButtonBlur = (e) => {
    const target = e.target.closest("a");
    target.blur();
  };

  return (
    <nav className="container container__nav" onClick={removeButtonBlur}>
      <Link to="/" className={active === "home" ? "active" : ""} onClick={() => setActive("home")}>
        <AiOutlineHome />
      </Link>
      <Link to="/#about" onClick={() => setActive("home")}>
        <AiOutlineUser />
      </Link>
      <Link to="/#experience" onClick={() => setActive("home")}>
        <FiBook />
      </Link>
      <Link to="/portfolio" className={active === "portfolio" ? "active" : ""} onClick={() => setActive("portfolio")}>
        <AiFillFolderOpen />
      </Link>
      <Link to="/contact" className={active === "contact" ? "active" : ""} onClick={() => setActive("contact")}>
        <AiOutlineMessage />
      </Link>
    </nav>
  );
};

export default Nav;
