const layout = document.getElementById('grid-layout')
const menuIcon = document.getElementById('sidebar-menu-toggle')

menuIcon.onclick = e => {
  layout.classList.toggle('side-bar-closed')
}