import { clampPosition, setPixel } from '../../../common/canvas.js'

const RIGHT = 0
const BOTTOM = 1
const LEFT = 2
const UP = 3

// solution pour un cycle de couleur :
let colorIndex = 0
const getColor = () => {
  const colors = ['green', 'green', 'green']
  const color = colors[colorIndex]
  colorIndex = colorIndex + 1
  if (colorIndex >= colors.length) {
    colorIndex = 0
  }
  return color
}

let x = 58
let y = 64
let orientation = RIGHT
let color = getColor()

const setPosition = (positionX, positionY) => {
  x = positionX
  y = positionY
}

const moveForward = () => {
  if (orientation === RIGHT) {
    x = x + 1
  } else if (orientation === BOTTOM) {
    y = y + 1
  } else if (orientation === LEFT) {
    x = x - 1
  } else if (orientation === UP) {
    y = y - 1
  }

  const p = clampPosition(x, y)
  x = p.x
  y = p.y
}

const move = () => {
  setPixel(x, y, color)
  color = getColor()

  const shouldChange = Math.random() < 0.1
  if (shouldChange) {
    orientation = Math.floor(Math.random() * 4)
  }

  moveForward()
}

export {
  x, y,
  setPosition,
  move,
}