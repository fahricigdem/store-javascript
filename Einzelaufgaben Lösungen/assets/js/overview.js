// -----------------------------------------------------
// variables

const a = 1;    // can't be updated, block-scoped like let
var b = 2;      // access outside block-scopes possible
let c = 3;      // access only inside block-scope

{
  let c2 = 'let';         // no access outside scopes (like if, for, function and more)
  var c3 = 'var';         // access scoped inside functions only
  console.log(c2, c3);
}
// console.log(c2)    // error
// console.log(c3)    // no error

let d = 'string value';
let e = "string value";
let f = "string 'value'";     // or 'string "value"'

// array
let g = [a, b, c];

// object
let h = {
  key1: 0,
  key2: 'string value',
  // ...
};

let i; // = undefined:
let j = undefined;
let k = null;

let l = true;
let m = false;

// calculate numbers
let n = a + b;  // 3
// operators: +, -, *, /, %

// concat strings with string or numbers
let o = d + ': string'; // '1: string'
let p = a + d; // '1string value'




// -----------------------------------------------------
// if-statement

if (b > a) {
  // ...
}

if (b > a) {
  // ...
} else {
  // ...
}

if (b > a) {
  // ...
} else if (b > c) {
  // ...
} else {
  // ...
}




// -----------------------------------------------------
// comparison and logical operators

// && = and
// || = or
// !variable = not
// <, >, >=, <=, >==, <==, !=, !==, ==, ===

if ((b < a && b > c) || !k) {
  // ...
}

if (false || null || undefined || 0) {
  // ... like false
}



// -----------------------------------------------------
// switch-statement

let members = [
  {
    id: 0,
    role: 'user'
  },
  {
    id: 1,
    role: 'admin'
  },
  // ...
];

let role = members[0].role;

switch (role) {
  case 'user':
    // ...
    break;

  case 'admin':
    // ...
    break;

  default:
    // ...
    break;
}




// -----------------------------------------------------
// function

function abc(parameterA, parameterB) {
  let result = parameterA + parameterB;
  // ...

  // return is optional
  // return stops execution of the function
  return result;
}




// -----------------------------------------------------
// loops

for (let index = 0; index < members.length; index++) {
  let element = members[index];
  // ...
}


// works with arrays and objects
// loop over keys
for (const key in members) {
  console.log(key);
  // ...
}


// works with arrays
// loop over items
for (const member of members) {
  console.log(member);
  // ...
}


let condition = false;
while (condition) {
  // ...
}


do {
  // executes at least once
  // ...
} while (condition);




// -----------------------------------------------------
// arrays

let list = [];
list.push('item 1');          // add element to the end
list.unshift('item 2');       // add element to the start
list.indexOf('item 2');       // returns index if exists, else returns -1

let index = 0;
let amount = 1;
list.splice(index, amount);   // removes elements from array




// -----------------------------------------------------
// objects

let user = {
  name: 'Constantin',
  id: 0,
  role: 'admin',
  contacts: [
    {
      id: 1,
      role: 'user',
      name: 'Tim'
    },
    {
      id: 2,
      role: 'user',
      name: 'Christian'
    }
  ],
  logout: function () {
    // ...
    console.log('logout user');
  }
};

// access and change value
user.contacts[0].role = 'admin';

// add new key to object
user.isOnline = true;

// remove key and value from object
delete user.contacts;

// execute function inside object
user.logout();




// -----------------------------------------------------
// logging

console.log('test', a, b, c);
console.error('test', a, b, c);




// -----------------------------------------------------
// document

// The document object represents your web page.
// If you want to access any element in an HTML page,
// you always start with accessing the document object.

console.log('document object', document);




// -----------------------------------------------------
// get elements from DOM (Document Object Model / HTML structure)

let element;
let elements;

// getElement...
element = document.getElementById('element-id');

// getElements...
elements = document.getElementsByClassName('element-class');
elements = document.getElementsByTagName('h1');

// querySelector returns the first found element
// CSS selector notation
element = document.querySelector('#element-id');
element = document.querySelector('.element-class');
element = document.querySelector('body h1.headline');
console.log(element)


// querySelectorAll returns all found elements as list
elements = document.querySelectorAll('.element-class');




// -----------------------------------------------------
// window

// The window object is supported by all browsers. It represents the browser's window.
// All global JavaScript objects, functions, and variables automatically become members of the window object.
// Global variables are properties of the window object.
// Global functions are methods of the window object.
// Even the document object (of the HTML DOM) is a property of the window object

console.log('window object', window);

console.log('window property examples', [
  window.innerHeight,
  window.innerWidth,
  window.scrollY,
  window.scrollX
]);




// -----------------------------------------------------
// events

window.addEventListener('scroll', function (event) {
  // ...

  console.log(event);
});
/*
  Examples:
  - scroll
  - focus
  - blur
  ...
*/

document.addEventListener('DOMContentLoaded', function () {
  // executed when DOM is ready
  // ...
});

let button = document.getElementById('submit');
button.addEventListener('click', function (event) {
  event.preventDefault(); // prevents default behavior of the clicked element
  // ...
});

/*
  general
  - click

  keyboard
  - keydown
  - keyup

  only mouse
  - mousedown
  - mouseup
  - mousemove

  only touch
  - touchstart
  - touchend
  - touchmove
  - touchcancel

  pointer devices like mouse, pen/stylus, and touch contacts
  - pointerstart
  - pointerend
  - pointermove
  - pointercancel

  ...
*/




// -----------------------------------------------------
// .classList

button.classList.add('some-class');
button.classList.remove('some-class');
button.classList.toggle('some-class');

if (button.classList.contains('some-class')) {
  // ...
}




// -----------------------------------------------------
// parseInt() & parseFloat()

let x = '123';
let y = '123.45';

let xAsNumber = parseInt(x);
let yAsNumber = parseFloat(y);




// -----------------------------------------------------
// template strings

let template = `
  <form action="/" id="fetch-form" method="POST">     // breaks can be used
    <input id="input-${a + b}" type="text">           // use variables inside template strings
    <div id="output" data-number="23"></div>
    <button id="submit">Klick mich!</button>
  </form>`;
console.log(template);




// -----------------------------------------------------
// Working with form data (keywords)

/*
  - new FormData(HTMLFromElement)

  - new XMLHttpRequest()
    - .onreadystatechange()
    - .open(method, url)
    - .send()
    - .readyState

  - JSON.parse()
  - JSON.stringify()
*/




// -----------------------------------------------------
// More useful knowledge

/*
  - setTimeout(), setInterval()
  - callbacks
  - requestAnimationFrame
  - debouncing, throttling
  - class, prototype
  - modules
  - async
  - arrow function
*/