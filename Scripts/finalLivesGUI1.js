#pragma strict
import UnityEngine.UI;

var finalLiveText : Text;

function Start () {
    finalLiveText.text = 'LIVES REMAINING: ' + GameMaster.finalLives;
}