import React from "react"

const About = React.lazy(() => import('../components/About.jsx'));
const Contact = React.lazy(() => import('../components/Contact.jsx'));
import { Routes, Route } from 'react-router-dom';

const RoutesConfig = () => {
  return (
    <div>
      <Routes>
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/contact'
          element={<Contact />}
        />
      </Routes>
    </div>
  );
};

export default RoutesConfig;
