#pragma strict

var player : Rigidbody;
var bnceAmt = 8f;
var colliders : Transform;
var enemyAnim : Animator;
var enemyValue = 1;
private var centerAnim : Animator;
var deathSound: AudioClip;
function Awake () {
    centerAnim = transform.GetComponent('Animator') as Animator;
}

function Die () {
    GameMaster.enemiesKilled += enemyValue;
    player.GetComponent.<Rigidbody>().velocity.y = bnceAmt;
    GetComponent.<AudioSource>().clip = deathSound;
    GetComponent.<AudioSource>().Play();
    enemyAnim.SetTrigger('Die');
    centerAnim.SetTrigger('Stop');
    Destroy(colliders.gameObject);
}
function Attack () {
    enemyAnim.SetTrigger('Attack');
}
function Exit () {
    enemyAnim.SetTrigger('Exit');
}