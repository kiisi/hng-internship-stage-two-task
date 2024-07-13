import axios from 'axios'

const request = axios.create({
    baseURL: "https://api.timbu.cloud",
});

export default request;