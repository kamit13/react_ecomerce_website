import React from 'react';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import { useStateValue }  from './StateProvider';

function CheckoutProduct({ id , title, image }) {
	const classes = useStyles();
	//const [user, setUser] = useState(null);
	const [ { basket }, dispatch] = useStateValue();

	const removeFromBasket = (event) =>{
		event.preventDefault();
		dispatch({ 
			type: "REMOVE_FROM_BASKET",
			id: id,
		})
	}

  return (
    <div className="App">
       <div className={classes.root}>
		      <Grid container spacing={3}>
		       
		        <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
		          		<div className="product__option">
		          		 <div className="product__image">
		 					<img src={image} />
		          		 </div>
		          		 <div className="product__details">
		          		 	<p className="product__title">{title}</p>
		          		 	 
		          		 	<button className="remove__fromBasket" onClick={removeFromBasket} >Remove</button>
		          		 </div>
		          		</div> 
		        </Grid>
		           
		      </Grid> 
		    </div> 
    </div>
  );
}

export default CheckoutProduct;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
