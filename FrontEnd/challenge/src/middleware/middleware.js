import { myFunction } from "../components/checkOnline";
import { addProductOn, addProductOff , getProductsOn} from "../controllers/addProduct";

const check = myFunction();

export const addProduct = (product) => {
 
    if(check){
        addProductOn(product)
    }else{
        addProductOff(product)
    }
}

export const getProduct = () => {
    
    if(check){
        getProductsOn()
    }else{
        
    }

}