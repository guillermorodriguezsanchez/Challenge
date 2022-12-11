 export function myFunction() {

   /*if (pingserver.height>0) {
      alert("Online");
   } else {
      alert("Offline");
   }*/

    let checked = false;

    if(navigator.onLine){
        alert("online");
        checked = true;
    }else{
        alert("offline");
        checked = false;
    }

    return checked;
  
}


