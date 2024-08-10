const AXES_THRESHOLD = 1;
const AXES_SENSITIVITY_DELAY = 100;

const START_BUTTON = 9;
const AXES_X = 0;
// const AXES_Y = 1;

export const gamepadInit = () => {
  window.addEventListener('gamepadconnected', (e) => {
    console.log('Gamepad connected at index %d: %s.', e.gamepad.index, e.gamepad.id);
  });

  window.addEventListener('gamepaddisconnected', (e) => {
    console.log('Gamepad disconnected at index %d: %s.', e.gamepad.index, e.gamepad.id);
  });
};

let isMoving = false;
export const checkGamepads = (handleRight: () => void, handleLeft: () => void, handleStart: () => void) => {
  const loop = () => {
    const gamepads = navigator.getGamepads();

    const startButton = gamepads[0]?.buttons[START_BUTTON];
    const arrowsXButton = gamepads[0]?.axes[AXES_X];

    if (startButton?.pressed) {
      handleStart();
    }

    if (arrowsXButton === AXES_THRESHOLD && !isMoving) {
      isMoving = true;
      setTimeout(() => {
        handleRight();
        isMoving = false;
      }, AXES_SENSITIVITY_DELAY);
    }

    if (arrowsXButton === -AXES_THRESHOLD && !isMoving) {
      isMoving = true;
      setTimeout(() => {
        handleLeft();
        isMoving = false;
      }, AXES_SENSITIVITY_DELAY);
    }

    if (gamepads.length > 0) {
      window.requestAnimationFrame(loop);
    }
  };

  loop();
};
