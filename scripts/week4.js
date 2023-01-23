const button = document.querySelector(".btn");

function show() {
    button.classList.add('newstyle'); // add class to button
}

button.addEventListener("click", show);