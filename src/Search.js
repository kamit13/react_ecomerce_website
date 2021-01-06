import React, { useState, useEffect } from 'react'; 
import logo from './logo.svg';
import './Search.css';
import  Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save'; 
import Grid from '@material-ui/core/Grid';
import { Link, useHistory } from 'react-router-dom';
import Zoom from '@material-ui/core/Zoom';


function Search() {
  const history = useHistory();
	const classes = useStyles();
  const [screenSize, setScreenSize] = useState(false);

  useEffect(() => {
    MediaScreen(); 

  }, [screenSize]);

  const MediaScreen = () =>{
      const mediaQuery = window.matchMedia( "(min-width: 500px)" );
      if(mediaQuery.matches){
        setScreenSize(false)
        console.log("media screen ", screenSize);
           
        } 
      else{
        setScreenSize(true)
        console.log("media screen ", screenSize);    
      }
  }

  return (
     
    <div className="search">
    <Grid container 
    spacing={0}
    alignItems="center"
    justify="center"
    >
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
      <div className="search__left__content">
        <h4>Laptop <span className="search__highlight"> With High</span> Configuration</h4>
          <p>A laptop or laptop computer, is a small, 
          portable personal computer with a "clamshell" 
          form factor, typically having a thin LCD or LED 
          computer screen mounted on the inside of the upper
           lid of the clamshell and an alphanumeric keyboard on 
           the inside of the lower lid. </p>
            
          <Button variant="contained" color="secondary" >
             Check Details
          </Button>
      </div>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
      <div className="search__right__content">
        <Zoom in={true}>
          <img src="https://pngimg.com/uploads/laptop/laptop_PNG5905.png" />
        </Zoom>
      </div>
      </Grid>
      </Grid> 
    </div>
    
     
     
  );
}

export default Search;

const useStyles = makeStyles((theme) => ({
  root: {
  	margin: '10px',
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
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

 

