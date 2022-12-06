const button = document.querySelector('.btn')
const container = document.querySelector('.container')
const days = 24
const create = () => {
  for (let i = 0; i < days; i++) {
    const door = document.createElement('div')
    const doorDay = document.createElement('div')

    door.classList.add('image')
    door.style.gridArea = 'door' + (i + 1)
    container.appendChild(door)
  }
}

button.addEventListener('click', create)
