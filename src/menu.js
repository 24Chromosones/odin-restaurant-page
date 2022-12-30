const menu = () => {
    const menu = document.createElement('div')
    menu.classList.add('menu')

    const title = document.createElement('h1')
    title.textContent = 'Android [M]enu'
    const description = document.createElement('h3')
    description.textContent = 'Required Chips: Human taste buds'

    const menuItems = document.createElement('ul')
    const inventory = ['Mackerel', 'Arowana', 'Twinfish', 'Killifish', 'Boar meat', 'Moose Meat',
        "Emil's Head", "Red Apple", "Grimoire Pages", ]

    const divider = document.createElement('hr')


    for (let item of inventory) {
        const food = document.createElement('li')
        food.textContent = item
        menuItems.appendChild(food)
    }

    menu.appendChild(title)
    menu.appendChild(description)
    menu.appendChild(divider)
    menu.appendChild(menuItems)
    return menu
}

export default menu