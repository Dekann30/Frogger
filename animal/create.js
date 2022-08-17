let animal
let cursors
let tileset
let map
let vehicles
let won
let text
let lifecount

function create(){
    // background map
    this.add.image(350,209, 'mappic')
    
    //player animal
    animal = this.physics.add.sprite(335,790, 'duck')
    animal.scale = .9
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
//From Top -1
rc5 = this.physics.add.sprite(350,126, 'redc')
gc4 = this.physics.add.sprite(150,126, 'greenc')
bc4 = this.physics.add.sprite(550,126, 'bluec')
cc4 = this.physics.add.sprite(80,126, 'copc')
cc5 = this.physics.add.sprite(10,126, 'copc')
cc6 = this.physics.add.sprite(-150,126, 'copc')

//-2
firetruck = this.physics.add.sprite(595,206, 'bus')
ft2 = this.physics.add.sprite(595,179, 'bus')
bluec = this.physics.add.sprite(250,206, 'bluec')
bc3 = this.physics.add.sprite(350,179, 'bluec')
copc = this.physics.add.sprite(50,206, 'copc')
redc = this.physics.add.sprite(450,206, 'redc')
rc3 = this.physics.add.sprite(100,176, 'redc')
rc4 = this.physics.add.sprite(-150,176, 'redc')
greenc = this.physics.add.sprite(150,206, 'greenc')

//-3
cc3 = this.physics.add.sprite(750,285, 'copc')
rc2 = this.physics.add.sprite(150,285, 'redc')
gc2 = this.physics.add.sprite(550,285, 'greenc')
gc3 = this.physics.add.sprite(350,285, 'greenc')

//-4
bus = this.physics.add.sprite(150,365, 'bus')
bus2 = this.physics.add.sprite(550,365, 'bus')
bc2 = this.physics.add.sprite(650,335, 'bluec')
cc2 = this.physics.add.sprite(450,335, 'copc')




vehicles = [bus, bus2, firetruck, redc, rc2, rc3, rc4, rc5, greenc, gc2, bluec, bc2, bc3, gc3, copc, cc2, cc3, ft2, gc4, bc4, cc4, cc5, cc6]

for (const vehicle of vehicles){
    vehicle.body.immovable = true
    vehicle.scale =.9
    vehicle.body.onOverlap = true
}

this.physics.add.collider(animal, vehicles, collide)



// Flips Sprites and Scales larger vehicles
flip = [bus, bus2, bc3,rc3,rc4,ft2,rc5,gc4, bc4,cc4, cc5,cc6]
flip.map(i => i.flipX=true)

longv = [bus,bus2,firetruck,ft2]
longv.map(i => i.scale = .5)


// Designate Wining Area
winzone = this.add.zone(350,35).setSize(700,33)
this.physics.world.enable(winzone)
winzone.body.moves = false
winzone.body.debugBodyColor = 0x00ff00

won = this.physics.add.overlap(animal,winzone,winning)


// Adds Score and Notification Areas and Text to the Screen
this.add.rectangle(75,0,90,65, 0x00007f)
lifecount = this.add.text(36,2, lives + ' Lives', {
    fontFamily: 'Aboreto',
    fontSize: "23px", 
    backgroundColor: '#ffffff',
    color: '#00007f',
    align: 'center'} )

this.add.rectangle(605,0,90,65,0x00007f)
lifecount2 = this.add.text(566,2, lives + ' Lives', {
    fontFamily: 'Aboreto',
    fontSize: "23px", 
    backgroundColor: '#ffffff',
    color: '#00007f',
    align: 'center'} )


this.add.rectangle(315,0,190,65,0x00007f)
gameover = this.add.text(247,2, 'Game Over', {
    fontFamily: 'Aboreto',
    fontSize: "23px", 
    backgroundColor: '#ffffff',
    color: '#00007f',
    align: 'center'} )

gameover.setVisible(false)

endzone = this.add.text(240,2, '! You Won !', {
    fontFamily: 'Aboreto',
    fontSize: "23px", 
    backgroundColor: '#ffffff',
    color: '#00007f',
    align: 'center'} )

endzone.setVisible(false)

message = this.add.text(229,2, '! RUUUUUNN !', {
    fontFamily: 'Aboreto',
    fontSize: "23px", 
    backgroundColor: '#ffffff',
    color: '#00007f',
    align: 'center'} )

message.setVisible(true)


// Resets Game on Click of the Screen
this.input.once('pointerdown', function(event){
    this.scene.restart()
    lives = 5
    animal.setVelocity(90)
}, this)


// let restartbtn = document.querySelector('#restart')
// restartbtn.on('click', (event)=>{
//     console.log('click')
//     this.scene.restart()
// }, this.game)
// function click(event){
//     console.log('click')
// }
// console.log(restartbtn.eventNames)
// restartbtn.onClick() = function(){
// }
// button = this.add.button(95, 400, 'button', click, this, 2, 1, 0);

}


