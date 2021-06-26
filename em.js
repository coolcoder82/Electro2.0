function addUser(){
    username= document.getElementById("tiusername").value;
    localStorage.setItem("username", username)
    window.location="highrow.html"
}