import isOnline from 'is-online';

export async function myFunction() {
    let online;
    try {
        online = await isOnline();
        if(online) {
            //alert("online");
        } else {
            //alert("offline");
        }
    } catch (error) {
        console.error(`Error checking online status: ${error}`);
    }
    console.log("status:", online);
    return online;
}



