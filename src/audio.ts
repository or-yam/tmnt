export const audioInit = () => {
  const selectSound = new Audio('sounds/select.mp3');
  selectSound.volume = 0.2;
  const backgroundMusic = new Audio('sounds/background.mp3');
  backgroundMusic.loop = true;

  const playBackgroundMusic = () => {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
    }
  };

  const playSelectSound = () => {
    selectSound.pause();
    selectSound.currentTime = 0;
    selectSound.play();
  };

  return {
    playBackgroundMusic,
    playSelectSound
  };
};
