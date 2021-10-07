import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyCZp8gIfBNipNZml4WKyE17y9BcMYWKesI",
    authDomain: "appteste-abbfe.firebaseapp.com",
    databaseURL: "https://appteste-abbfe-default-rtdb.firebaseio.com",
    projectId: "appteste-abbfe",
    storageBucket: "appteste-abbfe.appspot.com",
    messagingSenderId: "824216782380",
    appId: "1:824216782380:web:c6afbc4e123bf7e77cb389",
    measurementId: "G-N79VLE3YEN"
  };

 if(!firebase.apps.length){
     firebase.initializeApp(firebaseConfig);
 }

 export default firebase;