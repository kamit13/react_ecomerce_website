const  express = require ('express');
const mongoose = require ('mongoose');
const cors = require('cors');
const product = require('./wishList');


require('dotenv').config();

// App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://ecomerce:<password>@cluster0.3irxu.mongodb.net/ecomerce?retryWrites=true&w=majority'
//middleware

//Db config
mongoose.connect(connection_url, {
	useNewUrlParser: true,
	useCreateIndex:true,
	useUnifiedTopology: true,
});
//Api EndPoints
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.status(200).send("hellow Programmer"));
app.post('/wishlist',(req, res) =>{
	const dbProduct = req.body;

	product.create(dbProduct, (error, data) => {
		if(error)
		{
			res.status(500).send(error);
		}
		else{
			res.status(201).send(data);	
		}
	})
} )

app.get('/wishlist',(req, res) =>{
	Product.find( (error, data) => {
		if(error)
		{
			res.status(500).send(error);
		}
		else{
			res.status(200).send(data);	
		}
	})
} )

 
//Listener
app.listen(port, () => console.log('Listening on localhost:'));