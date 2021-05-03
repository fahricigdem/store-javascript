/**
 * CSS-ANIMATIONS
 * Toggle the class "hidden" from the element with the id "menu", when the user clicks on the element with the id "menu-btn"
 * 
 */

document.getElementById("menu-btn").addEventListener("click", function () {
    document.getElementById("menu").classList.toggle("hidden")

});