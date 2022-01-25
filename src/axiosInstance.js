import axios from "axios";


const instance = axios.create({
    baseURL: "https://cors-handle.herokuapp.com/http://95.217.129.143:8081/",
});



export default instance;