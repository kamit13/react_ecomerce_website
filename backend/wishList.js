const mongoose = require ('mongoose');

const productSchema = mongoose.Schema({
	id: String,
	title: String,
	description: String,
	image: String,
})

const product = mongoose.model('product', productSchema);

module.exports =product;