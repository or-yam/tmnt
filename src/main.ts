import './style.css';

const turtles = document.querySelectorAll('.character-card');

let currentTurtleIndex = 0;

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    turtles.item(currentTurtleIndex).classList.remove('selected');
    currentTurtleIndex = currentTurtleIndex >= turtles.length - 1 ? 0 : currentTurtleIndex + 1;
    turtles.item(currentTurtleIndex).classList.add('selected');
    return;
  }

  if (event.key === 'ArrowLeft') {
    turtles.item(currentTurtleIndex).classList.remove('selected');
    currentTurtleIndex = currentTurtleIndex <= 0 ? turtles.length - 1 : currentTurtleIndex - 1;
    turtles.item(currentTurtleIndex).classList.add('selected');
    return;
  }
});
