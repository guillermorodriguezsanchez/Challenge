import React, { useEffect, useState } from 'react'
import { getProductsOn } from '../controllers/controllers';


export function ListaProductos (){

    const[dataProducts, setdataProducts] = useState([]);

    useEffect(()=>{
        setData();
    },[dataProducts])


    const setData = async() => {
        const res = await getProductsOn();
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