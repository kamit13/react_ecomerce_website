import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import Grid from '@material-ui/core/Grid';

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
   
}));


function Search(){
	
	const classes = useStyles();

	  return (
	  	<Grid container justify="center" >
	  		<Grid item >
			    <Paper component="form" className={classes.root}>

			      <InputBase
			        className={classes.input}
			        placeholder="Search Product..."
			         
			      />
			      <Divider className={classes.divider} orientation="vertical" />
			      <IconButton type="submit" className={classes.iconButton} aria-label="search">
			        <SearchIcon />
			      </IconButton>
			      
			       
			    </Paper>
			</Grid>
		</Grid>	    
	  );
};
export default Search;