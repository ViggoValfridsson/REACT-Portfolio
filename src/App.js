import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer.jsx";
import ErrorPage from "./components/errorPage/ErrorPage";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [desktopMode, setDesktopMode] = useState(true);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1023) {
      setDesktopMode(true);
    } else {
      setDesktopMode(false);
    }
  });

  const removeButtonFocus = (e) => {
    const target = e.target.closest("a");

    if (!target) {
      return;
    }

    target.blur();
  };

  AOS.init();

  return (
    <>
      <Router>
        <Nav removeButtonFocus={removeButtonFocus} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header removeButtonFocus={removeButtonFocus} />
                <About desktopMode={desktopMode} />
                <Experience />
              </>
            }
          ></Route>
          <Route path="/portfolio" element={<Portfolio removeButtonFocus={removeButtonFocus} />}></Route>
          <Route
            path="/contact"
            element={<Contact removeButtonFocus={removeButtonFocus} desktopMode={desktopMode} />}
          ></Route>
          <Route path="*" element={<ErrorPage removeButtonFocus={removeButtonFocus} />}></Route>
        </Routes>
        <Footer removeButtonFocus={removeButtonFocus} />
      </Router>
    </>
  );
};

export default App;
