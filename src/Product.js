import React, {useState, useEffect } from 'react';
import logo from './logo.svg';
import './Product.css';
import './ProductContains.css';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
 
import axios from  'axios';
import ProductContains from './ProductContains';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography'



function Product({ search }) {
	const classes = useStyles();	 
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);
	const [postPerPage, setPostPerPage] = useState(10);
	const [startingIndex, setStartingIndex] = useState(0);
	const [endIndex, setEndIndex] = useState(postPerPage);
	
	

	console.log("browser History", window.history);
	useEffect(() => {		 
		ApiCall();			 		 
	}, []); 

	const ApiCall = async () =>{
		try{
			setLoading(true);
			const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
			console.log(response);
			setData(response.data);
			setLoading(false);
		}
		catch (error) {
			console.log(error);
		}
	}

	const result = search !=="" ? data.filter((object) =>  object.title.includes(search)) : data ;
	 
	console.log("filtered data",result);

	const pagination = result.slice(startingIndex, endIndex); 
	console.log("search value in Product ", search);


	const HandleChange = (event, value) => {
	    setPage(value);
	    setStartingIndex((value-1)*postPerPage);
	    setEndIndex(()=>{
	    	 return (value)*postPerPage > data.length ? data.length : (value)*postPerPage 
	    });    
	}; 
		 



  return (
   		<div className="product">
   			<div className={classes.root}>
   			{ loading ? 
   			<CircularProgress color="inherit"/> : 
		      <Grid container spacing={3}>
		      { pagination.map( items =>(
		      	 
		        <Grid item   xs={12} sm={6} md={6} lg={4} xl={3}  >
		          		
		          		 <ProductContains 
		          		 	id={items.id}
		          		 	title={items.title}
		          		 	image="https://i.gadgets360cdn.com/large/mi_gaming_laptop_2019_image_1565003115644.jpg"
		          		 />       	 
		        </Grid>
		        ))}  
		      </Grid> 
		  }
				  <div className="pagination">	
					<Pagination count={result.length %1 === 0 ? result.length/postPerPage : (result.length/postPerPage)+1 } page={page} onChange={HandleChange} />	 
		      	  </div>	
		    </div>
   		</div>
  );
}

export default Product;

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
