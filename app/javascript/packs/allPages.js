const layout = document.getElementById('grid-layout')
const menuIcon = document.getElementById('sidebar-menu-toggle')

menuIcon.onclick = e => {
  layout.classList.toggle('side-bar-closed')
}

selects = document.getElementsByTagName('select')
for(let select of selects) {
  select.parentElement.classList.add('select')
}