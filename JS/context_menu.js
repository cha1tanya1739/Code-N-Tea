window.addEventListener("contextmenu", function(e) {
    e.preventDefault();

    var contextMenu = document.getElementById("context-menu");
    contextMenu.classList.add("active");

    // Calculate the position of the context menu
    var menuHeight = contextMenu.offsetHeight;
    var menuWidth = contextMenu.offsetWidth;

    var top = e.clientY + window.scrollY;
    var left = e.clientX + window.scrollX;

    // Adjust the position if the menu goes off the screen
    if (top + menuHeight > window.innerHeight + window.scrollY) {
        top = window.innerHeight + window.scrollY - menuHeight;
    }

    if (left + menuWidth > window.innerWidth + window.scrollX) {
        left = window.innerWidth + window.scrollX - menuWidth;
    }

    // Ensure the menu doesn't go off the top or left edge
    if (top < window.scrollY) {
        top = window.scrollY;
    }

    if (left < window.scrollX) {
        left = window.scrollX;
    }

    contextMenu.style.top = top + "px";
    contextMenu.style.left = left + "px";
});

window.addEventListener("click", function() {
    var contextMenu = document.getElementById("context-menu");
    contextMenu.classList.remove("active");
});

window.addEventListener("scroll", function() {
    var contextMenu = document.getElementById("context-menu");
    contextMenu.classList.remove("active");
});