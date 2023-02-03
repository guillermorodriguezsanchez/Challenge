import { addProductOn, addProductOff } from "../controllers/addProduct";


// This method is used to sync the products 
//that have been created online to the localStorage
export const syncONtoOFF = (productON, productOFF) => {
    productON.forEach((onlineProduct) => {
        if (!productOFF.find((offlineProduct) => offlineProduct.name === onlineProduct.name)) {
            addProductOff(onlineProduct);
            console.log("productOn updated in productOFF");
        }
    });
}

// This method has been created to sync products when the user loose the connection.
export const syncOFFtoON = async (productOFF, productON) => {
    productOFF.forEach(async product => {
        if (!productON.find(p => p.name === product.name)) {
            await addProductOn(product);
            console.log("Product updated from productOFF to productON");
        }
    });
}