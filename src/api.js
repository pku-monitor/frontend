import axios from 'axios';

const api = axios.create({
    baseURL: 'https://google.com'
})

export {api}