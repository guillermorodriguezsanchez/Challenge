import { myFunction } from "../components/checkOnline";
import { getCheckSync, setSync } from "../components/sync";
import { addProductOn, addProductOff } from "../controllers/addProduct";
import { getProductOff, getProductsOn } from "../controllers/getProduct";
import { syncOFFtoON, syncONtoOFF } from "../controllers/syncronised";

// myFunction -> component to check if the user is online or offline
//const check = myFunction();


function refreshPage() {
    window.location.reload(false);
  }


export const addProduct =  async (product) => {
    const check = await myFunction();
    console.log("status",check);
    check ? addProductOn(product) : addProductOff(product);
    refreshPage();
}

export const getProduct = async() => {

    const check = await myFunction();
    const res = check ? await getProductsOn() : getProductOff();
    syncronised();
    return res;
}

export const syncronised = async() => {
    const check = await myFunction();
    if(check && !getCheckSync()){
        const productsOff = getProductOff();
        const productsOn = await getProductsOn();
        syncONtoOFF(productsOn, productsOff);
        await syncOFFtoON(productsOff, productsOn);
        setSync(true);
        return true;
    }
}



