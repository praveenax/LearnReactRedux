import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// import App from './App';
// import App from './App2';
// import App from './App3';
// import App from './App4';
import App from './App5';
// import App from './App6';

import * as firebase from 'firebase';

// sample database
// var config = {
//     apiKey: "AIzaSyApicOR5EJFdvqBIT3ETQE2DvDI6mL2AhM",
//     authDomain: "ordev-5e28a.firebaseapp.com",
//     databaseURL: "https://ordev-5e28a.firebaseio.com",
//     projectId: "ordev-5e28a",
//     storageBucket: "ordev-5e28a.appspot.com",
//     messagingSenderId: "561015592221"
// };

//SMS notifier
var config = {
    apiKey: "AIzaSyDca_0FSCfrtvezljhK0ydKD2bF08RhRkw",
    authDomain: "sms-notifier-8a1d7.firebaseapp.com",
    databaseURL: "https://sms-notifier-8a1d7.firebaseio.com",
    projectId: "sms-notifier-8a1d7",
    storageBucket: "sms-notifier-8a1d7.appspot.com",
    messagingSenderId: "753113351448"
};


firebase.initializeApp(config);




ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();