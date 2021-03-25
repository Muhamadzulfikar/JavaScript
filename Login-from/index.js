var Username = document.getElementById("Username");
var Password = document.getElementById("Password");
var a = Username.value;
var b = Password.value;
function login() {
    if (a == "admin" && b == "admin") {
        location.href="../Funcation/index.html";   
    }
}