import React from 'react';
import Routes from './routes/RoutesConfig.jsx';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <a href='/about'>about</a>
          <a href='/contact'>contact</a>
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
