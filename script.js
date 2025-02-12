// script.js
document.addEventListener("DOMContentLoaded", function() {
    let heading = document.querySelector("h1");
    heading.style.opacity = "0";
    setTimeout(() => {
        heading.style.transition = "opacity 2s";
        heading.style.opacity = "1";
    }, 500);
});
