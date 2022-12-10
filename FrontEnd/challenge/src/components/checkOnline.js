 export function myFunction() {

    let checked = false;

    if(navigator.onLine == true){
        
        checked = true;
    }else{
        
        checked = false;
    }

    return checked;
  
}


