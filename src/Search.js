import React , { useEffect, useState }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import Grid from '@material-ui/core/Grid'; 
import './Products.css';
import Product from './Product'; 


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 'auto',
    margin: 20,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  prdoucts: {
  	backgroundColor: 'red',
  }   
}));


function Search() {
	const classes = useStyles();

	const SearchItem = (event) =>{
		console.log(event);
	}

  return (  
  	<div>
  		<div>
         	<Grid container justify="center" >
		  		<Grid item >
				    <Paper component="form" className={classes.root}>

				      <InputBase
				        className={classes.input}
				        placeholder="Search Product..."
				        onChange={(event) => SearchItem(event.target.value) }
				         
				      />
				      <Divider className={classes.divider} orientation="vertical" />
				      <IconButton type="submit" className={classes.iconButton} aria-label="search">
				        <SearchIcon />
				      </IconButton>       
					</Paper>
				</Grid>
			</Grid>	    
			</div>
		<div className="products">
    		<Product />
    	</div>	 
    </div>    
 		    
  );
}
export default Search;

