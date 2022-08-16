const config = {
    type: Phaser.AUTO,
    width: 700,
    height: 415,
    parent: 'canvas',
    backgroundColor: "#007b5f",
    pixelArt: true,
    physics:{
        default:"arcade",
        arcade:{
            debug:true
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
    },
}

const game = new Phaser.Game(config)


// let footer = document.createElement('footer')
// let body = document.querySelector('#body')
// body.append(footer)