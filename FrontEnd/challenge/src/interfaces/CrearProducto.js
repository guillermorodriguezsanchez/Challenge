import React, { useState } from 'react';
import {myFunction} from '../components/checkOnline';
import {addProduct} from '../controllers/addProduct';

export default function CrearProducto(){

    //Hooks
    const[name,setName] = useState('');
    const[description,setDescription] = useState('');
    const[price,setPrice] = useState('');
    const[amount,setAmount] = useState('');

    function addProduct(){

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
            <div className='row'>
                <h2>Add a new product</h2>
            </div>

            <div className='row'>
                <div className='col-sm-6 offset-3'>

                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label'>Name:</label>
                        <input type="text" className = 'form-control' value={name} onChange={(e) => {setName(e.target.value)}}></input>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='description' className='form-label'>Description:</label>
                        <input type="text" className = 'form-control' value={description} onChange={(e) => {setDescription(e.target.value)}}></input>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='price' className='form-label'>Price:</label>
                        <input type="number" className = 'form-control' value={price} onChange={(e) =>{setPrice(e.target.value)}}></input>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='amount' className='form-label'>Amount:</label>
                        <input type="number" className = 'form-control' value={amount} onChange={(e) =>{setAmount(e.target.value)}}></input>
                    </div>

                    <button onClick={addProduct} className= "btn btn-success">Save Product</button>


                </div>
            </div>

        </div>

    )

}

