let animal
let cursors
let animal2

function create(){
    animal = this.physics.add.sprite(10,10, 'duck')
    animal2 = this.physics.add.sprite(100,100, 'duck')
    console.log(animal)
    animal.scale = 1
    animal2.setTint(0xff0000)
    animal.setCollideWorldBounds(true)
    animal2.setPushable(false)
    cursors = this.input.keyboard.createCursorKeys()
    console.log(cursors)




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

this.physics.add.collider(animal, animal2, collide)

}