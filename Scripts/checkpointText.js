#pragma strict
import UnityEngine.UI;

var checkpointText : Text;

function Update () {
    checkpointText.text = 'CHECKPOINTS: ' + GameMaster.checkpoints + '/2';
}