import admin from 'firebase-admin';

const serviceAccount = {
    "type": "service_account",
    "project_id": "pet-web-app-cb4f6",
    "private_key_id": "8f0f19437abdecd2557f7dcb412c5adf27a02849",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDtJeUUj5duU8EI\nkQsjA3FPYju8tqkmesEDfGdV566vnAOnaxIDZiWho++XuX7lTKOTMClajSp0Mirz\nbfIGqZuBb8SuH3EF0yR5bbleVXHvi0ab0zh6VWdgRf7JorA5+0MWQPydReWl/9lj\nKIbEKlrii9t/kWonqZP8e86pieKQ1prHKCaabJ71cM3YSljfhdh8KSUX79IgWDZB\nmMNXowsxto+jKEA3jMfwMK55kqhC15J7Sj29VcwmbqEG+ZEzAZZ16W+n3l4JQFmA\nBa+TLDNARgfbSEItmY12EtFConOrUHd9Av/TJ7qUQJMDv0WnktHzvARTNeqfHXLm\nnoluy7bhAgMBAAECggEALfK7sgIoWw4LRrejqsMN/02POX9Cwtvh7eT6uKBNLmVS\nJ+wM72+pNupmj8U3GwKAZxJb0NmtMhpOTCAvVq8iHDAlsX8SDQjd9lEWK3ruunUH\n10VTmhBWGUc2mKbW8kUGuJca2vYiCsnJuvatNfDm7yIeA1ePc+PdcnwijKLUrS8o\nDt4KQ+8nsYU8Gi+T75bg4JllgPJ4eTIc6CJopzC5m4nbMxIcbFz5oRKRukD8KSUP\nUyWzgugoTn6uFfxtWqz9sSVu1fLg2eS3K6tVMAzCgmojZgm+7EueDydxrkCp+4kH\n7Y0F5tgUCNdu6UNI8eAlb7C3ocV2y52rMczTjBBl4QKBgQD3UaxB/ApVnbDo7Yfg\nFSqcKdzzq6sbSB17XWbVgkUwcLJNNNI4+nxYwa1n4Q5XN5O8Q0kM3OALhRVQxTiB\nmo3SBJ9YU3qEM+ysX+U8zZN+xHoiSPpBFtkxMUnZRPvUFPEtQKmqpL6PvXD+Eeyi\nt2BIh0JYUClULzWuFqcVb3eFbQKBgQD1eNQiMJnGsCfPUQVcyK/SATS5VtFoLzsh\nlbQHsABVU1Arbd24PVF5BOWvF44Q4+MED1cP4bdzpMvvbpTC14H+TQST2rTCeMID\npbN7nVtdck7S5jC2K8nJ2LGQxj4Qw+o1LSDvK8pS8LU3dz33tek/HWbvqUWXLnRa\nVaGfSNXyxQKBgQCVD/jO3GYuLBkQivm2KYvBC8pMY0+B5fk+/ZCZZybkh0gwGIIM\nLYz8wd8OGStXjfvRIIzK3+V5jADI6dWg59JKntabmdTiEZm4WyQDfbREV491Up7i\n1C6b46Uq+tT9gpHKQIsCesEQSZHs0Ejb2cKCdGOcbtQ6FSo5fxW9aa2UEQKBgEVQ\nq0ZERwgN8g/epw7+NHeuk37KfzNWMvJW3ZFWJ6HwdrDswzElT35G3bzFf/5Q+2fI\nFSOM70qefF/N7//c7v4qLWK63VQU2WRCRB5h3szSXGO9UIAAeWif4fQpppkBWX9O\nkQA4c1dcVS+mYj8yhPynhsuiFt6L5ZsklxDtdkypAoGAA8D17P7cxZ+MWOh2W+ii\nGEFKE/je0JbhLqSUrgyZ+0ozt2g2D9em5LkZi5bEqthw/2SZoJQdYAc8N7uBmKBA\nkC7Jl2XHSefbQU40ft6Fu3881XbWbYVtu3xa00Wz2YpOzEqGt+pchMXNbH9Uol5s\nO8hl0mkC3c9JajviAEKTq30=\n-----END PRIVATE KEY-----\n",
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