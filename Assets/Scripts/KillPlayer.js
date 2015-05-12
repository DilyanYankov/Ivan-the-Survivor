#pragma strict

var player: PlayerController;
var levelManager: LevelManager;
var enemyRigidbody2D: Rigidbody2D;


function Start () {
	levelManager = FindObjectOfType(LevelManager);
	enemyRigidbody2D = GetComponent(Rigidbody2D);
	player = FindObjectOfType(PlayerController);
	
}

function Update () {

}

function OnTriggerEnter2D(other: Collider2D){
	
	
	if(other.name == "Player"){
		enemyRigidbody2D.Sleep();
		player.isDead = true;
		Debug.Log(player.isDead);
		levelManager.RespawnPlayer();
		enemyRigidbody2D.WakeUp();
	}
}