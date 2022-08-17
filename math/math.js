let lives = 5

function loseLife(){
    lives -= 1
    lifecount.setText(lives + " Lives")
    lifecount2.setText(lives + " Lives")
    if(lives === 1){
        lifecount.setText(lives + " Life")
        lifecount2.setText(lives + " Life")
    }
}



function losing(){
    if (lives === 0){
    animal.setVelocityX(0)
    animal.setVelocityY(0)
    for (vehicle of vehicles){
        vehicle.setVelocityX(0)
    }
    message.setVisible(false)
    gameover.setVisible(true)
    }
}

function winning(){
    if(won = true){
        message.setVisible(false)
        endzone.setVisible(true)
    }
}