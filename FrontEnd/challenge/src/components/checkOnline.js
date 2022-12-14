 export function myFunction() {

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


