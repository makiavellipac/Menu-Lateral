import React, { FC } from 'react';
import { Routes, Route } from 'react-router';
import MenuLateral from '../layouts/MenuLateral';
import Routing from '../Data/Routes';

const App: FC = () => (
  <MenuLateral>
    <Routes>
      <Route path="/" element={<p>Home content</p>} />
      {Routing.map(({ path, Element }) => (
        <Route path={path} element={<Element />} key={`Element ${path}`} />
      ))}
    </Routes>
  </MenuLateral>
);

export default App;
