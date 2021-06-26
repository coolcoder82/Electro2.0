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
    room_name=localStorage.getItem("room_name")
console.log(room_name)
    function send(){
          msg=document.getElementById("msg").value;
          console.log(msg);
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
         document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name1_width_tag="<h4>"+name1+"<img class='user_tick' src='tick.png'></h4>";
message_width_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning'id="+firebase_message_id+"value="+like+"onclick='updatelike(this.id)'>";
span_width_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
row=name1_width_tag +message_width_tag +like_button +span_width_tag;
document.getElementById("output").innerHTML=row;
//End code
      } });  }); }
getData();
function updatelike(message_id){
      console.log("clickonlikebutton-"+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({ like : updated_likes});
}
function LogOut(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}