
function sendMail() {

    let emailField = document.getElementById("userEmail").value
    let params = {
        name: document.getElementById("name").value,
        email: emailField.split("@")[0],
        email_provider: emailField.split("@")[1].split(".")[0],
        email_extension: emailField.split('.').pop(),
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
        phone: document.getElementById("phone").value,

    }

    console.log(params);

    let serviceID = "service_hlby8km"
    let tempID = "template_rc93dac"

    emailjs.send(serviceID, tempID, params).then(alert("Email Sent !"))
}