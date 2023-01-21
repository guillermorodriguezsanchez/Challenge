import { myFunction } from "../components/checkOnline";
import { getCheckSync, setSync } from "../components/sync";
import { addProductOn, addProductOff } from "../controllers/addProduct";
import { getProductOff, getProductsOn } from "../controllers/getProduct";
import { syncOFFtoON, syncONtoOFF } from "../controllers/syncronised";

// myFunction -> component to check if the user is online or offline
const check = myFunction();

export const addProduct = (product) => {

    check ? addProductOn(product) : addProductOff(product);
}

export const getProduct = async() => {
    const res = check ? await getProductsOn() : getProductOff();
    syncronised();
    return res;
}

export const syncronised = async() => {
    if(check && !getCheckSync()){
        const productsOff = getProductOff();
        const productsOn = await getProductsOn();
        syncONtoOFF(productsOn, productsOff);
        await syncOFFtoON(productsOff, productsOn);
        setSync(true);
        return true;
    }
}



