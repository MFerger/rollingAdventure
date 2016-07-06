#pragma strict

static var reachedPoint : Vector3 = Vector3(0,2,0);

function OnTriggerEnter(col : Collider) {
    if (col.tag == "Player") {
        if(transform.position.x > reachedPoint.x) {
            reachedPoint = transform.position;
        }
    }
}