
//ADD YOUR FIREBASE LINKS HERE
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
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console. log("room name - " + Room_names);
row = "<div class ='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;

      //End code
     });});}
getData();
function redirectToRoomName (name) {
      localStorage.setItem("room_name",name)
      window. location = "kwitter_page.html";
}
function logout() {
localStorage.removeItem("user_name") ;
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}
function addroom(){  room_name = document.getElementById("room_name").value;  firebase.database().ref("/").child(room_name).update({    purpose : "adding room name"  });    
localStorage.setItem("room_name", room_name);        
window.location = "kwitter_page.html";}