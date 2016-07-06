#pragma strict

var checkEffect : Transform;
var flagValue = 1;
function OnTriggerEnter (info : Collider) {
    if(info.tag == 'Player') {
        GameMaster.checkpoints += flagValue;
        var effect = Instantiate(checkEffect, transform.position, transform.rotation);
        Destroy(effect.gameObject, 3);
        Destroy(gameObject);
    }
}