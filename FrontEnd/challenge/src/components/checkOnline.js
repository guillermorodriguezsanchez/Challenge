import isOnline from 'is-online';

export const  myFunction = async() => {
    let online;
    try {
        online = await isOnline();
    } catch (error) {
        console.error(`Error checking online status: ${error}`);
    }
    return online;
}



