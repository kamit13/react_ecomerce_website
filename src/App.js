import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Search from  './Search';
import Products from './Products';
import { useStateValue } from './StateProvider'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Checkout from './Checkout';
import Order from './Order';

function App() {
	//const [user, setUser] = useState(null);
	const [ state, dispatch] = useStateValue();
  return (
    <Router>
    	<div className="App">

       <Switch>
       		<Route path="/checkout">
       			 <Header />
       			 <Checkout />
       		</Route>
       		<Route path="/order">
       			 <Header />
       			 <Order />
       		</Route>
       		<Route path="/">
       		   <Header />		
		       <Search />
		       <Products /> 
       		</Route>	 
       </Switch>

		</div>       
       </Router>

    
  );
}

export default App;
