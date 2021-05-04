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
likeElements.forEach((item, index) => {
    item.classList.remove('liked');
    item.addEventListener('click', () =>
        item.classList.contains('liked') ?
            (item.classList.remove('liked'), localStorage.removeItem(index))
            : (item.classList.add('liked'), localStorage.setItem(index, "liked"))
    )
})

window.addEventListener('load', () =>
    Object.keys(localStorage).map((key) =>
        likeElements[parseInt(key)].classList.add('liked')
    )
);















