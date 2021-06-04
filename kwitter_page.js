//YOUR FIREBASE LINKS
 var firebaseConfig = {
    apiKey: "AIzaSyCMG_MH-v4ft7vJwG6vMdlNhhwDfFtSGPo",
    authDomain: "stupid-project-cfd40.firebaseapp.com",
    databaseURL: "https://stupid-project-cfd40-default-rtdb.firebaseio.com",
    projectId: "stupid-project-cfd40",
    storageBucket: "stupid-project-cfd40.appspot.com",
    messagingSenderId: "973295994901",
    appId: "1:973295994901:web:dd375ab53b2e6807aea61c",
    measurementId: "G-H8N8G0D4EE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout() {
localStorage.removeItem("user_name") ;
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}
function send() {
     msg=document.getElementById("msg").value
      firebase.database().ref(room_name).push({    
            name:user_name,
            message:msg,
            like:0
             }); 
             document.getElementById("msg").value ="";  
}