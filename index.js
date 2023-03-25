const nav = document.querySelector('nav')
const menuIcon = document.querySelector('.menu-icon')
const backdrop = document.querySelector('.backdrop')



menuIcon.addEventListener('click', toggleNav)
backdrop.addEventListener('click', toggleNav)

function toggleNav() {
    document.querySelector('body').classList.toggle("no-scroll")
    
    backdrop.classList.toggle("active")
    if (nav.getAttribute("aria-expanded") === "false")
        {
            nav.setAttribute("aria-expanded", true)
            menuIcon.setAttribute("data-closed", true)
        }
    else {
        nav.setAttribute("aria-expanded", false)
        menuIcon.setAttribute("data-closed", false)

    }
}
