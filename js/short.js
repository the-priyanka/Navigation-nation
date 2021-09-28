let menubars = document.getElementById("menu-bars")
let overlay = document.getElementById("overlay")
let nav1 = document.getElementById("nav-1")
let nav2 = document.getElementById("nav-2")
let nav3 = document.getElementById("nav-3")
let nav4 = document.getElementById("nav-4")
let nav5 = document.getElementById("nav-5")
let navItems = [nav1, nav2, nav3, nav4, nav5]

// control navigation animation 
function navAnimation(direction1, direction2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${ direction1 }-${ i + 1 }`, `slide-${ direction2 }-${ i + 1 }`)
  })
}

function toggleMenu() {
  menubars.classList.toggle("change")
  overlay.classList.toggle("overlay-active")
  if (overlay.classList.contains("overlay-active")) {
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right")
    navAnimation("out", "in")
  }
  else {
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left")
    navAnimation("in", "out")
  }
}

menubars.addEventListener("click", toggleMenu)
navItems.forEach((nav)=>{
  nav.addEventListener("click", toggleMenu)
})