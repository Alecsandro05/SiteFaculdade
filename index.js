const navlinks = document.querySelector("#navlinks")
console.log(navlinks)

function showMenu() {
  navlinks.style.right = "0"
}
function closeMenu() {
  navlinks.style.right = "-200px"
}
