#pragma strict

var currentCheckpoint: GameObject;

var player: PlayerController;
var isDead: boolean;
var respawnDelay: float;
var enemyPatrol: EnemyPatrol;


function Start () {
	player = FindObjectOfType(PlayerController);
	enemyPatrol = FindObjectOfType(EnemyPatrol);
}

function Update () {

}


function RespawnPlayer() 
{
	
	player.enabled = false;
	player.myRigidbody2D.velocity = Vector2.zero;
	yield WaitForSeconds(respawnDelay);
	Debug.Log("respawn");
	player.transform.position = currentCheckpoint.transform.position;
	player.enabled = true;
	enemyPatrol.moveSpeed = 2;
	isDead = false;
}