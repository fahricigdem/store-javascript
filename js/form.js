/**
 * VALIDATE & SEND FORM
 * 1. Validate on submit,
 * 2. Send the form with the library axios as an POST REQUEST to https://hsh.blnq.dev/javascript-basics/form-fetch.php
 * 
 */

document.getElementById("privacyTextP").addEventListener('click', () => {
    var checkbox = document.forms["support-form"]["privacy"]
    checkbox.checked = !checkbox.checked
})



document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('support-form').addEventListener('submit', function submitForm(event) {
        event.preventDefault();
        var bodyFormData = new FormData();
        validateForm(true) && sendData(bodyFormData)
    })
});

function validateForm(validate) {

    Object.values(document.forms["support-form"]).map(element => {
        element.value == "" ?
            (element.classList.add('border-red-500'), validate = false)
            : element.classList.remove('border-red-500')
    })

    let checkbox = document.forms["support-form"]["privacy"]
    checkbox.checked == false ?
        checkbox.nextElementSibling.classList.add('text-red-500')
        : checkbox.nextElementSibling.classList.remove('text-red-500');

    return validate

}

function sendData(bodyFormData) {
    axios({
        method: "post",
        url: "https://hsh.blnq.dev/javascript-basics/form-fetch.php",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
    })
        .then(function (response) {
            //handle success
            console.log(response);
            document.getElementById("submitButton").value = response.data
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
}



