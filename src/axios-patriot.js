import axios from 'axios'; 

const instance = axios.create({
	baseURL: 'https://patriot.polypod.se'
})

export default instance; 