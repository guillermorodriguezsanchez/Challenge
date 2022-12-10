import productApi from '../api/productApi';



export const getDataOff  = (product) => {
    

    console.log("offline: ", product);
    
}

export const getDataOn  = (product) => {
    
   
    const name = product.name;
    const description = product.description;
    const price = product.price;
    const amount = product.amount;
    

    productApi.post('/catProduct', {
        name,
        description,
        price,
        amount
    })


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
