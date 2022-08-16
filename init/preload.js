function preload(){
    this.load.spritesheet('duck', "/assets/duck.png", {
        frameWidth: 24, frameHeight: 24
    })
    this.load.image('mappic', '/assets/map.png')
    this.load.spritesheet('firetruck', '/assets/vehicles/firetruck-sprite.png', {frameWidth: 141, frameHeight: 53})
    this.load.spritesheet('bus', '/assets/vehicles/bus-sprite.png', {frameWidth: 196, frameHeight:57})
    this.load.spritesheet('bluec', '/assets/vehicles/bluecar-sprite.png', {frameWidth: 48, frameHeight:26})
    this.load.spritesheet('copc', '/assets/vehicles/copcar-sprite.png', {frameWidth: 48, frameHeight:24})
    this.load.spritesheet('greenc', '/assets/vehicles/greencar.png', {frameWidth: 32, frameHeight:24})
    this.load.spritesheet('redc', '/assets/vehicles/redcar.png', {frameWidth: 48, frameHeight:24})
}