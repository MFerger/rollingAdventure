#pragma strict
import UnityEngine.UI;

var enemiesKilledText : Text;

function Update () {
    enemiesKilledText.text = 'ENEMIES KILLED: ' + GameMaster.enemiesKilled + '/4';
}