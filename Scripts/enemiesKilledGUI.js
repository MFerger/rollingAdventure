#pragma strict
import UnityEngine.UI;

var enemiesKilled : Text;

function Start () {
    enemiesKilled.text = 'ENEMIES KILLED: ' + GameMaster.finalEmemiesKilled + '/5';
}