import admin from 'firebase-admin';

const serviceAccount = {
    "type": "service_account",
    "project_id": "pet-web-app-cb4f6",
    "private_key_id": "d8f9790d45ef4158e1333473a397df98240d2b40",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDHbfQQyEd3D87D\nIve7mL+W+nAcYYytXC58wegqEPSrFRFiWKNg1lGsiGtHC2Xh8uY4fuYS7w+VG3AR\n6to5cOH0NAOuw9alaXY4Ti8WD3HCXOjBvHME28tciCdMXe495SmPCgt2ShZaB0eA\nkTplg6FGrI1+KUji0HT5c67ZIxU9SeVPqOUP5yIUNPeoHWveDq8idt2DAc8oQyg6\nyc88G4rwv7sQlRIQsMBvTDl4l8EjuHOGZ6p4GFxCeGcBPzcXMlaR558boANQn0kh\n6B8Se1cCqczzl5ZPOocDgwrgVOqsJkb+EykOaVT88NCwJo3glQzgAnwar6yCLmCT\nFyfR2sYtAgMBAAECggEAGkLaXtNgxcbpHT0fji6BHCqCVNprofB/lqIaJl/xOA4g\nKekuKnROcP/N0J8pnWVU95+OQHQGg0YHrfRVJDc/Kd8nlP3o6ANJNATnomoKOuPt\nKoXcR4mB7/9l3WKJGtFwdYuHEt6SruxCeCWnoPKCbEIQp8pb9LIqlSasoZ9DDrzO\n2WSwWWkz9A85IWayNrhBg/oO4kU48R3qpL/NZUkX4fCVC2yZHcqVVhNhVC/W+T6J\nyKte9v3jdZx8+sHftBrQsIzaZ7vqgmVNBkkjHKqcIrwZeet6+OLUPHCoAP4vQ+0Y\nC/WQrjgZr0FfZdTh9Ndr0pZUaZCATz7mV8BVss1iaQKBgQDidYFuwUd5O0D/nfjq\nZufkQ/+++FtxyowJPTC6Nh12cxveqbsMlnL1fa6KYFrwvmezwSWdDmYGsTP6B2zQ\ng/8rua1l7ulBKKKIGym/NlWkYbSHccS+mKUbZ07lK50hL0K+/3ZmWxBBXNFGFpsc\nUypJlXonXhED9TUKsxJR303eswKBgQDhcc9eKF7VPyPe3bYMbcOHpMB7f6vJc5T0\njSiIYkrQ04h7SCFgeZkBclYXwxE7oOUoNhDDAUEQWLq1QnkoZmRTnyrjbasfeEN9\nds8un6QaDoegky2lsFwx5+ExlPjNhNP89UADE+kgsl1mq7DTkgD2Iop/GZ5swXF8\nmM4m1kc3nwKBgQCDcsObn1M2en+DIJYwsWTfKd1UY2LpDTH11u/m1qyJac1+lLT/\nXIEEIFzk84M2BL+7Jl0H6iisr8VE13SBIG1IWzHcXi5E5SpaqLG1zPsvPIuGpzIV\nlBMacf/opEVD0uQCa9S1Gxy3ZAIRleOZMGj2Z26NVVu5GWcde84heeYAYwKBgHGg\nEfsL79gczbB7IFEdVWpdUCIuk9+h4JZtOtuaZsjfhK9WCHR+dO50uQ2a5GmgSz88\nGLCgRjG99sR6r2P8T16SH2SnFpNy4tkuc3e1QFldr1/wLhaPT7hbfXWm9stmwg2B\ncnTaqSowm8Cukh3gPZnQiOtMdzurN86rmWObpiNTAoGAFu5MAZEJfRXvuujSy20P\n3uZmBgMo78DJOex3u+VwhYAFGSNC3arb5PvEZMtstfVO4iXmvbikQ+4k1tPzGEqP\nfuEcCnWXYNAfN5pf2z4UrS0AK6rNPTbj2U2nZMZCMgQrfUekPfHxiOitMf7wMyfl\nr4p92t1GFzn0tM1vjtTxCCA=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-ewvza@pet-web-app-cb4f6.iam.gserviceaccount.com",
    "client_id": "104369271004999504915",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ewvza%40pet-web-app-cb4f6.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  }

if(!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://pet-web-app-cb4f6-default-rtdb.firebaseio.com"
    });
}

module.exports = admin;
