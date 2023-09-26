var showNav = document.getElementById('menu-opener')
var navshow = document.getElementById('display-nav')

showNav.addEventListener("click", () => {
    navshow.classList.toggle('navshow')
})