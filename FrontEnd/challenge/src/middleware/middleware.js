import { myFunction } from "../components/checkOnline";
import { addProductOn, addProductOff } from "../controllers/addProduct";
import { getProductOff, getProductsOn } from "../controllers/getProduct";


// myFunction -> component to check if the user is online or offline
const check = myFunction();
console.log(check);
export const addProduct = (product) => {
 
    if(check){
        console.log(check);
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
        return res;
    }else{
        const res = getProductOff();
        // Get products from the LocalStorage -> offline
        return res;    
    }  
}


export const syncronised = async() => {

    // Check if the user is online or not
    if(check){
        // If he is online GET products from LocalStorage
        let productsOff = getProductOff();
        console.log(productsOff);
        // GET products from Back End
        let productsOn = await getProductsOn();

        let b = false;
        // Check if the product is already updated
        try {
            
            for(let i = 0; i < productsOff.length; i++){ // HOLA
                for(let j = 0 ; j < productsOn.length ; j++){ // b , c , hola
                    if(productsOff[i].name == productsOn[j].name){
                        b = true;
                        break;
                    }else{
                        b = false;
                    }
                }
                console.log("i:", i);
                console.log(productsOff[i]);
                console.log("b:", b);
                if(b == false){
                    addProductOn(productsOff[2]);
                    console.log(productsOff[2]);
                }
            }
            

            /*productsOff.forEach( (name) => {
                name = productsOff.name;
                console.log(productsOff[0].name);
                const existNameProduct=  productsOn.findOne({name:name});

                if (!existNameProduct) {
                 addProductOn(productsOff)
                }
     
             });*/


        } catch (error) {
            
        }
         
    }
}



