import * as firebase from 'firebase';
import 'firebase/database';

const firebaseConfig = {
   apiKey: "AIzaSyDc-XRoX0JHVsvGSb0gHMpbnMBTe2C5Cwo",
    authDomain: "tina-zita-portfolio.firebaseapp.com",
    databaseURL: "https://tina-zita-portfolio.firebaseio.com",
    projectId: "tina-zita-portfolio",
    storageBucket: "tina-zita-portfolio.appspot.com",
    messagingSenderId: "1025820016213",
    appId: "1:1025820016213:web:f7b923aa71e095ee905edc"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

export const Auth = firebase.auth;
