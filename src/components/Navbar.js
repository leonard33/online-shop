import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HiShoppingCart } from "react-icons/hi";

const Navbar = () => {
const cart = useSelector((state) => state.cart);

const navigate = useNavigate();
const carthandler = (e) => {
  e.preventDefault();
  navigate("/cart")
}

  return (
    <div style={{position:"sticky", top:"0"}}>
    <nav class="navbar bg-light shadow p-3 mb-5 bg-white rounded">
    <div class="container-fluid">
    <a class="navbar-brand">
      <img style={{width:"150px", height:"70px"}} src='https://seeklogo.com/images/L/lalume-boutique-logo-9934A4F398-seeklogo.com.png' alt='styles'/>
      </a>
    <form class="d-flex" role="search">
    <button class="btn btn-outline-success m-2" type="submit">Login</button>
      <button class="btn btn-outline-success m-2" type="submit">Register</button>
      <button class="btn btn-outline-success m-2" type="submit" onClick={carthandler} >{cart.cartitems.length ?<div>View <HiShoppingCart/> ({cart.cartitems.length})</div> : <div><HiShoppingCart/> (0) </div>}</button>
    </form>
  </div>
</nav>
    </div>
  )
}

export default Navbar