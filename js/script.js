const productsMenu = document.querySelector('.item-1')
const guideMenu = document.querySelector('.close-icon')
const closeMenu = document.querySelector('#close-icon')
const openMenu = document.querySelector('.menu-icon')
const menu = document.querySelector('.menu-hidden')
const menuMobile = document.querySelector('.menu-hidden-mobile')
const menuMobileOptions = document.querySelectorAll('.menu-list-mobile')
const allOptions = document.querySelectorAll('.menu-list-hidden-mobile')
const subtitle = document.querySelectorAll('.subtitle')
const title = document.querySelector('.title')

productsMenu.addEventListener('click', () => {
  menu.classList.toggle('disable')
})

openMenu.addEventListener('click', () => {
  title.innerText = ''
  menuMobile.classList.remove('disable')
  menuMobileOptions.forEach((option) => {
    option.classList.remove('disable')
  })
})

closeMenu.addEventListener('click', () => {
  title.innerText = ''
  menuMobile.classList.add('disable')
  menuMobileOptions.forEach((option) => {
    option.classList.add('disable')
  })
  subtitle.forEach((option) => {
    option.classList.remove('disable-display')
  })
  allOptions.forEach((element) => {
    element.classList.add('disable-display')
  })
})

subtitle.forEach((option) => {
  option.addEventListener('click', () => {
    option.classList.remove('disable-display')
    menuMobileOptions.forEach((element) => {
      if (element !== option.parentNode) {
        element.classList.toggle('disable')
      } else {
        const result = element.querySelector('.menu-list-hidden-mobile')
        title.innerText = option.innerText.toUpperCase()
        option.classList.add('disable-display')
        if (result) {
          result.classList.remove('disable-display')
        }
      }
    })
  })
})
