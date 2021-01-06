import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
 

function Clients(){
	const classes = useStyles();	 
	 
	return(
		 
		<div className={classes.root}>
			<Grid container >	
			<Grid sm={12}>
				<div className={classes.box}>
					<h3>About Lappy Specification Pvt Limited </h3>
					  <p className={classes.content}>Learn about laptops, pc desktops, printers, accessories and more at the Official HP® Website.</p>
				</div>
			</Grid>		 
			</Grid>
		</div> 
	);
};

export default Clients;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#eaeded',
  },

   
 content: {
 	textAlign: 'left',
 	margin: 10,
 }
}))