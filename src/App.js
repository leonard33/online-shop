import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Shopitems from './components/Shopitems';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
     <Navbar />
     <Routes>
     <Route path="/" element={<Shopitems />}/>
     <Route path="cart" element={<Cart />}/>
     </Routes>
    </div>
  );
}

export default App;
