import React, { FC } from 'react';
import logo from '../Assets/Images/react-typescript.png';
import '../Assets/Fonts/Fuggles-Regular.woff2';

import './App.css';

const App: FC = () => (
  <div className="div-app">
    <img src={logo} alt="logo" />
    <h1>Que Pedal!</h1>
  </div>
);

export default App;
