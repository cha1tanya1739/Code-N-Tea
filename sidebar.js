function openNav() {
    document.getElementById("mySidenav").style.width = "100vw";
    document.getElementById("main").style.marginLeft = "100vw";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Attach the closeNav function to the click event of the close button
document.getElementById("closebtn").addEventListener("click", closeNav);

// Attach the closeNav function to each sidebar anchor
var sidebarAnchors = document.getElementsByClassName("sidebar-anchors");
for (var i = 0; i < sidebarAnchors.length; i++) {
    sidebarAnchors[i].addEventListener("click", closeNav);
}

