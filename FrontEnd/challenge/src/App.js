import React, { useEffect, useState } from 'react'
import './App.css';
import ListaProductos from './interfaces/ListaProductos';
import CrearProducto from './interfaces/CrearProducto';
import { myFunction } from './components/checkOnline';
import 'react-notifications/lib/notifications.css';

import {NotificationContainer, NotificationManager} from 'react-notifications';

function App() {



const [check, setCheck] = useState(null);

useEffect(() => {
  if (check !== null) {
    if (check) {
      console.log("online");
      NotificationManager.success('Online');
    } else {
      console.log("offline");
      NotificationManager.error('Offline');
     
    }
  }
}, [check]);



useEffect(() => {
  
  const interval = setInterval(async () => {
    const checkValue = await myFunction();
    setCheck(checkValue);
  }, 1000);
  return () => clearInterval(interval);
}, []);


  return (
    
    <div className="App">
      <h1 style={{color : 'red' , background : 'lightblue'  }}>Company Desing Challenge</h1>
      <NotificationContainer />
      <div > 
        <div>
                  <ListaProductos /> 
        </div>

            <div className="add_product"> 
                    <CrearProducto/>
              </div> 
         </div>
         
     
    </div>
  );
}

export default App;
