// log text content from #headline
let headlineText = document.getElementById('headline').textContent;
console.log(headlineText);

// change the text from the headline to:
// „Cool, sie ist offen! :)“
document.getElementById('headline').innerText = 'Cool, sie ist offen! :)';

// set value of the input element #input to:
// „Hier steht Text“
const input = document.querySelector('#input')
input.value = 'Hier steht Text';

// set the value of the input element #input
// as the innerHtml of the div #output
const output = document.querySelector('#output');
output.innerHTML = '<span class="asdf">' + input.value + '</span>';

// add the class bg-black to the body
// if there it doesn't got it already
const body = document.body;

if (!body.classList.contains('bg-black')) {
  body.classList.add('bg-black');
}

// toggle the class border-red on the input
input.classList.toggle('border-red');

// multiply the data-number attribute by 3
// and update the value in the dom
let number = parseInt(output.dataset.number);
output.dataset.number = number * 3;