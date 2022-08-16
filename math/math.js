let lives = 2

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
    gameover.setVisible(true)
    }
}