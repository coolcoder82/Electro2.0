  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAJX-0c7WCUM50eN5SH6YO7bY1LIUqJ0fk",
    authDomain: "em20-4f1fe.firebaseapp.com",
    databaseURL: "https://em20-4f1fe-default-rtdb.firebaseio.com",
    projectId: "em20-4f1fe",
    storageBucket: "em20-4f1fe.appspot.com",
    messagingSenderId: "368134646493",
    appId: "1:368134646493:web:cfbb8fb4554adf5d364934"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("username")

  document.getElementById("h3_username").innerHTML="Welcome "+user_name+"!";
  function addRoom(){
    room_name= document.getElementById("tiroomname").value;
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
      console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row
   });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function LogOut() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location ="kwitter_page.html";
  }