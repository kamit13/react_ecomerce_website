import {useState} from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { makeStyles } from '@material-ui/core/styles'; 
import { useStateValue } from './StateProvider'

function Checkout() {
	const classes = useStyles();
	//const [user, setUser] = useState(null);
	const [ { basket } , dispatch] = useStateValue();
  return (
    <div className="Order">
    	<p>Items in the card</p>
    	{basket.map(item =>(

    		<CheckoutProduct 
    		  id = { item.id }
    		  title = { item.title }
    		  image = { item.image }
    		/>
         ))}

    </div>
  );
}
export default Checkout;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));