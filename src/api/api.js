import axios from "axios";



const api = axios.create({
    baseURL: 'https://opentdb.com'
});


export default api
