function collide(){
    loseLife()
    animal.body.moves = false
    animal.x = 335
    animal.y = 680
    animal.body.moves = true

    // for (vehicle of vehicles){
    //     vehicle.x -=5
    // }
}



function moveCars(){

    for (const vehicle of vehicles){
        if (vehicle.flipX == false){
            vehicle.setTint(0x00ff00)
        }
        vehicle.x += (2)
        if(vehicle.x > 800){
            vehicle.x = -150
        }
    }
    

}