import productApi from '../api/productApi';
import { setSync } from '../components/sync';
import { getProductOff } from './getProduct';

const addProductToLocalStorage = (product) => {

    let i ;
    // Calling the LocalStorage to store the product.
    if(localStorage.length >= 0){
        i = localStorage.length + 1;
    }
    localStorage.setItem(`product${i}`, JSON.stringify(product));
   
}

export const addProductOff = (product) => {
    const existingProducts = getProductOff();
    if (!existingProducts.find(p => p.name === product.name)) {
        addProductToLocalStorage(product);
        setSync(false);
    }
}

export const addProductOn = async (product) => {
    await productApi.post('/catProduct', product);
    setSync(false);
}
