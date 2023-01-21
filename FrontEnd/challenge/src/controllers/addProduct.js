import productApi from '../api/productApi';
import { setSync } from '../components/sync';
import { getProductOff } from './getProduct';

const addProductToLocalStorage = (product) => {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
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
