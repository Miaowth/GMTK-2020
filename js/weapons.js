// JavaScript source code
const WeaponType = {
    SHOTGUN: "0",
    SINGLE: "1",
    AUTOMATIC: "2"
}
//MAYBE ADD A RANGE PROPERTY LATER
class BaseWeapon {
    constructor(clip_size, current_bullets, weapon_type, power, rarity){
        this.clip_size = clip_size;
        this.current_bullets = current_bullets;
        this.weapon_type = weapon_type;
        this.bullet_power = power;
        this.rarity = rarity;
    }
}