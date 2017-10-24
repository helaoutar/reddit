import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyCfG3TN8x1G8CuW1vlh6N-Wxlm9xeP1u0k",
    authDomain: "helaoutar.firebaseapp.com",
    databaseURL: "https://helaoutar.firebaseio.com",
    projectId: "helaoutar",
    storageBucket: "helaoutar.appspot.com",
    messagingSenderId: "544273212427"
};

export default firebase.initializeApp(config);