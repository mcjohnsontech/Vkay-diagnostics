const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const form = document.getElementById("form");
const email = document.getElementById("email");
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = [ ]
    if (firstName.value === '' || firstName.value == null){
        messages.push('First Name')
    }

    if (lastName.value === '' || lastName.value == null) {
        messages.push('Last Name')
    }

    if (email.value === '' || email.value == null) {
        messages.push('Email')
    }
    // if (date.value.isNaN) {
    //     messages.push("date's done")
    // }
        // messages.push('are not Given')
    if (messages.length > 0) {
        e.preventDefault()
        errorElement .innerText = messages+ ' are not given';
    }
    
    
})