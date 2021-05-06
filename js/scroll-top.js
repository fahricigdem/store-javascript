/**
 * SCROLL TO TOP BUTTON
 * 1. add the class "visible" to the element with the id "return-to-top", when the user scrolled at least the window height
 * 2. when the user clicks the button, scroll the page all the way up to the start
 * 
 
*/


window.onscroll = function () { myFunction() };

function myFunction() {
    if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
        document.getElementById("return-to-top").className = "visible";
    } else {
        document.getElementById("return-to-top").className = "";
    }
}


document.getElementById("return-to-top").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

})
