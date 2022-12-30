import yorha from './images/glory.png'

const contact = () => {
    const contact = document.createElement('div')
    contact.classList.add('contact')

    const title = document.createElement('h2')
    title.textContent = "Please contact the bunker if you have any concerns."

    const image = new Image()
    image.src = yorha
    image.classList.add('glory')

    contact.appendChild(title)
    contact.appendChild(image)
    return contact
}

export default contact