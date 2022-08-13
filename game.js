console.log('hello frogger')


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
        preload: preload,
        create: create,
        update: update,
    },
}

const game = new Phaser.Game(config)

