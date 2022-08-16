function collide(){
    loseLife()
    animal.body.moves = false
    animal.x = 335
    animal.y = 680
    animal.body.moves = true
}



function moveCars(){

    for (const vehicle of vehicles){
        if (vehicle.flipX == false){
            vehicle.x-= (1.3)
            if (vehicle.x < -100){
                vehicle.x = 750
            }
            
        }
        else if(vehicle.flipX == true){
            vehicle.x += (1.3)
                if(vehicle.x > 800){
                    vehicle.x = -150
                }
        }
    

}

}

function winning(){
    console.log('you won!')
    let canvas = document.querySelector('#canvas')
    canvas.font = '32 Arial'
    canvas.fillText('Congrats!!', 350, 30)
    
}
