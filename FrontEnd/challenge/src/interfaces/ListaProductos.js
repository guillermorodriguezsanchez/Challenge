import React, { useEffect, useLayoutEffect, useState } from 'react'
import App from '../App';
import { getProductOff, getProductsOn } from '../controllers/getProduct';
import { getProduct, syncronised } from '../middleware/middleware';

//import '../index.css'

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

    function renderProductRows(dataProducts) {
        return dataProducts.map((item, index) => {
          return (
            <tr key={index} >
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.amount}</td>
            </tr>
          );
        });
      }

    return(
        <div>

            <h2>Product List</h2>
            <div className='content-table'>

            <table className='styled-table'>
                <thead>
                    <tr>
                    <th>Name</th><th>Description</th> <th>Price</th> <th>Amount</th>
                    </tr>
                </thead>
               <tbody>
                
                    {renderProductRows(dataProducts)} 
                
               </tbody>
             </table>

            </div>
           
        </div>
    )
}

export default ListaProductos