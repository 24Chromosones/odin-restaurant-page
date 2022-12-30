import home from './home.js'
import menu from './menu.js'
import contact from "./contact.js";
import './styles.css'

const container = document.querySelector('.content')

const homeButton = document.querySelector('.homeButton')
const menuButton = document.querySelector('.menuButton')
const contactButton = document.querySelector('.contactButton')


homeButton.addEventListener('click', () => {
    container.innerHTML = ''
    container.appendChild(home())
})

menuButton.addEventListener('click', () => {
    container.innerHTML = ''
    container.appendChild(menu())
})

contactButton.addEventListener('click', ()=> {
    container.innerHTML = ''
    container.appendChild(contact())
})

container.appendChild(home())