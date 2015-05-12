#pragma strict

var player: PlayerController;
var food: GameObject;

function Start () {
	player = FindObjectOfType(PlayerController);
}

function Update () {

}


function OnTriggerEnter2D(other: Collider2D){
	
	
	if(other.name == "Player"){
		player.hasFood = true;
		Destroy(food);
		Debug.Log("got FOod");
		
	}
}