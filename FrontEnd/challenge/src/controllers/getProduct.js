import productApi from '../api/productApi';
import { transformProductFromApi, transformProductFromLocalStorage } from '../components/layer';


export const getProductsOn = async () => {

    // Calling the Back End with the URL that is included in productApi | axios | 
    const res = await productApi.get('/catProduct');
    // Returning products.
    //return res.data.products;
    return res.data.products.map(transformProductFromApi);

} 

export const getProductOff = () =>  {

    const products = [];
    for (let i = 0; i < localStorage.length; i++) {
        let k = localStorage.key(i);
        let product = JSON.parse(localStorage.getItem(k));
        products.push(transformProductFromLocalStorage(product));
    }
    return products;
    
}
