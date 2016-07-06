#pragma strict

static var diamondsCollected : int = 0;
static var enemiesKilled : int = 0;
static var finalEmemiesKilled : int = 0;
static var isRestarting = false;
static var finalScore : int = 0;
static var lives : int = 3;
static var checkpoints : int = 0;
static var finalLives : int = 0;
var musicPrefab : Transform;
var gameOverSound : AudioClip;
var lifeLostSound : AudioClip;
var player : Transform;

function Start(){
    diamondsCollected = 0;
    enemiesKilled = 0;
    if(!GameObject.FindGameObjectWithTag('MM')){
        var mManager = Instantiate (musicPrefab, transform.position, Quaternion.identity);
        mManager.name = musicPrefab.name;
        DontDestroyOnLoad (musicPrefab);
    }
}
function restartLevel () {
    isRestarting = true;
    if(lives == 0) {
        Application.LoadLevel('endscene');
    } else {
    GetComponent.<AudioSource>().clip = lifeLostSound;
    GetComponent.<AudioSource>().Play();
    yield WaitForSeconds (GetComponent.<AudioSource>().clip.length);
    player.position = checkpoint.reachedPoint;
    var destructible : DestructibleBall = player.GetComponent("DestructibleBall") as DestructibleBall;
    destructible.Construction();
    isRestarting = false;
    }
}
function LoadNextLevel () {
    finalLives = lives;
    finalScore += diamondsCollected;
    finalEmemiesKilled += enemiesKilled;
    Application.LoadLevel(Application.loadedLevel + 1);
}