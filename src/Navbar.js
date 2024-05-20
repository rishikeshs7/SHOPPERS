import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import logo from './Components/Assets/logo.png'
import cart_icon from './Components/Assets/cart_icon.png'


const Navbar = () => {
    
  return (
   

    <div className='navbar'>
    <div className="nav-logo">
   

     { <img src={logo} alt="" /> } 
    <p>SHOPPER</p>
    </div>

    <ul className="nav-menu">
    <li><NavLink style= {{textDecoration:'none'}}to= "/" >Shop</NavLink></li>
    <li> <NavLink style= {{textDecoration:'none'}} to="/mens"> Mens</NavLink></li>
        <li><NavLink style= {{textDecoration:'none'}} to= "/womens"> Women</NavLink></li>
        <li><NavLink style= {{textDecoration:'none'}}to= "/kids" >Kids </NavLink></li>

       
    </ul>
    

    <div className="nav-login-cart">
    
      <NavLink to= '/Loginsignup'>   <button>Login</button></NavLink>
      { <NavLink to = '/cart'><img src={cart_icon} alt="" /> </NavLink> } 
    
      
      <div className="nav-cart-count"> 0</div>

    </div>
 
</div>
    
  )
}

export default Navbar
