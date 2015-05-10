#pragma strict


var levelManager: LevelManager;
var enemyRigidbody2D: Rigidbody2D;


function Start () {
	levelManager = FindObjectOfType(LevelManager);
	enemyRigidbody2D = GetComponent(Rigidbody2D);
	
}

function Update () {

}

function OnTriggerEnter2D(other: Collider2D){
	
	
	if(other.name == "Player"){
		Debug.Log(enemyRigidbody2D.velocity.x);
		levelManager.isDead = true;
		levelManager.RespawnPlayer();
	}
}