import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Orders from './Orders';

function Routess() {
  return (
    <BrowserRouter>
    <Navbar />

      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="orders" element={<Orders />} />
      </Routes>

    </BrowserRouter>
  );
}
