

/*
let emailField = document.getElementById("userEmail").value
let params = {
    name: document.getElementById("name").value,
    email: emailField.split("@")[0],
    emailProvider: emailField.split("@")[1],
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
    phone: document.getElementById("phone").value,
}

console.log(params);

let serviceID = "service_hlby8km"
let tempID = "template_rc93dac"

emailjs.send(serviceID, tempID, params).then(alert("Email Sent !"))

*/


document.getElementById('contact')
    .addEventListener('submit', function (event) {
        event.preventDefault();
        const serviceID = 'default_service';
        const templateID = 'template_rc93dac';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                alert('Sent!');
            }, (err) => {
                alert(JSON.stringify(err));
            });
    });
