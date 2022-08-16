function preload(){
    this.load.spritesheet('duck', "/assets/duck.png", {
        frameWidth: 24, frameHeight: 24
    })
    this.load.image('outdoors', '/assets/outdoors.png')
    this.load.image('vehicles', '/assets/vehicles.png')
    this.load.image('mappic', '/assets/map.png')
    this.load.spritesheet('firetruck', '/assets/firetruck-sprite.png', {frameWidth: 141, frameHeight: 56})
    this.load.spritesheet('bus', '/assets/bus-sprite.png', {frameWidth: 196, frameHeight:57})
}