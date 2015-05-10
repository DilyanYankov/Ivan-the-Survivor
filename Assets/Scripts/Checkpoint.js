#pragma strict
var levelManager: LevelManager;


function Start () {
	levelManager = FindObjectOfType(LevelManager);
}

function Update () {

}


function OnTriggerEnter2D(other: Collider2D){

	if(other.name == "Player"){
		levelManager.currentCheckpoint = gameObject;
		Debug.Log("trriger");
	}
}