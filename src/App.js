import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  const [active, setActive] = useState("home");

  const removeButtonFocus = (e) => {
    const target = e.target.closest("a");

    if (!target) {
      return;
    }
    
    target.blur();
  };

  return (
    <>
      <Router>
        <Nav active={active} setActive={setActive} removeButtonFocus={removeButtonFocus}/>
        <Routes>
          <Route
            exact path="/"
            element={
              <>
                <Header />
                <About setActive={setActive} />
                <Experience />
                <Services />
                <Testimonials />
              </>
            }
          ></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
