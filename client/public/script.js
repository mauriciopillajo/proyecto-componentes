const formElement = document.getElementById("login");

formElement.addEventListener("submit",(event) =>{
event.preventDefault();
let email = document.getElementById("email").value;
let username = document.getElementById("username").value;

let usuario = {email: email, username : username};
let usuarioJson = JSON.stringify(usuario);

fetch('http://localhost:3001/insertupdate', {
    method: 'POST',
    body : usuarioJson,
    headers:{
        'Content-Type': 'application/json'
    }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));

})





