import { myFunction } from "../components/checkOnline";
import { getCheckSync, setSync } from "../components/sync";
import { addProductOn, addProductOff } from "../controllers/addProduct";
import { getProductOff, getProductsOn } from "../controllers/getProduct";


// myFunction -> component to check if the user is online or offline
const check = myFunction();

export const addProduct = (product) => {
 
    if(check){
        
        // add a product if your are online
         addProductOn(product);

    }else{
        console.log(check);
        // add a product in the localStorage if your are offline
        addProductOff(product);

    }
}

export const getProduct = async() => {
    
    if(check){
       
        // Get products from the Back End -> online
        const res =  await getProductsOn();
        syncronised();


        return res;
    }else{
        const res = getProductOff();
        // Get products from the LocalStorage -> offline
        return res;    
    }  
}

export const syncronised = async() => {

    // GET if is SYNC OR NOT
    let sync = getCheckSync();
    console.log("GET SYNC:", sync);

    // Check if the user is online or not
    if(check && sync == false){
        
        // If he is online GET products from LocalStorage
        let productsOff = getProductOff();

        // GET products from Back End
        let productsOn =  await getProductsOn();

        // SYNC ONLINE TO OFFLINE
        syncONtoOFF(productsOn, productsOff);

        // SYNC OFFLINE TO ONLINE
        await syncOFFtoON(productsOff,productsOn);

        // SET sync -> TRUE
        setSync(true);
        console.log("SET SYNC TRUE") 
        // RETURN SYNC TRUE
        return true;
         
    }
}


// This method is used to sync the products 
//that have been created online to the localStorage
const syncONtoOFF = (productON, productOFF) => {
    let k = false;
            for(let i = 0; i< productON.length; i++){
                for(let j = 0; j < productOFF.length; j++){
                    if(productON[i].name == productOFF[j].name){
                        k = true;
                        break;
                    }else{
                        k = false;
                    }
                }
                if(k == false){
                    addProductOff(productON[i]);
                    console.log("productOn updated in productOFF");
                }
            }
}

// This method has been created to sync products when the user loose the connection.
const syncOFFtoON = async(productOFF, productON) => {

    let b = false;

        // Check if the product is already updated from local to online
            for(let i = 0; i < productOFF.length; i++){ // HOLA
                for(let j = 0 ; j < productON.length ; j++){ // b , , hola
                    if(productOFF[i].name == productON[j].name){
                        b = true;
                        break;
                    }else{
                        b = false;
                    }
                    
                }
                console.log("i:", i);
                console.log(productOFF[i]);
                console.log("b:", b);
                if(b == false){
                    await addProductOn(productOFF[i]);
                   console.log("Product ADD");
                   
                }
            }
}


