//Main File

//config
var config = {
    type: Phaser.AUTO,
    width: 960,
    height: 544,
    pixelArt: true,
    backgroundColor: "#000000",
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { y: 0 }
        }
    },
    scene: [Level_1]
};

var game = new Phaser.Game(config);

class PowerUps {

}
