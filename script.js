// let arrOfUserObject = [];
let arrOfUserObject = JSON.parse(localStorage.getItem("user")) || [];
let count = 0;
function storeData() {
    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;
    var userAge = document.getElementById("age").value;
    var userName = document.getElementById("username").value;
    // check if email is already registered
    for (let i = 0; i < arrOfUserObject.length; i++) {
        if (userEmail === arrOfUserObject[i].email) {
            alert("This email is already registered. Please use a different email.");
            return;
        }
    }
    count++;
    
    arrOfUserObject.push({email: userEmail, password: userPassword, age: userAge, username: userName, Id: count});
    localStorage.setItem("user", JSON.stringify(arrOfUserObject));

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("age").value = "";
    document.getElementById("username").value = "";
    
    alert("Signup Successful");
    window.location.href = "login.html";
}
;
function checkData() {
    var storedData = JSON.parse(localStorage.getItem("user"))
    console.log(storedData);
    console.log(storedData[0].email);
    console.log(storedData[0].password);
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(email, password);
    for(let i = 0; i < storedData.length; i++){
        if(email == storedData[i].email && password == storedData[i].password){
            alert("login successfull");
            return;
        }
    }
    alert("Incorrect email or password");
}
// window.onbeforeunload = () => {
//     localStorage.setItem('user', JSON.stringify(arrOfUserObject));
// };
// var data = {
    //     "email": email,
    //     "password": password,
    //     "age": age,
    //     "username": username,
    //     "Id": count
    // };
    // arrOfUserObject.push(data);
    // localStorage.setItem(email, JSON.stringify(data));
    // console.log(data);
    // window.location.href = "login.html";