function collide(){
    loseLife()
    animal.body.stop()
    animal.x = 335
    animal.y = 680
    animal.body.moves = true
}



function moveCars(){

    for (const vehicle of vehicles){
        if (vehicle.flipX == false){
            vehicle.setVelocityX(-150)
            if (vehicle.x < -100){
                vehicle.x = 750
            }
            
        }
        else if(vehicle.flipX == true){
            vehicle.setVelocityX(150)
                if(vehicle.x > 800){
                    vehicle.x = -150
                }
        }
    

}

}


