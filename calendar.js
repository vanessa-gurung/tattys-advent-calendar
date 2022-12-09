const button = document.querySelector('.btn')
const container = document.querySelector('.container')
const days = 24

const openDoor = (path, event) => {
  event.target.parentNode.style.backgroundImage = `url(${path})`
  event.target.style.opacity = '0'
  event.target.style.backgroundColor = '#521751'
}

const create = () => {
  for (let i = 0; i < days; i++) {
    const door = document.createElement('div')
    const doorDay = document.createElement('div')

    door.classList.add('image')
    door.style.gridArea = 'door' + (i + 1)
    container.appendChild(door)

    doorDay.classList.add('text')
    doorDay.innerHTML = i + 1
    door.appendChild(doorDay)

    //update when gifts and type of files are assigned
    giftNumber = i + 1
    let giftPath = `./gifts/gift-${giftNumber}.png`

    doorDay.addEventListener('click', openDoor.bind(giftPath, null))
  }
}

button.addEventListener('click', create)
