import React, { useState } from 'react';
import {addProduct} from '../middleware/middleware';
import '../index.css'
export default function CrearProducto(){

    //Hooks
    const[name,setName] = useState('');
    const[description,setDescription] = useState('');
    const[price,setPrice] = useState('');
    const[amount,setAmount] = useState('');

    function addProductC(){

        var product = {
            name:name,
            description: description,
            price:price,
            amount:amount
        }

        addProduct(product);
        
    }

    

    return(

        <div className='container'>
            
                <h2>Add a new product</h2>
    

            <div>
                <div>

                    <div className='row'>
                        <label htmlFor='name' className='form-label'>Name: </label>
                        <input type="text" value={name} onChange={(e) => {setName(e.target.value)}}></input>
                    </div>

                    <div className='row'>
                        <label htmlFor='description' className='form-label'>Description: </label>
                        <input type="text"  value={description} onChange={(e) => {setDescription(e.target.value)}}></input>
                    </div>

                    <div className='row'>
                        <label htmlFor='price' className='form-label'>Price: </label>
                        <input type="number"  value={price} onChange={(e) =>{setPrice(e.target.value)}}></input>
                    </div>

                    <div className='row'>
                        <label htmlFor='amount' className='form-label'>Amount: </label>
                        <input type="number"  value={amount} onChange={(e) =>{setAmount(e.target.value)}}></input>
                    </div>

                    <button onClick={ () => {addProductC()}} className= "btn">Save Product</button>


                </div>
            </div>

        </div>

    )

}

