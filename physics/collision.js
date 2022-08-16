function collide(){
    loseLife()
    animal.body.moves = false
    animal.x = 335
    animal.y = 680
    animal.body.moves = true
}

function moveCars(){
    firetruck.setVelocityX(70)
    firetruck.y = 200

    bus.setVelocityX(100)
    bus2.x+= 1
    
    if(bus2.x > 800){
        bus2.x=-150
    }
    if(bus.x > 800){
        bus.x=-150
    }
    redc.x +=1
}