var arrayOfDataObj = JSON.parse(localStorage.getItem("objectOfData")) || [];
var mainCont = document.getElementById('mainContainer');

document.getElementById("register").addEventListener("click", function() {
    var nameGet = document.getElementById('fullName');
    var emailGet = document.getElementById('email');
    var password = document.getElementById('password');

    var dataObject = {
        name: nameGet.value,
        email: emailGet.value,
        password: password.value
    };
    arrayOfDataObj.push(dataObject);

    console.log(dataObject);
    localStorage.setItem("objectOfData", JSON.stringify(arrayOfDataObj));
    console.log(arrayOfDataObj);

    // Clear input fields
    nameGet.value = "";
    emailGet.value = "";
    password.value = "";

    // Dynamically create login form
    mainCont.innerHTML = `
        <div class="content"> 
            <h2>Login Page</h2> 
            <div class="form"> 
                <div class="inputBox"> 
                    <input type="email" required id="email"> 
                    <i>Email</i> 
                </div> 
                <div class="inputBox"> 
                    <input type="password" required id="password"> 
                    <i>Password</i> 
                </div> 
                <div class="inputBox"> 
                    <input type="button" value="login" id="login"> 
                </div> 
            </div> 
        </div> 
    `;


    document.getElementById('login').addEventListener("click", function() {
        var emailGet = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        var loginSuccessful = false; 

        for (var i = 0; i < arrayOfDataObj.length; i++) {
            if (emailGet === arrayOfDataObj[i].email && password === arrayOfDataObj[i].password) {
                Swal.fire({
                    title: "Login Successfully!",
                    text: "Thank you!",
                    icon: "success"
                  });
                loginSuccessful = true;
                break;
            }
        }

        if (!loginSuccessful) {
            Swal.fire({
                title: "Wrong credentials",
                text: "Please enter the right values",
                icon: "error"
              });
        }
    });
});

console.log(arrayOfDataObj.length);
