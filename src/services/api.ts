import axios from "axios";

const api = axios.create({
    baseURL: 'http://10.0.0.196:3333/',
    timeout: 50000,
})

export { api };