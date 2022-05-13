

var emailError = document.getElementById("emailError");
var passError = document.getElementById("passError");
//var submitError = document.getElementById("submitError");


 function check()
 {
    var email = document.getElementById("checkemail").value;
     //console.log(email)
    var password = document.getElementById("checkpass").value;
    //console.log(password)
    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');
    // if(email === storedEmail && password === storedPassword)
    // {
    //    window.open("index.html");
    //    return true;
    // }
    if(email != storedEmail)
    {
        emailError.innerHTML = "invalid Email Address";
        return false;

    }
    else if(password != storedPassword)
    {
        passError.innerHTML = "invalid Password";
        return false;

    }
    else 
    {
        window.open("index.html");
        return true;
    }


    
    

 }