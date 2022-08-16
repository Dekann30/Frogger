let animal
let cursors
let tileset
let map
let firetruck
let bus
let copc
let bluec
let redc
let greenc
let vehicles

function create(){
    // background map
    this.add.image(350,209, 'mappic')
    
    //player animal
    animal = this.physics.add.sprite(335,680, 'duck')
    animal.scale = 1
    animal.setCollideWorldBounds(true)
    cursors = this.input.keyboard.createCursorKeys()
    //animal.onWorldBounds=0?

    //animal spritesheet movements
    this.anims.create({
        key:"left",
        frames: this.anims.generateFrameNames('duck', { start: 12, end: 17 }),
    frameRate: 10,
    repeat: -1
    })

    this.anims.create({
    key: 'turn',
    frames: this.anims.generateFrameNames('duck', {
        start: 0,
    }),
    frameRate: 20
});

this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNames('duck', { start: 18, end: 23 }),
    frameRate: 10,
    repeat: -1
});

this.anims.create({
    key: 'up',
    frames: this.anims.generateFrameNames('duck', { start: 6, end: 11 }),
    frameRate: 10,
    repeat: -1
});

this.anims.create({
    key: 'down',
    frames: this.anims.generateFrameNames('duck', { start: 1, end: 5 }),
    frameRate: 10,
    repeat: -1
});

//Render Vehicles 
firetruck = this.physics.add.sprite(-150,200, 'firetruck')
firetruck.body.immovable = true

bus = this.physics.add.sprite(-150,350, 'bus')
bus.body.immovable=true

bluec = this.physics.add.sprite(-250,200, 'bluec')
bluec.body.immovable = true

copc = this.physics.add.sprite(-150,200, 'copc')
copc.body.immovable = true

redc = this.physics.add.sprite(-150,200, 'redc')
redc.body.immovable = true

greenc = this.physics.add.sprite(-150,200, 'greenc')
greenc.body.immovable = true

vehicles = [bus, firetruck, redc, greenc, bluec, copc]



bus.flipX=true





this.physics.add.collider(animal, vehicles, collide)
this.physics.add.overlap(vehicles, collide)





}
