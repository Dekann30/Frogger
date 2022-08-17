const config = {
    type: Phaser.AUTO,
    width: 700,
    height: 415,
    parent: 'canvas',
    backgroundColor: "#007b5f",
    physics:{
        default:"arcade",
        arcade:{
            debug:false
        }
    },
    scale: {
        parent: 'canvas',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 700,
        height: 415,
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
    },
}

const game = new Phaser.Game(config)

// let restartbtn = document.querySelector('#restart')

// restartbtn.addEventListener('click', clearall)
// console.log(canvas)
// function clearall()
// {
//     $('#canvas').load('#canvas')
//     this.game.destroy()
//     new Phaser.Game(config)
//     // var canvas=document.getElementById("canvas+id");
//     // // var context=canvas.getContext("2d");
//     // canvas.clearRect(0,0,canvas.width,canvas.height);
// }


// let footer = document.createElement('footer')
// let body = document.querySelector('#body')
// body.append(footer)