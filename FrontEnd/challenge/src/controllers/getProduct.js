import productApi from '../api/productApi';


export const getProductsOn = async () => {

    // Calling the Back End with the URL that is included in productApi | axios | 
    const res = await productApi.get('/catProduct');
    
    // Returning products.
    return res.data.products;

} 

export const getProductOff = () =>  {

    const products = [];

    // Calling the LocalStorage to obtain all products that are keeping in there
    for(let i = 0; i < localStorage.length; i++){
        let  k = localStorage.key(i);
        let product = JSON.parse(localStorage.getItem(k));
        products.push(product);
    }
    // Returning products
    return products;
    
}
