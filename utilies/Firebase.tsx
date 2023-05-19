    // Import the functions you need from the SDKs you need
    import {initializeApp} from 'firebase/app';
    import {getDatabase} from 'firebase/database';

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
    apiKey: 'AIzaSyA7dVIOHGlJTIc0tTZHtV4zcn5TKFKW3xc',
    authDomain: 'kc225-7b6be.firebaseapp.com',
    projectId: 'kc225-7b6be',
    storageBucket: 'kc225-7b6be.appspot.com',
    messagingSenderId: '578798349950',
    appId: '1:578798349950:web:a6b450ae8f55e45f63b22f',
    measurementId: 'G-563DMNBQ72',
    };

    // Initialize Firebase
    export const Firebase = initializeApp(firebaseConfig);
    export const database = getDatabase(Firebase);
