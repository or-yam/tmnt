import { gamepadInit, checkGamepads } from './gamepad';
import './style.css';

const turtles = document.querySelectorAll('.character-card');

let currentTurtleIndex = 0;

gamepadInit();

const moveRight = () => {
  turtles.item(currentTurtleIndex).classList.remove('selected');
  currentTurtleIndex = currentTurtleIndex >= turtles.length - 1 ? 0 : currentTurtleIndex + 1;
  turtles.item(currentTurtleIndex).classList.add('selected');
  return;
};

const moveLeft = () => {
  turtles.item(currentTurtleIndex).classList.remove('selected');
  currentTurtleIndex = currentTurtleIndex <= 0 ? turtles.length - 1 : currentTurtleIndex - 1;
  turtles.item(currentTurtleIndex).classList.add('selected');
  return;
};

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    moveRight();
  }

  if (event.key === 'ArrowLeft') {
    moveLeft();
  }
});

checkGamepads(moveRight, moveLeft, console.log);
