import axios from "axios";

const request = axios.create({
    baseURL: "https://tod-api-j81j.onrender.com"
});

export default request;
