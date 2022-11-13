import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.100.5:3333/',
    timeout: 50000,
})

export { api };