import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {  Link } from "react-router-dom";  
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import './Features.css';

function Footer(){
	 const classes = useStyles();

	return(
		<div className={classes.root}>
	      	<Grid container spacing={3} justify="center" alignItems="center" >
		        <Grid item xs={4} sm={4} md={4} lg={4}  >
		        	<Grid container spacing={0} justify="center" alignItems="center" direction="column" >
				        <Grid item xs={12} sm={6} md={4} lg={3}  >
				          <Link to="/"> <p className={classes.footer_left_content_one}>Home</p></Link>
				        </Grid>
				        <Grid item xs={12} sm={6} md={4} lg={3}  >
				          <Link to="/login"> <p className={classes.footer_left_content_one}>Login</p></Link>

				        </Grid>
				        
				    </Grid>   
		        </Grid>
		        <Grid item xs={4} sm={4} md={4} lg={4} >
		          <Grid container spacing={0} justify="flex-start" alignItems="center"  direction="column">
				        <Grid item xs={12} sm={6} md={4} lg={3}  >
				          <Link to="/blog"> <p className={classes.footer_left_content_one}>Blog</p></Link>
				        </Grid>
				        <Grid item xs={12} sm={6} md={4} lg={3}  >
				          <Link to="/support"> <p className={classes.footer_left_content_one}>Support</p></Link>

				        </Grid>
				        <Grid item xs={12} sm={6} md={4} lg={3}  >
				           <Link to="/carrier"> <p className={classes.footer_left_content_one}>Carrier</p></Link>
				        </Grid>
				    </Grid>  
		        </Grid>
		        <Grid item   xs={4} sm={4} md={4} lg={4} >
		            <Grid container spacing={0} justify="flex-start" alignItems="center"  direction="col">
				        <Grid item xs={12} sm={6} md={4} lg={3}  >
				          <Link to=""> <FacebookIcon /> </Link>
				        </Grid>
				        <Grid item xs={12} sm={6} md={4} lg={3}  >
				          <Link to="">  <LinkedInIcon /></Link>

				        </Grid>
				        <Grid item xs={12} sm={6} md={4} lg={3}  >
				           <Link to=""> <TwitterIcon /></Link>
				        </Grid>
				    </Grid>  
		        </Grid>
	    	</Grid>
	    </div>    
	);
}
export default Footer;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    padding: theme.spacing(2), 
  },
  footer_content : {
  	display: 'flex',

  	direction: 'column',
  }, 
  footer_left_content_one: {
  	fontSize: 12, 
  }

 }));