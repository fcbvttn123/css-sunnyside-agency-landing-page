let burgerMenuDOM = document.querySelector(".main-header .logo-and-link-container .burger-menu-icon")
let linksDOM = document.querySelector(".main-header .logo-and-link-container .links")

burgerMenuDOM.addEventListener("click", e => {
    linksDOM.classList.toggle("visible")
})