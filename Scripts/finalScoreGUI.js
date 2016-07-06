#pragma strict
import UnityEngine.UI;

var scoreText : Text;

function Start () {
    scoreText.text = 'DIAMONDS COLLECTED: ' + GameMaster.finalScore + '/15';
}