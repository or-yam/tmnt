export const audioInit = () => {
  const selectSound = new Audio('sounds/select.mp3');
  selectSound.volume = 0.2;
  const backgroundMusic = new Audio('sounds/background.mp3');
  backgroundMusic.loop = true;
  const cowabunga = new Audio('sounds/cowabunga.wav');

  const playBackgroundMusic = () => {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
    }
  };

  const stopBackgroundMusic = () => {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
  };

  const playSelectSound = () => {
    selectSound.pause();
    selectSound.currentTime = 0;
    selectSound.play();
  };

  const playCowabunga = () => {
    cowabunga.pause();
    cowabunga.currentTime = 0;
    cowabunga.play();
  };

  return {
    playBackgroundMusic,
    playSelectSound,
    playCowabunga,
    stopBackgroundMusic
  };
};
