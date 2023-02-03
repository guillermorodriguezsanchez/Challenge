import { myFunction } from "../components/checkOnline";
import { getCheckSync, setSync } from "../components/sync";
import { addProductOn, addProductOff } from "../controllers/addProduct";
import { getProductOff, getProductsOn } from "../controllers/getProduct";
import { syncOFFtoON, syncONtoOFF } from "../controllers/syncronised";

// myFunction -> component to check if the user is online or offline
function refreshPage() {
    window.location.reload(false);
  }

export const addProduct = async(product) => {
    let check = await myFunction();
   
    check ? addProductOn(product) : addProductOff(product);
    refreshPage();
}

export const getProduct = async() => {
    let check = await myFunction();
    syncronised();
    const res = check ? await getProductsOn() : getProductOff();
    return res;
}

export const syncronised = async() => {
    let check = await myFunction();
    if(check && !getCheckSync()){
        const productsOff = getProductOff();
        const productsOn = await getProductsOn();
        syncONtoOFF(productsOn, productsOff);
        await syncOFFtoON(productsOff, productsOn);
        setSync(true);
        return true;
    }
}



