import './style.css';

const turtles = document.querySelectorAll('.character-card');

let currentTurtleIndex = 0;

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

window.addEventListener('gamepadconnected', (e) => {
  console.log(
    'Gamepad connected at index %d: %s. %d buttons, %d axes.',
    e.gamepad.index,
    e.gamepad.id,
    e.gamepad.buttons.length,
    e.gamepad.axes.length
  );
});

window.addEventListener('gamepaddisconnected', (e) => {
  console.log(
    'Gamepad disconnected at index %d: %s. %d buttons, %d axes.',
    e.gamepad.index,
    e.gamepad.id,
    e.gamepad.buttons.length,
    e.gamepad.axes.length
  );
});

const threshold = 1;
let isMoving = false;
const checkGamepads = () => {
  let gamepads = navigator.getGamepads();

  if (gamepads[0]?.buttons[9].pressed) {
    console.log('start button pressed');
  }

  if (gamepads[0]?.axes[0] === threshold) {
    if (!isMoving) {
      isMoving = true;
      setTimeout(() => {
        moveRight();
        isMoving = false;
      }, 100);
    }
  }

  if (gamepads[0]?.axes[0] === -threshold) {
    if (!isMoving) {
      isMoving = true;
      setTimeout(() => {
        moveLeft();
        isMoving = false;
      }, 100);
    }
  }

  if (gamepads.length > 0) {
    window.requestAnimationFrame(checkGamepads);
  }
};
checkGamepads();
