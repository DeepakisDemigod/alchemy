import React from "react";
import About from './About.jsx'
import Contact from './Contact.jsx'
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <nav>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
