import React, { useEffect, useLayoutEffect, useState } from 'react'
import { getProductOff, getProductsOn } from '../controllers/getProduct';
import { getProduct, syncronised } from '../middleware/middleware';


export function ListaProductos (){

    const[dataProducts, setdataProducts] = useState([]);
    const[data, set] = useState(false); 

    useEffect(()=>{
        setData();
        
    },[data]);
    
    // Set the data from the BackEnd or LocalStorage
    const setData = async () => {

        const res =  await getProduct();
        //console.log("res:",res);
        setdataProducts(res);
        set(true);
    }

    return(
        <div>
            <h2>Product List</h2>
            <ul>
                {dataProducts.map((item) => <li key={item.name}>{item.name}</li>)}
      </ul>
        </div>
    )
}

export default ListaProductos