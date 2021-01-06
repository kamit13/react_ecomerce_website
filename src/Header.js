import React from 'react';
import './Header.css';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue }  from './StateProvider';
import {  Link } from "react-router-dom";  

function Header() {
	const [{ basket }, dispatch] = useStateValue();
	console.log("updated basket", basket);

  return (
    <div className="header">
	    <Link to="/">   	
	       	<div className="header__logo">
	       		<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" className="header__image" />
	      	</div>
	    </Link>
       	<div className="header__nav">
       		 <Link to="/products">
	       		<div className="header__option">
			       <span className="header__title"> New,</span>
			       <span className="header__login">Product</span>
		       	</div>
	       </Link>

	       <Link to="/order">
	       		<div className="header__option">
			       <span className="header__title" >Return,</span>
			       <span className="header__login">Order</span>
		       	</div>
	       </Link>

	       	<div className="header__option">
		       <span className="header__title" >Hi User,</span>
		       <span className="header__login">Login</span>
	       	</div>

	       	<Link to="/checkout"> 
		       	<div className="header__option">
			         <ShoppingBasketIcon />
		       	</div>
	       	</Link>
	       	<div className="header__option">
		         <p>{basket.length} </p>
	       	</div>
	       	
       	</div>
    </div>
  );
}
export default Header;
