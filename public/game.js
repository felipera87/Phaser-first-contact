const gameSettings = {
  playerSpeed: 200,
};

const config = {
  width: 256,
  height: 272,
  backgroundColor: 0x00000,
  scene: [Scene1, Scene2],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
};

window.onload = function () {
  let game = new Phaser.Game(config);
};
