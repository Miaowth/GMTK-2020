// JavaScript source code
class Player {
    constructor(game, x, y, weapon, ammo_array, power_ups) {
        this.game = game;
        this.sprite = game.physics.add.sprite(x, y, "player", 4);
        this.weapon = weapon;
        this.ammo = ammo_array;
    }
};

function check_player_movement() {
    var moving = false;
    if (cursors.right.isDown) {
        move_player(cursors.right.direction);
        moving = true;
    }
    if (cursors.left.isDown) {
        move_player(cursors.left.direction);
        moving = true;
    }
    if (cursors.down.isDown) {
        move_player(cursors.down.direction);
        moving = true;
    }
    if (cursors.up.isDown) {
        move_player(cursors.up.direction);
        moving = true;
    }
    if (cursors.shift.isDown) {
        move_player(cursors.shift.direction);
        moving = true;
    }
    if (cursors.space.isDown) {
        move_player(cursors.space.direction);
        moving = true;
    }

    if (moving === false) {
        //player is idle
        player.sprite.setVelocityX(0);
        player.sprite.setVelocityY(0);
        player.sprite.anims.play("idle", true);
    }
}
function move_player(direction) {
    console.log(direction);

    switch (direction) {
        case "W":
            player.sprite.setVelocityY(-100);
            player.sprite.setVelocityX(0);
            player.sprite.anims.play("walk", true);
            player.sprite.flipX = false;
            player.sprite.setSize(14, 24);

            break;
        case "A":
            player.sprite.setVelocityX(-100);
            player.sprite.setVelocityY(0);
            player.sprite.anims.play("walk", true);
            player.sprite.flipX = true;

            player.sprite.setSize(14, 24);
            player.sprite.setOffset(3, 0);

            break;
        case "S":
            player.sprite.setVelocityY(100);
            player.sprite.setVelocityX(0);
            player.sprite.anims.play("walk", true);
            player.sprite.flipX = false;
            player.sprite.setSize(14, 24);

            break;
        case "D":
            player.sprite.setVelocityX(100);
            player.sprite.setVelocityY(0);
            player.sprite.anims.play("walk", true);
            player.sprite.flipX = false;
            player.sprite.setSize(14, 24);
            player.sprite.setOffset(7, 0);

            break;
        case "FIRE":
            //FIRE
            break;
        case "RELOAD":
            //RELOAD
            break;
        default:
            //do nothing
            console.log("error in spelling of direction switch case for movement")
    }

}