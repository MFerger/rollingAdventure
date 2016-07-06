#pragma strict

function OnTriggerEnter () {
    var enemy = transform.GetComponentInParent (Enemy);
    enemy.Attack();
}
function OnTriggerExit () {
    var enemy = transform.GetComponentInParent (Enemy);
    enemy.Exit();
}