import axios from "axios";


export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    /*
    headers: {
        'Authorization': `Bearer token123`,
        `Content-Type`: `application/json
    }
    */
})