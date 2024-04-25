import React from 'react';
const About = React.lazy(() => import('./components/About.jsx'));
const Contact = React.lazy(() => import('./components/Contact.jsx'));
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <a href='/about'>about</a>
          <a href='/contact'>contact</a>
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
      </BrowserRouter>
    </div>
  );
};

export default App;
