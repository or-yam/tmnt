import { audioInit } from './audio';
import { gamepadInit, checkGamepads } from './gamepad';
import './style.css';

const turtles = document.querySelectorAll('.character-card');

const colors = ['var(--leonardo-blue)', 'var(--michelangelo-orange)', 'var(--donatello-purple)', 'var(--raphael-red)'];

let currentTurtleIndex = 0;

gamepadInit();

const { playBackgroundMusic, playSelectSound } = audioInit();

const moveRight = () => {
  playBackgroundMusic();
  playSelectSound();
  turtles.item(currentTurtleIndex).classList.remove('selected');
  currentTurtleIndex = currentTurtleIndex >= turtles.length - 1 ? 0 : currentTurtleIndex + 1;
  turtles.item(currentTurtleIndex).classList.add('selected');
  document.body.style.setProperty('--selected-color', colors[currentTurtleIndex]);
  return;
};

const moveLeft = () => {
  playBackgroundMusic();
  playSelectSound();
  turtles.item(currentTurtleIndex).classList.remove('selected');
  currentTurtleIndex = currentTurtleIndex <= 0 ? turtles.length - 1 : currentTurtleIndex - 1;
  turtles.item(currentTurtleIndex).classList.add('selected');
  document.body.style.setProperty('--selected-color', colors[currentTurtleIndex]);
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
