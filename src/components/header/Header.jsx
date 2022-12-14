import "./header.css";
import CTA from "./CTA";
import me_image_temp from "../../assets/me_image_temp.png";
import HeaderSocials from "./HeaderSocials";

const Header = ({ removeButtonFocus }) => {
  return (
    <header>
      <div className="container header__container" onPointerUp={removeButtonFocus}>
        <h2>Hello, my name is</h2>
        <h1>Viggo Valfridsson</h1>
        <h2 className="text-light">Web Developer</h2>
        <CTA />
        <HeaderSocials />
        <div className="me-Img" data-aos="fade-up">
          <img src={me_image_temp} alt="Me standing in fron of a blue wall" />
        </div>

        <a href="#about" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
