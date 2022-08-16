function update(){
    animal.setVelocity(0)

    if (cursors.left.isDown)
{
    animal.setVelocityX(-90);

    animal.anims.play('left', true);
}
else if (cursors.right.isDown)
{
    animal.setVelocityX(90);

    animal.anims.play('right', true);
}
else if (cursors.up.isDown)
{
    animal.setVelocityY(-90);

    animal.anims.play('up', true);

}
else if (cursors.down.isDown)
{
    animal.setVelocityY(90);

    animal.anims.play('down', true);

}
else
{
    animal.setVelocityX(0);

    animal.anims.play('turn');
}

// moveCars()

losing()


}