import React, { FC } from 'react';
import { Routes, Route } from 'react-router';
import MenuLateral from '../layouts/MenuLateral/MenuLateral';

const App: FC = () => (
  <MenuLateral>
    <Routes>
      <Route path="/" element={<p>Home content</p>} />
      <Route path="/Dashboard" element={<p>Dashboard content</p>} />
      <Route path="/User" element={<p>User content</p>} />
      <Route path="/Messages" element={<p>Messages content</p>} />
      <Route path="/Analytics" element={<p>Analytics content</p>} />
      <Route path="/File_Manager" element={<p>File Manager content</p>} />
      <Route path="/Order" element={<p>Order content</p>} />
      <Route path="/Saved" element={<p>Saved content</p>} />
      <Route path="/Settings" element={<p>Settings content</p>} />
    </Routes>
  </MenuLateral>
);

export default App;
