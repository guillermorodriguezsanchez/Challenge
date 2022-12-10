import productApi from '../api/productApi';





export const addProductOff  = (product) => {
    
    console.log("offline: ", product);
}

export const addProductOn  = async (product) => {
    
   
    const name = product.name;
    const description = product.description;
    const price = product.price;
    const amount = product.amount;
    

    await productApi.post('/catProduct', {
        name,
        description,
        price,
        amount
    })

    console.log("online", product);
}

export const getProductsOn = async () => {

    const res = await productApi.get('/catProduct');

    return res.data.products;

} 

export const getProductOff = () => {

    console.log("Get products offline");
}


/*
const getProductsOnline = async() => {
        
            // Conectas con la BD
            document.getElementById("demo").innerHTML = "hola";
            // Obtienes los datos
        
            // Envias datos
        }

*/
