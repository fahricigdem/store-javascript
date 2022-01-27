// log the value of the input on every input
const input = document.getElementById('input');

input.addEventListener('input', function inputChange() {
  console.log(input.value);
});

// prevent default on button #submit click
// and change text of #output to „Der Button wurde geklickt!“
document.querySelector('#submit').addEventListener('click', function submit(event) {
  event.preventDefault();

  document.getElementById('output').textContent = 'Der Button wurde geklickt!';
});

// log the message „500px erreicht“, when the user scrolls more than 500px
window.addEventListener('scroll', function windowScroll(event) {
  if (window.scrollY >= 500) {
    console.log('500px erreicht');
  }
});