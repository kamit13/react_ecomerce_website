import {useState} from 'react';
import './Order.css';
import CheckoutProduct from './CheckoutProduct'; 
import { useStateValue } from './StateProvider'

function Order() {
	//const [user, setUser] = useState(null);
	const [ {basket} , dispatch] = useStateValue();
  return (
    <div className="Order">
    	<p>Ordered Items</p>
			<CheckoutProduct />    		 
    </div>
  );
}
export default Order;

 