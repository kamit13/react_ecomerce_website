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


import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

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
  formControl: {
    margin: theme.spacing(3),
  },
     
}));


function Search() {
	const classes = useStyles();
	const [search , setSearch] = useState('');
	const [sideFilter, setSideFilter] = useState('');
	const [checkBox, setCheckBox] = useState(false);


	const SearchItem = (event) =>{	 
		console.log(event);
		setSearch(event);
	}

	const FilterProduct = (event, checked) =>{	 
		console.log(" filter button",event, checked);
		setCheckBox(checked);
		setSideFilter(event); 
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
			<Grid container spacing={0} justify="center"  >
				<Grid item spacing={0} sm={12} md={2} >
	    			 
	    			<FormControl component="fieldset" className={classes.formControl}>
				        <FormLabel component="legend">Assign responsibility</FormLabel>
					        <FormGroup>
					          <FormControlLabel
					             
					            control={<Checkbox    name="ep" onChange={(event) => FilterProduct(event.target.name, event.target.checked)}  />}
					            label="Ep"
					          />
					       </FormGroup>
					</FormControl> 
	    		</Grid>
	    		<Grid item spacing={0} sm={12} md={9} >
	    			<Product search={ checkBox == true ? sideFilter : search } />
	    		</Grid>
	    	</Grid>
    	</div>	 
    </div>    		    
  );
}
export default Search;

