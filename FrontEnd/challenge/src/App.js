import React, { useEffect } from 'react'
import './App.css';
import ListaProductos from './interfaces/ListaProductos';
import CrearProducto from './interfaces/CrearProducto';


function App() {

  return (
    
    <div className="App">
      <h1 style={{color : 'red' , background : 'lightblue'  }}>Company desing challenge</h1>
      <div > 
        <div>
                  <ListaProductos />
        </div>

            <div> 
                    <CrearProducto/>
              </div> 
         </div>
      
     
    </div>
  );
}

export default App;
