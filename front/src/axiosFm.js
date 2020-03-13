import axios from 'axios';
import {apiURL} from "./constants";

const axiosFm = axios.create({
    baseURL: apiURL
});

export default axiosFm;