var firebaseConfig = {
    apiKey: "AIzaSyBO3FMXfsSL3m6tep569LdzwJdV0GsVC8Q",
    authDomain: "kwitter-f0dfc.firebaseapp.com",
    databaseURL: "https://kwitter-f0dfc-default-rtdb.firebaseio.com",
    projectId: "kwitter-f0dfc",
    storageBucket: "kwitter-f0dfc.appspot.com",
    messagingSenderId: "135668714361",
    appId: "1:135668714361:web:b224c58b29327923773da8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name= document.getElementById("user_name").Value;
localStorage.setItem("user_name", user_name);
window.location= "kwitter_room.html";

}