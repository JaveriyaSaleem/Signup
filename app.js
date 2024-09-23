
var arrayOfDataObj=[]
document.getElementById("Register").addEventListener("click",function(){
 var nameGet = document.getElementById('form3Example1cg');
 var emailGet = document.getElementById('form3Example3cg');
 var password = document.getElementById('form3Example4cg');
    // console.log(nameGet.value,emailGet.value,password.value)

var dataObject = {
    name : nameGet.value,
    email: emailGet.value,
    password: password.value
}
arrayOfDataObj.push(dataObject)

console.log(dataObject)
localStorage.setItem("objectKaSaman",JSON.stringify(arrayOfDataObj))
console.log(arrayOfDataObj)
nameGet = "";
emailGet = "";
password = "";
})
