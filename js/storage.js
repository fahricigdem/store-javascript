/**
 * SAVE LIKED PRODUCTS
 * Select all of the like buttons, listen to the click element on every "like-btn" and the save the key of the "like-btn" to the localStorage.
 * Add the class "liked" if the button was clicked.
 * Check on reload if data is stored and add the liked class again
 * 
 * https://www.w3schools.com/jsref/prop_win_localstorage.asp
 * https://developer.mozilla.org/de/docs/Web/API/Window/localStorage
 * 
 * 
 */

const likeElements = document.querySelectorAll(".like-btn");

for (let i = 0; i < likeElements.length; i++) {
    likeElements[i].classList.remove('liked')
    likeElements[i].addEventListener("click", function () {
        if (likeElements[i].classList.contains('liked')) {
            likeElements[i].classList.remove('liked');
            localStorage.removeItem(i);
        }
        else {
            likeElements[i].classList.add('liked')
            localStorage.setItem(i, "liked")
        }
    });
}


//document.addEventListener('DOMContentLoaded', function () {
//window.addEventListener('load', () => {
window.onload = function () {
    Object.keys(localStorage).map((key) => {
        likeElements[parseInt(key)].classList.add('liked')
    })
};















