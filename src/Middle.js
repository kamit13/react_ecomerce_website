import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Specification.css';

function Middle(){
	const classes = useStyles();	 
	 
	return(
		 
		<div className={classes.root}>
			<Grid
			  container
			  direction="row"
			  justify="space-between"
			  alignItems="center"
			>
			
			<Grid sm={12} md={6}>
				<div className="specification__content">
					<h3>Performanace Expperience</h3>
					<p>Enable Multitaksing experience without any Lagging.  </p>
				</div>
			</Grid>
			<Grid sm={12} md={6}>	 
					<img className="specifaction__image" src="https://be-digitalseo.com/wp-content/uploads/2020/05/icon-global-seo.png" /> 
			</Grid>

			</Grid>
		</div> 
	);
};

export default Middle;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#eaeded',
  },
 
}))