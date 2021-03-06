import { clampPosition, setPixel } from '../../../common/canvas.js'

const RIGHT = 0
const BOTTOM = 1
const LEFT = 2
const UP = 3

let x = 20
let y = 20
let orientation = RIGHT

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

const setPosition = (positionX, positionY) => {
  x = positionX
  y = positionY
}

const getRandomColor = () => {
  if (Math.random() < 0.5) {
    return '#b92e15'
  }
  return '#6c9a8b'
}

const move = () => {
  setPixel(x, y, getRandomColor())
  orientation = Math.floor(Math.random() * 4)
  moveForward()
}

export {
  x, y,
  setPosition,
  move,
}