import admin from 'firebase-admin';

const serviceAccount = {
    
}

if(!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://pet-web-app-cb4f6-default-rtdb.firebaseio.com"
    });
}

module.exports = admin;
