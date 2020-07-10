// JavaScript source code
//CREATE FUNCTIONS
function create_keys() {
    cursors = this.input.keyboard.createCursorKeys();
    cursors.right.direction = "D";
    cursors.left.direction = "A";
    cursors.up.direction = "W";
    cursors.down.direction = "S";
    cursors.space.direction = "FIRE";
    cursors.shift.direction = "RELOAD";
}
function create_player() {
    var starter_weapon = new BaseWeapon(15, 15, WeaponType.SINGLE, 5, 0);
    var ammo_array = [20, 30, 50];
    player = new Player(this, 100, 100, starter_weapon, ammo_array);
    player.setCollideWorldBounds = true;

    create_player_anims.call(this);
}

function create_player_anims() {
    //TODO - edit frame start/stop positions once I have my sprite
    this.anims.create({
        key: "walk",
        frames: this.anims.generateFrameNumbers("player", { start: 5, end: 10 }),
        frameRate: 5,
        repeat: -1
    });
    this.anims.create({
        key: "idle",
        frames: this.anims.generateFrameNumbers("player", { frames: [1, 4] }),
        frameRate: 3,
        repeat: -1
    })
    this.anims.create({
        key: "jump",
        frames: [{ key: "player", frame: 3 }],
        frameRate: 15
    });
    this.anims.create({
        key: "fall",
        frames: [{ key: "player", frame: 2 }],
        frameRate: 15
    });
};

function create_bullets() {
    bullets = this.physics.add.group({
        defaultKey: "bullet",
        maxSize: -1,
        classType: BulletBaseClass
    })
}