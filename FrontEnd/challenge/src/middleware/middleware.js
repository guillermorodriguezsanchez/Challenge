import { myFunction } from "../components/checkOnline";
import { getCheckSync, setSync } from "../components/sync";
import { addProductOn, addProductOff } from "../controllers/addProduct";
import { getProductOff, getProductsOn } from "../controllers/getProduct";
import { syncOFFtoON, syncONtoOFF } from "../controllers/syncronised";

// myFunction -> component to check if the user is online or offline
<<<<<<< HEAD
function refreshPage() {
    window.location.reload(false);
  }

export const addProduct = async(product) => {
    let check = await myFunction();
   
=======
//const check = myFunction();


function refreshPage() {
    window.location.reload(false);
  }


export const addProduct =  async (product) => {
    const check = await myFunction();
    console.log("status",check);
>>>>>>> 1cc6465c9e8d9242c8e6baa33347a0e547518cd1
    check ? addProductOn(product) : addProductOff(product);
    refreshPage();
}

export const getProduct = async() => {
<<<<<<< HEAD
    let check = await myFunction();
    
=======

    const check = await myFunction();
>>>>>>> 1cc6465c9e8d9242c8e6baa33347a0e547518cd1
    const res = check ? await getProductsOn() : getProductOff();
    
    syncronised();
    return res;
}

export const syncronised = async() => {
<<<<<<< HEAD
    let check = await myFunction();
=======
    const check = await myFunction();
>>>>>>> 1cc6465c9e8d9242c8e6baa33347a0e547518cd1
    if(check && !getCheckSync()){
        const productsOff = getProductOff();
        const productsOn = await getProductsOn();
        syncONtoOFF(productsOn, productsOff);
        await syncOFFtoON(productsOff, productsOn);
        setSync(true);
        return true;
    }
}



