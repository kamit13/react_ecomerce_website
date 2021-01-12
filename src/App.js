import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Banner from  './Banner';
import Products from './Products';
import { useStateValue } from './StateProvider'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Checkout from './Checkout';
import Order from './Order';
import Features from './Features';
import Specification from './Specification'; 
import Footer from './Footer';
import Clients from './Clients';
import Search from './Search';

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
          <Route path="/products">
             <Header />
             <Search />
             <Products />
          </Route>
       		<Route path="/">
       		   <Header />		
  		       <Banner />
             <Features />
             <Specification />
  		        <Clients />
              <Footer /> 
       		</Route>	 
       </Switch>

		</div>   
      
       </Router>

    
  );
}

export default App;
