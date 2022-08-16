let animal
let cursors
let tileset
let map
let firetruck
let bus
let bus2

function create(){
    // background map
    this.add.image(350,209, 'mappic')
    
    //player animal
    animal = this.physics.add.sprite(335,680, 'duck')
    animal.scale = 1
    animal.setCollideWorldBounds(true)
    cursors = this.input.keyboard.createCursorKeys()

    console.log(animal.body)
    //animal.onWorldBounds=0?

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

firetruck = this.physics.add.sprite(-150,200, 'firetruck')
firetruck.body.immovable = true

console.log(firetruck.body)

this.anims.create({
    key: 'move',
    frames: this.anims.generateFrameNames('firetruck', {start:0, end:1}),
    frameRate: 100,
    repeat: -1
})

firetruck.play({key: 'move',
delay: Math.random()*3000})
bus2 = this.physics.add.sprite(-150,150, 'bus')
bus = this.physics.add.sprite(-150,350, 'bus')
this.anims.create({
    key:'drive',
    frames: this.anims.generateFrameNames('bus', {start:0, end:1}),
    frameRate: 100,
    repeat:-1
})

bus.flipX=true

bus.play({key:'drive'})
bus2.play({key: 'drive', loop: true})
console.log(bus.play)

this.physics.add.collider(animal, firetruck, collide)





}
