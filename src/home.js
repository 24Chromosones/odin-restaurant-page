import yorhaIcon from './images/yorha-01.png'

const home = () => {
    const home = document.createElement('div')
    home.classList.add('home')

    const title = document.createElement('h1')
    const description = document.createElement('h2')
    const icon = new Image()
    icon.src = yorhaIcon
    icon.classList.add("yorha-img")
    title.textContent = "Caf[E] YorHa"
    description.textContent = "Brewed for the Glory of Mankind"
    home.appendChild(title)
    home.appendChild(description)
    home.appendChild(icon)
    return home
}


export default home