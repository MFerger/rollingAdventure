#pragma strict

var gameMaster : GameMaster;

function OnTriggerEnter (colInfo : Collider) {
    if(GameMaster.isRestarting == false) {
        if(colInfo.tag == "Player") {
            var destructible : DestructibleBall = colInfo.GetComponent("DestructibleBall") as DestructibleBall;
            destructible.Destruct();
            if(gameMaster.lives > 1) {
                gameMaster.lives -= 1;
                gameMaster.restartLevel();
                } else {
                    Application.LoadLevel('endscene');
            }
        }
    }
}