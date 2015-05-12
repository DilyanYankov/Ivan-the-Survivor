#pragma strict

var endGame: GameObject;
var player: PlayerController;


function Start () {
	player = FindObjectOfType(PlayerController);
}

function Update () {

}


function OnTriggerEnter2D(other: Collider2D){
	if(other.name == "Player"){
		if(player.hasFood == true){
			Application.LoadLevel("Level1");
		}		
	}
}