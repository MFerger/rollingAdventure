#pragma strict

var coinEffect : Transform;
var podValue = 1;
function OnTriggerEnter (info : Collider) {
    if(info.tag == 'Player') {
        GameMaster.lives += podValue;
        var effect = Instantiate(coinEffect, transform.position, transform.rotation);
        Destroy(effect.gameObject, 3);
        Destroy(gameObject);
    }
}