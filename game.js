console.log('hello frogger')
// const preload = require("./preload")


const config = {
    type: Phaser.AUTO,
    width: 700,
    height:400,
    backgroundColor: "#007b5f",
    physics:{
        default:"arcade",
        arcade:{
            debug:true
        }
    },
    scene: {
        preload:preload,
        create: create,
        update: update,
        stop: stop,
    }
}

const game = new Phaser.Game(config)

let animal
let cursors

function preload(){
    this.load.spritesheet('duck', "assets/duck.png", {
        frameWidth: 24, frameHeight: 24
    })
}

function create(){
    animal = this.physics.add.sprite(10,10, 'duck')
    console.log(animal)
    animal.scale = 1
    // animal.setBounce(0.1)
    animal.setCollideWorldBounds(true)
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

}

function update(){
    animal.setVelocity(0)

    if (cursors.left.isDown)
{
    animal.setVelocityX(-160);

    animal.anims.play('left', true);
}
else if (cursors.right.isDown)
{
    animal.setVelocityX(160);

    animal.anims.play('right', true);
}
else if (cursors.up.isDown)
{
    animal.setVelocityY(-160);

    animal.anims.play('up', true);

}
else if (cursors.down.isDown)
{
    animal.setVelocityY(160);

    animal.anims.play('down', true);

}
else
{
    animal.setVelocityX(0);

    animal.anims.play('turn');
}
}
