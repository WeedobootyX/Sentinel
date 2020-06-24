import axios from 'axios'; 

const instance = axios.create({
	baseURL: 'https://nova.cqrify.com:9943'
})

export default instance; 