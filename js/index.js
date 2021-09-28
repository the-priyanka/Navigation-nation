let menubars = document.getElementById("menu-bars")
let overlay = document.getElementById("overlay")
let nav1 = document.getElementById("nav-1")
let nav2 = document.getElementById("nav-2")
let nav3 = document.getElementById("nav-3")
let nav4 = document.getElementById("nav-4")
let nav5 = document.getElementById("nav-5")

menubars.addEventListener("click", toggleMenu)
nav1.addEventListener("click", toggleMenu)
nav2.addEventListener("click", toggleMenu)
nav3.addEventListener("click", toggleMenu)
nav4.addEventListener("click", toggleMenu)
nav5.addEventListener("click", toggleMenu)


function toggleMenu() {
  menubars.classList.toggle("change")
  overlay.classList.toggle("overlay-active")
  if (overlay.classList.contains("overlay-active")) {
    overlay.classList.add("overlay-slide-right")
    overlay.classList.remove("overlay-slide-left")
    // animate in - nav-items 
    nav1.classList.add("slide-in-1")
    nav1.classList.remove("slide-out-1")
    nav2.classList.add("slide-in-2")
    nav2.classList.remove("slide-out-2")
    nav3.classList.add("slide-in-3")
    nav3.classList.remove("slide-out-3")
    nav4.classList.add("slide-in-4")
    nav4.classList.remove("slide-out-4")
    nav5.classList.add("slide-in-5")
    nav5.classList.remove("slide-out-5")
  }
  else {
    overlay.classList.add("overlay-slide-left")
    overlay.classList.remove("overlay-slide-right")

    // animate out - nav-items 
    nav1.classList.remove("slide-in-1")
    nav1.classList.add("slide-out-1")
    nav2.classList.remove("slide-in-2")
    nav2.classList.add("slide-out-2")
    nav3.classList.remove("slide-in-3")
    nav3.classList.add("slide-out-3")
    nav4.classList.remove("slide-in-4")
    nav4.classList.add("slide-out-4")
    nav5.classList.remove("slide-in-5")
    nav5.classList.add("slide-out-5")
  }
}