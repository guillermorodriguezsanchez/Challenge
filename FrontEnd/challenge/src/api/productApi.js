import axios from 'axios';


const baseURL = 'http://localhost:3002'

const productApi = axios.create({baseURL});


export default productApi;