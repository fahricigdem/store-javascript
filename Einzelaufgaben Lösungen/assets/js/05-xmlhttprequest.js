// listen to the submit of the form and prevent default
// then save the form data and send it to https://hsh.blnq.dev/javascript-basics/form-fetch.php
// log the response
document.getElementById('fetch-form').addEventListener('submit', function submitForm(event) {
  event.preventDefault();

  const formData = new FormData(this);

  const request = new XMLHttpRequest();
  console.log("request ----->", request);

  request.open("POST", "https://hsh.blnq.dev/javascript-basics/form-fetch.php");
  request.onreadystatechange = function () {
    if (request.readyState == XMLHttpRequest.DONE) {
      console.log(request.responseText);
    }
  }
  request.send(formData);
});

// get data from public api https://openlibrary.org/books/OL7353617M.json
// and display the title, first sentence & isbn 13 in the #output element
const request = new XMLHttpRequest();
request.open("GET", "https://openlibrary.org/books/OL7353617M.json");
request.onreadystatechange = function () {
  if (request.readyState == XMLHttpRequest.DONE) {
    const book = JSON.parse(request.responseText);

    const output = document.querySelector('#output');
    output.innerHTML = `
      <h2>${book.title}</h2>
      <p>${book.first_sentence.value}</p>
      <p>${book.isbn_13}</p>
    `;
  }
}
request.send();