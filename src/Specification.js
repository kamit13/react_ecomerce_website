import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Specification.css';
import Middle from './Middle';

function Specifaction(){
	const classes = useStyles();	 
	 
	return(
		 <>
		<div className={classes.root}>
			<Grid
			  container
			  direction="row"
			  justify="space-between"
			  alignItems="center"
			>
			<Grid sm={12} md={6}>	 
					<img className="specifaction__image" src="https://www.omen.com/content/dam/sites/omen/worldwide/homepage/t100-c4h-OCC-large1.png" /> 
			</Grid>
			<Grid sm={12} md={6}>
				<div className="specification__content">
					<h3>Gaming Experience</h3>
					<p>Delivering your every gaming wish, except maybe the unlimited lives one.</p>
				</div>
			</Grid>
			</Grid>
		</div>
		<Middle />
		<div className={classes.second}>
			<Grid
			  container
			  direction="row"
			  justify="space-between"
			  alignItems="center"
			>
			<Grid sm={12} md={6}>	 

					<img className="specifaction__image" src="https://itsecuritywire.com/wp-content/uploads/2020/04/Cyber-Security-Only-25-of-Enterprises-Focus-on-Cyber-Attack-Prevention.jpg" /> 
			</Grid>
			<Grid sm={12} md={6}>
				<div className="specification__content">
					<h3>Best Security Experience</h3>
					<p>Computer security for Developers that will blow your Mind.  </p>
				</div>
			</Grid>
			</Grid>
		</div> 
	</>		 
	 
	);
};

export default Specifaction;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  second: {
    flexGrow: 1,
    marginTop: 10,
  },
  
}))