#pragma strict

var currentCheckpoint: GameObject;

var player: PlayerController;
var respawnDelay: float;
var enemyPatrol: EnemyPatrol;


function Start () {
	player = FindObjectOfType(PlayerController);
	enemyPatrol = FindObjectOfType(EnemyPatrol);
}

function Update () {
	if (Input.GetKey ("escape")) {
			Application.Quit();
		}

}


function RespawnPlayer() 
{
	player.enabled = false;
	enemyPatrol.moveSpeed = 0;
	player.myRigidbody2D.velocity = Vector2.zero;
	yield WaitForSeconds(respawnDelay);
	Debug.Log("respawn");
	player.isDead = false;
	player.transform.position = currentCheckpoint.transform.position;
	player.enabled = true;
	enemyPatrol.moveSpeed = 2;
}