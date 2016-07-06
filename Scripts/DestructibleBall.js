#pragma strict

var ballRigidbody : Rigidbody;
var ballCollider : SphereCollider;
var piecesParent : Transform;
var piecesPrefab : Transform;
var wholeBall : GameObject;

function Destruct () {
    ballRigidbody.isKinematic = true;
    ballCollider.enabled = false;
    var clone = Instantiate(piecesPrefab, piecesParent.position, piecesParent.rotation);
    Destroy (clone.gameObject, 1f);
    wholeBall.SetActive(false);
}
function Construction () {
    ballRigidbody.isKinematic = false;
    ballCollider.enabled = true;
    wholeBall.SetActive(true);
}