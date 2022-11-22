import { useState, useEffect } from "react";
import { AiOutlineHome, AiOutlineUser, AiFillFolderOpen, AiOutlineMessage } from "react-icons/ai";
import { FiBook } from "react-icons/fi";
import "./nav.css";

const Nav = () => {
  const [homePath, setHomePath] = useState("#");

  useEffect(() => {
    
  })

  const removeButtonBlur = (e) => {
    const target = e.target.closest("a");
    target.blur();
  };

  return (
    <nav className="container container__nav" onClick={removeButtonBlur} >
      <a className="active" href={homePath}>
        <AiOutlineHome />
      </a>
      <a href="#about" >
        <AiOutlineUser />
      </a>
      <a href="#experience">
        <FiBook />
      </a>
      <a href="#portfolio">
        <AiFillFolderOpen />
      </a>
      <a href="/contact">
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
