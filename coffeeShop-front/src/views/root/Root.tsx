import React from 'react';
import { Navigation } from '../../components/navigation/Navigation';
import { Homepage } from '../homepage/Homepage';
import { Shop } from '../shop/Shop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Root() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="shop" element={<Shop />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default Root;
