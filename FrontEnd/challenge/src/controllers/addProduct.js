import productApi from '../api/productApi';
import { getProductOff } from './getProduct';


const productsOff = (product) => {
    let i ;
    // Calling the LocalStorage to store the product.
    if(localStorage.length >= 0){
        i = localStorage.length + 1;
    }
    localStorage.setItem(`product${i}`, JSON.stringify(product));
}


export const addProductOff  = (product) => {
    
    const res = getProductOff();
    let b = false;
    for(let  i = 0; i < res.length ; i++){
        if(res[i].name == product.name){
            b = true;
            break;
        }
    }
    if(b == false ) {
        productsOff(product); 
    }
       

    console.log("offline: ", product);
}

export const addProductOn  = async (product) => {
    
    // Declaring each attribute with the value.
    const name = product.name;
    const description = product.description;
    const price = product.price;
    const amount = product.amount;
    
    
    // Calling the Back End via POST
    await productApi.post('/catProduct', {
        name,
        description,
        price,
        amount
    })

    //productsOff(product);

    console.log("online", product);
}

/*
const getProductsOnline = async() => {
        
            // Conectas con la BD
            document.getElementById("demo").innerHTML = "hola";
            // Obtienes los datos
        
            // Envias datos
        }

*/
