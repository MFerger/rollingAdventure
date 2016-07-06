#pragma strict
var rotationspeed : float = 3000.0f;
var jumpHeight = 7;
var rightJump = 3;
var leftJump = -3;
var playOnce = true;
var canJump = true;
var jumpCount = 0;
private var isFalling = false;

var hit1 : AudioClip;
var hit2 : AudioClip;
var hit3 : AudioClip;

function Update (){

    var rotation : float = Input.GetAxis ("Horizontal") * rotationspeed;
    rotation *= Time.deltaTime;
    GetComponent.<Rigidbody>().AddRelativeTorque(Vector3.back * rotation);
    if (Input.GetKeyDown(KeyCode.W) && jumpCount == 0){
        GetComponent.<Rigidbody>().velocity.y = jumpHeight;
        playOnce = true;
        jumpCount = 1;
    }
    if(Input.GetKeyDown(KeyCode.D) && jumpCount == 1) {
            GetComponent.<Rigidbody>().velocity.x = rightJump;
    }
    if(Input.GetKeyDown(KeyCode.A) && jumpCount == 1) {
        GetComponent.<Rigidbody>().velocity.x = leftJump;
    }
    isFalling = true;
} 
function OnCollisionStay () {
    if(playOnce == true && jumpCount == 0) {
        var theHit = Random.Range(0,3);
        if(theHit == 0){ 
            GetComponent.<AudioSource>().clip = hit1;
        } else if (theHit == 1) {
            GetComponent.<AudioSource>().clip = hit2;
        } else {
            GetComponent.<AudioSource>().clip = hit3;
        }
        GetComponent.<AudioSource>().pitch = Random.Range (0.5, 1.2);
        GetComponent.<AudioSource>().volume = Random.Range (0.5, 1);
        GetComponent.<AudioSource>().Play();
        playOnce = false;
    }
    isFalling = false;
}
function OnCollisionEnter (hit: Collision) {
    if(hit.gameObject.tag == 'Floor') {
        jumpCount = 0;
    }
}
