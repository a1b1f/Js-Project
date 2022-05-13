var nameError = document.getElementById("name-Error");
var emailError = document.getElementById("email-Error");
var passError = document.getElementById("password-Error");
var subError = document.getElementById("butError");


function nameValidation() {
    var uname = document.getElementById("name");
    //console.log(uname.value)
    if (uname.value.length == 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }
    else if (!uname.value.match(/^[a-zA-Z]*\s{1}[a-zA-Z]*$/)) {
        nameError.innerHTML = "please write full Name";
        return false;
    }
    else {
        nameError.innerHTML = "valid"
        document.cookie = "username=" + uname.value;
        localStorage.setItem('username', uname.value);
        return true;
    }

}

function emailValidation() {
    var email = document.getElementById("email").value;
    //console.log(email)
    if (email == 0) {
        emailError.innerHTML = "Email is required"
        return false;

    }
    else if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
        emailError.innerHTML = "invalid Email Address"
        return false;
    }
    else {
        emailError.innerHTML = "valid"
        document.cookie = "email=" + email;
        localStorage.setItem('email', email);
        return true;


    }


}

function passValidation(){
    var pass = document.getElementById("pass");
    ///console.log(pass.value)
    if(pass.value == 0)
    {
        passError.innerHTML = "Password is Required";
        return false;
    }
    // else if(!pass.value.match(/^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/))
    // {
    //     passError.innerHTML = "invalid Email Address";
    //     return false;
    // }
    else if(pass.value.match(/^(?=.*\s)/))
    {
        passError.innerHTML = "Password must not contain Whitespaces.";
        return false;
    }
    else if(!pass.value.match(/^(?=.*[A-Z])/))
    {
        passError.innerHTML =  "Password must have at least one Uppercase Character.";
        return false;
    }
    else if(!pass.value.match(/^(?=.*[a-z])/))
    {
        passError.innerHTML = "Password must have at least one Lowercase Character.";
        return false;
    }
    else if(!pass.value.match(/^.{10,16}$/))
    {
        passError.innerHTML = "Password must be 10-16 Characters Long.";
        return false;

    }
    else
    { 
        passError.innerHTML = "valid";
        document.cookie = "password=" + pass.value;
        localStorage.setItem('password',  pass.value);
        return true;


    }
}

function validateForm()
{
    if(!nameValidation() || !emailValidation()  ||  !passValidation())
    {
        subError.style.display = "block";
        subError.innerHTML = "please fix the errors to submit";
        setTimeout(function(){
            subError.style.display = "none";
        },3000)
        return false;
    }
    else
    {
        window.open("login.html");
    }

}