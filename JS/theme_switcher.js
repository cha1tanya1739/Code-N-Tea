const theme_img = document.getElementById('theme_img');
const nav_img = document.getElementById('nav-main-img')
document.addEventListener('DOMContentLoaded', (event) => {
    const themeButton = document.getElementById('theme-button');
    themeButton.addEventListener('click', switchTheme);

    function switchTheme() {
        const body = document.body;
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            theme_img.style.filter = `invert(0)`;
            nav_img.style.filter = `invert(0)`
        } else {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            theme_img.style.filter = `invert(1)`;
            nav_img.style.filter = `invert(1)`
        }
    }
});