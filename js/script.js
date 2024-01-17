const productsMenu = document.querySelector('.item-1')
const closeMenu = document.querySelector('.close-icon')
const openMenu = document.querySelector('.menu-icon')
const menu = document.querySelector('.menu-hidden')
const menuMobile = document.querySelector('.menu-hidden-mobile')

productsMenu.addEventListener('click', () => {
  menu.classList.toggle('active')
})

openMenu.addEventListener('click', () => {
  menuMobile.classList.toggle('active')
})

closeMenu.addEventListener('click', () => {
  menuMobile.classList.toggle('active')
})
