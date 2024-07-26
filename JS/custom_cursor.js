function custom_cursor() {
    const cursor = document.getElementById("cursor");

    window.addEventListener("mousemove", function(e) {
        const posX = e.clientX;
        const posY = e.clientY;
        cursor.style.left = `${posX}px`;
        cursor.style.top = `${posY}px`;
        cursor.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 50, fill: "forwards" })
    })
}

custom_cursor();