#pragma strict

var target : Transform;
var distance = -8;
var lift = 3;

function LateUpdate () {
    transform.position = target.position + Vector3(0, lift, distance);
    transform.LookAt(target);
}