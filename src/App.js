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

const App = () => {
  const [active, setActive] = useState("home");

  const removeButtonFocus = (e) => {
    const target = e.target.closest("a");

    if (!target) {
      return;
    }

    target.blur();
  };

  // lägg till animationer

  return (
    <>
      <Router>
        <Nav active={active} updatePage={setActive} removeButtonFocus={removeButtonFocus} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header updatePage={setActive} removeButtonFocus={removeButtonFocus} />
                <About updatePage={setActive} />
                <Experience />
              </>
            }
          ></Route>
          <Route path="/portfolio" element={<Portfolio removeButtonFocus={removeButtonFocus} />}></Route>
          <Route path="/contact" element={<Contact removeButtonFocus={removeButtonFocus} />}></Route>
          <Route path="*" element={<ErrorPage updatePage={setActive} removeButtonFocus={removeButtonFocus} />}></Route>
        </Routes>
        <Footer updatePage={setActive} removeButtonFocus={removeButtonFocus} />
      </Router>
    </>
  );
};

export default App;
