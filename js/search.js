/**
 * CSS-ANIMATIONS
 * 1. Toggle the class "hidden" from the searchbar element, when the user clicks search button
 * 2. Clear the input by clicking the "x" button
 * 
 */

document.querySelector(".search-btn").addEventListener("click", function () {
    const element = document.getElementById('searchbar')
    element.classList.toggle('hidden')
})

document.getElementById('searchBarX').addEventListener("click", function () {
    const element = document.getElementsByName('serch')[0]
    element.value = ""
})
