//fetching library
import axios from 'axios'

const instance = axios.create({
	baseURL:"http://localhost:5001/paint-site-a0a7a/us-central1/api"
	//"http://localhost:5001/nepalinters/us-central1/api" // api(cloud function) url 
	
	
});

export default instance;