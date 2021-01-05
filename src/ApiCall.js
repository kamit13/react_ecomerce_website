import axios from  'axios';

const ApiCall = async () =>{
		try{
			const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
			console.log(response);
			return response;
			 
		}
		catch (error) {
			console.log(error);
		}
	}
 export default ApiCall;