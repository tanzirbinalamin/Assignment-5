const login = document.getElementById("login-btn");
const Password = document.getElementById("inputPass");
const Username = document.getElementById("inputUser");
const user = document.getElementById("userStat");
const pass = document.getElementById("passStat");

login.addEventListener("click", function() {

    if (Username.value === "admin" && Password.value === "admin123") {
        alert("Login success");
        window.location.assign("home.html");
    } 
     else if(Username.value != "admin") {
        user.innerHTML=`
          <p id="userStat" class="text-red-500 font-bold">*incorrect username</p>
        `
    }

    else if(Password.value != "admin123") {
        pass.innerHTML=`
          <p id="userStat" class="text-red-500 font-bold">*incorrect password</p>
        `

        
    }

});

 