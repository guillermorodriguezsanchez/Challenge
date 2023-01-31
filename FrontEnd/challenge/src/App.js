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
<<<<<<< HEAD
=======

>>>>>>> 1cc6465c9e8d9242c8e6baa33347a0e547518cd1
  }, 1000);
  return () => clearInterval(interval);
}, []);


  return (
    
    <div className="App">
<<<<<<< HEAD
      <h1 style={{color : 'red' , background : 'lightblue'  }}>Company Desing Challenge</h1>
=======
      <h1 style={{color : 'red' , background : 'lightblue'  }}>Company design challenge</h1>
>>>>>>> 1cc6465c9e8d9242c8e6baa33347a0e547518cd1
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
