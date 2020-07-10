// JavaScript source code
class LevelBaseClass extends Phaser.Scene {
    constructor(id) {
        super(id);
        this.id = id;
    }
    preload() {
        this.load.spritesheet(
            "player",
            "../assets/player.png",
            { frameWidth: 24, frameHeight: 24 }
        );
    }
    create() {
        create_keys.call(this);
        create_player.call(this);
    }
    update() {
        check_player_movement.call(this);
    }
}

class Level_1 extends LevelBaseClass {
    constructor() {
        super("Level_1")
    }
    preload() { super.preload(); }
    create() { super.create(); }
    update() { super.update();}
}