import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.100.3:3333/',
    timeout: 50000,
})

export { api };