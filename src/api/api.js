import axios from "axios";


const api = axios.create({
    baseURL: 'https://the-trivia-api.com'
});


export default api


