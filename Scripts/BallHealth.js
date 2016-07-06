#pragma strict

var maxFallDistance = -25;
var gameOverSound : AudioClip;
var lifeLostSound : AudioClip;
var gameMaster : GameMaster;
function Update () {
    if(transform.position.y <= maxFallDistance){
        if(gameMaster.isRestarting == false){
            if(gameMaster != null){
                gameMaster.lives -= 1;
                gameMaster.restartLevel();
            }
        }
    }
}

