
var nav = document.getElementById("navbar")
function addClass() {
    nav.classList.add("navbar-small")
}
function removeClass() {
    nav.classList.remove("navbar-small")
}
window.addEventListener("scroll", function () {
    var scrollPage = window.scrollY;
    if (scrollPage > 10) {
        addClass()
    }
    else {
        removeClass()
    }
})

  
document.getElementById("year").innerHTML = new Date().getFullYear();