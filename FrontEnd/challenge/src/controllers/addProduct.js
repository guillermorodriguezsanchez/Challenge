import productApi from '../api/productApi';
import { setSync } from '../components/sync';
import { getProductOff } from './getProduct';
import { transformProductFromApi, transformProductFromLocalStorage } from '../components/layer';

const addProductToLocalStorage = (product) => {

    let i ;
    // Calling the LocalStorage to store the product.
    if(localStorage.length >= 0){
        i = localStorage.length + 1;
    }
<<<<<<< HEAD
    localStorage.setItem(`product${i}`, JSON.stringify(transformProductFromLocalStorage(product)));

=======
    localStorage.setItem(`product${i}`, JSON.stringify(product));
   
>>>>>>> 1cc6465c9e8d9242c8e6baa33347a0e547518cd1
}

export const addProductOff = (product) => {
    
    const existingProducts = getProductOff();
    if (!existingProducts.find(p => p.name === product.name)) {
        addProductToLocalStorage(product);
        setSync(false);
    }
}

export const addProductOn = async (product) => {
    await productApi.post('/catProduct',  transformProductFromApi(product));
    setSync(false);
}
