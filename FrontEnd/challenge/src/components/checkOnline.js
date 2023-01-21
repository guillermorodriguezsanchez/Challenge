import isOnline from 'is-online';

export async function myFunction() {
    let online;
    try {
        online = await isOnline();
    } catch (error) {
        console.error(`Error checking online status: ${error}`);
    }
    return online;
}



