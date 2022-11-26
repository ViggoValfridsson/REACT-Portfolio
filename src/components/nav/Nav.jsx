import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { AiOutlineHome, AiOutlineUser, AiFillFolderOpen, AiOutlineMessage } from "react-icons/ai";
import { BiBookAlt } from "react-icons/bi";
import "./nav.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Nav = ({ removeButtonFocus }) => {
  const [active, setActive] = useState("home");
  const navigate = useNavigate();

  useEffect(() => {
    const path = new URL(window.location.href).pathname;

    if (path.includes("/contact")) {
      setActive("contact");
    } else if (path.includes("/portfolio")) {
      setActive("portfolio");
    } else if (path === "/") {
      setActive("home");
    } else {
      setActive(null);
    }
  }, [navigate]);

  return (
    <nav id="top" className="container container__nav" onPointerUp={removeButtonFocus} onPointerDown={removeButtonFocus}>
      <Link to="/" className={active === "home" ? "active" : ""}>
        <AiOutlineHome />
      </Link>
      <HashLink smooth to="/#about">
        <AiOutlineUser />
      </HashLink>
      <HashLink smooth to="/#experience">
        <BiBookAlt />
      </HashLink>
      <Link to="/portfolio" className={active === "portfolio" ? "active" : ""}>
        <AiFillFolderOpen />
      </Link>
      <Link to="/contact" className={active === "contact" ? "active" : ""}>
        <AiOutlineMessage />
      </Link>
    </nav>
  );
};

export default Nav;
