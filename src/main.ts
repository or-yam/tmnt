import { audioInit } from './audio';
import { gamepadInit, checkGamepads } from './gamepad';
import './style.css';

const COLORS = [
  'var(--leonardo-blue)',
  'var(--michelangelo-orange)',
  'var(--donatello-purple)',
  'var(--raphael-red)'
] as const;
const NAMES = ['Leonardo', 'Michelangelo', 'Donatello', 'Raphael'] as const;

const appContainer = document.getElementById('app') as HTMLDivElement;
const turtles = document.querySelectorAll('.character-card');

let currentTurtleIndex = 0;

gamepadInit();

const { playBackgroundMusic, playSelectSound, playCowabunga, stopBackgroundMusic } = audioInit();

const moveRight = () => {
  playBackgroundMusic();
  playSelectSound();
  turtles.item(currentTurtleIndex).classList.remove('selected');
  currentTurtleIndex = currentTurtleIndex >= turtles.length - 1 ? 0 : currentTurtleIndex + 1;
  turtles.item(currentTurtleIndex).classList.add('selected');
  document.body.style.setProperty('--selected-color', COLORS[currentTurtleIndex]);
  return;
};

const moveLeft = () => {
  playBackgroundMusic();
  playSelectSound();
  turtles.item(currentTurtleIndex).classList.remove('selected');
  currentTurtleIndex = currentTurtleIndex <= 0 ? turtles.length - 1 : currentTurtleIndex - 1;
  turtles.item(currentTurtleIndex).classList.add('selected');
  document.body.style.setProperty('--selected-color', COLORS[currentTurtleIndex]);
  return;
};

const selectTurtle = () => {
  stopBackgroundMusic();
  playCowabunga();

  appContainer.innerHTML = '';
  const img = document.createElement('img');
  img.src = `${NAMES[currentTurtleIndex]}/tile003.png`;
  img.className = 'selected-turtle';
  appContainer.append(img);
};

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    moveRight();
  }

  if (event.key === 'ArrowLeft') {
    moveLeft();
  }

  if (event.key === 'Enter' || event.key === ' ') {
    selectTurtle();
  }

  if (event.key === 'Escape') {
    window.location.reload();
  }
});

checkGamepads(moveRight, moveLeft, selectTurtle);
