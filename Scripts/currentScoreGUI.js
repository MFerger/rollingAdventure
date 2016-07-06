#pragma strict
import UnityEngine.UI;

var diamondsCollected : Text;

function Update () {
    diamondsCollected.text = 'DIAMONDS COLLECTED: ' + GameMaster.diamondsCollected + '/10';
}