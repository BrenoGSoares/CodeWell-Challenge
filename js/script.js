const productsMenu = document.querySelector('.item-1')
console.log(productsMenu)
const menu = document.querySelector('.menu-hidden')
console.log(menu)

productsMenu.addEventListener('click', () => {
  menu.classList.toggle('active')
})
