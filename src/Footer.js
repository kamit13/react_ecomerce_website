import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {  Link } from "react-router-dom";  
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import styled, { ThemeProvider } from 'styled-components';
import NoSsr from '@material-ui/core/NoSsr';
import './Features.css';


const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#eaeded' ,
    },
    secondary: {
      main: '#eaeded' ,
    },
  },
});

const Styledvatar = styled(Avatar)`
  ${({ theme }) => `
  cursor: pointer;
  background-color: ${theme.palette.primary.main};
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    background-color: ${theme.palette.secondary.main};
    transform: scale(1.3);
  }
  `}
`;


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
				    <Grid container spacing={0} justify="center" alignItems="center"  direction="column">
				    	<Grid item xs={12} >
				        	<NoSsr>
						      <MuiThemeProvider theme={customTheme}>
						        <ThemeProvider theme={customTheme}>
						          <Styledvatar className={classes.avatar} ><Link to=""><LinkedInIcon /></Link></Styledvatar>
						          <Styledvatar className={classes.avatar} ><Link to=""><FacebookIcon /></Link></Styledvatar>
						          <Styledvatar className={classes.avatar} ><Link to=""><TwitterIcon /></Link></Styledvatar>
						        </ThemeProvider>
						      </MuiThemeProvider>
							</NoSsr>
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
  },
  avatar: {
  	alignItems: 'center',
  	marginBottom: 8,
  }

 }));