import React, { useEffect } from 'react';
import './Product.css';
 import { useStateValue } from './StateProvider'
 import { Link, useHistory } from 'react-router-dom';

function ProductContains({ id , title , image}) {
	//const [user, setUser] = useState(null);
	const history = useHistory();
	const [ {basket} , dispatch] = useStateValue();

	useEffect(() => {
		localStorage.setItem('items', JSON.stringify(basket));
		console.log(JSON.stringify(basket.items));
	},[basket])


	const AddToBasket = () => {
		console.log("add to basket call");
		dispatch({
			type: 'ADD_TO_BASKET',
			 item: {
			 	id :  id,	 
			 	title : title,
			 	image : image,
			 },
		})
		history.push('/checkout')
	}
	 
  return (	<div className="product__option">
  				<div className="product__image">
		 					<img src={ image } />
		          		 </div>
		          		 <div className="product__details">
		          		 	<p className="product__title">{title}</p>
		          		 	  
		          		 	<button className="add__toBasket" onClick={AddToBasket}>Adopt Dog</button>
		          		 </div>
		    </div>      		 
  	);}

  export default ProductContains;