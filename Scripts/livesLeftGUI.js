#pragma strict
import UnityEngine.UI;

var livesText : Text;

function Update () {
    livesText.text = 'LIVES LEFT: ' + GameMaster.lives;
}