let header = document.createElement('h1')
header.innerText = "Online adoption form"
document.body.appendChild(header)


let firstName = document.createElement('input')
let lastName = document.createElement('input')
let emailAddr = document.createElement('input')
let desiredPet = document.createElement('input')
let comments = document.createElement('input')
let form = document.createElement('form')
const br = document.createElement('br');
firstName.placeholder = "First Name"
lastName.placeholder = "Last Name"
emailAddr.placeholder = "Your Email"
desiredPet.placeholder = "What pet are you looking for?"
comments.placeholder = "Any additional Comments"
document.body.appendChild(form)
form.appendChild(firstName)
form.appendChild(lastName)
form.appendChild(emailAddr)
emailAddr.appendChild(br)
form.appendChild(desiredPet)
form.appendChild(comments)


