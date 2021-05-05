/**
 * VALIDATE & SEND FORM
 * 1. Listen to the submit of the form element with the id "support-form"
 * 2. Validate on submit, that:
 *  2.1 the checkbox with the id "input-privacy" is checked
 *  2.2 all other inputs are not empty. If they're empty, add the class "border-red-500" to every empty input
 * 3. Send the form with the library axios as an POST REQUEST to https://hsh.blnq.dev/javascript-basics/form-fetch.php
 * 
 * https://github.com/axios/axios
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

    document.forms["support-form"]["privacy"].checked == false ?
        (document.getElementById("privacyTextDiv").setAttribute("style", "box-shadow: 0 0 0 2px red;"), validate = false)
        : document.getElementById("privacyTextDiv").setAttribute("style", "box-shadow: 0;")

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
            document.getElementById("submitButton").value += ' (' + response.data + ')';
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
}



