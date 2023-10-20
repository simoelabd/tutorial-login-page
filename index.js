function ChowPass(){
    var pass = document.getElementById("password")
    var hide1 = document.getElementById("hide1")
    var hide2 = document.getElementById("hide2")

    if(pass.type === 'password'){
        pass.type = "text";
        hide1.style.display = "block";
        hide2.style.display = "none";
    }
    else{
        pass.type = "password";
        hide1.style.display = "none";
        hide2.style.display = "block"; 
    }
}

function auth(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(email == "admin@gmail.com" && password == "admin1234"){
        window.location.assign("client.html");
        alert("Login Successfully ");
    }
    else{
        alert("Invalid Information ");
        return;
    }

}