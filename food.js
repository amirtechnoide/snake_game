import { getInputDirection } from './input.js'
import {onSnake, expandSnake} from './snake.js'
import { randomGridPosition} from './grid.js'
let food = getRandomPosition()
const EXPANSIO_RATE = 1
export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSIO_RATE)
        food = getRandomPosition()   }

}

export function draw(gameBoard) {
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart =food.y
        foodElement.style.gridColumnStart =food.x
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)
}
function getRandomPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}