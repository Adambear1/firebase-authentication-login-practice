import * as firebase from "firebase";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCUc1KW9EGXE5H7WZOK_gxpVISGuYZRCpM",
  authDomain: "fir-authentication-cb026.firebaseapp.com",
  databaseURL: "https://fir-authentication-cb026.firebaseio.com",
  projectId: "fir-authentication-cb026",
  storageBucket: "fir-authentication-cb026.appspot.com",
  messagingSenderId: "803868229276",
  appId: "1:803868229276:web:d8d5fbd0b46452d79c3759",
};
// Initialize Firebase
const fireDB = firebase.initializeApp(firebaseConfig);

export default fireDB;
