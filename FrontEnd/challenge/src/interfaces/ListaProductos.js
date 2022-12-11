import React, { useEffect, useLayoutEffect, useState } from 'react'
import { getProductOff, getProductsOn } from '../controllers/getProduct';
import { getProduct, syncronised } from '../middleware/middleware';


export function ListaProductos (){

    const[dataProducts, setdataProducts] = useState([]);

    useEffect(()=>{
        syncronised();
    },[])

    useLayoutEffect(() => {
        setData();
    }, [dataProducts])

    /*useEffect(()=>{
        setData();
    },[dataProducts]);*/
    
    // Set the data from the BackEnd or LocalStorage
    const setData = async() => {

        const res = await getProduct();
        //console.log("res:",res);
        setdataProducts(res);
        
    }

    return(
        <div>
            <h2>Product List</h2>
            <ul>
                {dataProducts.map((item) => <li key={item.id}>{item.name}</li>)}
      </ul>
        </div>
    )
}

export default ListaProductos