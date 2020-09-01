window.onload = () => {
    let header = document.createElement('h1')
    header.innerText = "Online adoption form"
    document.body.appendChild(header)
    
    
    let firstName = document.createElement('input')
    let lastName = document.createElement('input')
    let emailAddr = document.createElement('input')
    let desiredPet = document.createElement('input')
    let comments = document.createElement('input')
    let form = document.createElement('form')
    let submitBtn = document.createElement('button');
    const br = document.createElement('br');
    firstName.placeholder = "First Name"
    lastName.placeholder = "Last Name"
    emailAddr.placeholder = "Your Email"
    desiredPet.placeholder = "What pet are you looking for?"
    comments.placeholder = "Any additional Comments"
    submitBtn.innerText = "Submit Form"
    firstName.name = "firstName"
    lastName.name = "lastName",
    emailAddr.name = "email",
    desiredPet.name = "animal",
    comments.name = "comments"
    document.body.appendChild(form)
    form.appendChild(firstName)
    form.appendChild(lastName)
    form.appendChild(emailAddr)
    emailAddr.appendChild(br)
    form.appendChild(desiredPet)
    form.appendChild(comments)
    form.id = "form"
    
    submitBtn.addEventListener("mouseup", () => {
        const formElems = document.getElementById('form');
        const requestBody = {};
        for (const input of formElems) {
            requestBody[input.name] = input.value
        }
    })
    



}



