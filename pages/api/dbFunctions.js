import admin from './firebaseApp';

async function readDataFromDb(id) {
    if(id) {
        try {
            const db = admin.database();
            const nodeRef = db.ref(`pets/${id}`);
            const dataSnapshot = await nodeRef.once('value');
            const data = dataSnapshot.val();
            return data;
        } catch (error) {
            console.error('Error reading data from the database: ', error);
        }
    } else {
        try {
            const db = admin.database();
            const petsRef = db.ref();
            const dataSnapshot = await petsRef.once('value');
            const data = dataSnapshot.val();
            return data;
        } catch (error) {
            console.error('Error reading data from the database: ', error);
        }
    }
}

export { readDataFromDb };