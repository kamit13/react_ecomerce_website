import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import Avatar from '@material-ui/core/Avatar';
import ComputerIcon from '@material-ui/icons/Computer';
import SignalWifi4BarLockIcon from '@material-ui/icons/SignalWifi4BarLock';
import Divider from '@material-ui/core/Divider';
import './Features.css';

function Features(){
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<h3 className={classes.heading}>Features</h3>

	      <Grid container spacing={3} justify="center" alignItems="center" >
	        <Grid item xs={12} sm={6} md={4} lg={3} >
	          <Paper className={classes.paper}   >
			    <div className={classes.icon_center}>     
			         <Avatar  className={classes.avatar} >
		        		<SportsEsportsIcon  className={classes.icon}  />
		      		</Avatar>
		      	</div>
	          	<h4 className={classes.features__title}>Gaming Feature</h4>
	          	<p className={classes.features__details}> Fast Gaming Performance </p>
	          </Paper>
	        </Grid>
	        <Grid item xs={12} sm={6} md={4} lg={3}>
	          <Paper className={classes.paper}>
	          	<div className={classes.icon_center}>     
			         <Avatar  className={classes.avatar}>
		        		<ComputerIcon className={classes.icon} />
		      		</Avatar>
		      	</div>
	          	<h4 className={classes.features__title}>High Performance</h4>
	          	<p className={classes.features__details}> Multitasking Performance</p>
	          </Paper>
	        </Grid>
	        <Grid item xs={12} sm={6} md={4} lg={3} >
	          <Paper className={classes.paper}>
	          	<div className={classes.icon_center}>     
			         <Avatar  className={classes.avatar}>
		        		<SignalWifi4BarLockIcon  className={classes.icon} />
		      		</Avatar>
		      	</div>
	          	<h4 className={classes.features__title}>Best Security</h4>
	          	<p className={classes.features__details}>Best Security Perfomance</p>
	          </Paper>
	        </Grid>
	      </Grid>
	    </div>
	)

};
export default Features;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#eaeded',
    padding: theme.spacing(2), 
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },

  icon_center: {
  	display: 'flex',
  	justifyContent: 'center',
  	alignItems:'center',
  },

  avatar: {
  	display: 'flex', 
  	width: theme.spacing(10),
    height: theme.spacing(10),
  },

  icon: {
  				 
  		fontSize: 50,
  		color: "#f0c14b",
  },
  features__title: {
  	fontSize: 20,
 	color: "#f50057",
  },

  features__details: {
  		fontSize:  12,
  },

  heading: {
  	fontSize: 30,
  	marginBottom: 10,
  	color: "#f0c14b",
  	fontWeight: 1200,
  },

 

}));