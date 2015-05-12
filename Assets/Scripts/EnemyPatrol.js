#pragma strict

var moveSpeed: float;
var moveRight: boolean;
var enemyRigidbody2D: Rigidbody2D;
var player: PlayerController;
var wallCheck: Transform;
var wallCheckRadius: float;
var whatIsWall: LayerMask;
var hitWall: boolean;

var edgeCheck: Transform;
var notAtEdge: boolean;
var levelManager: LevelManager;
var enemyAnim: Animator;


function Start () {
	enemyRigidbody2D = GetComponent(Rigidbody2D);
	enemyAnim = GetComponent(Animator);
	levelManager = FindObjectOfType(LevelManager);
	player = FindObjectOfType(PlayerController);
}

function Update () {
		
	hitWall = Physics2D.OverlapCircle(wallCheck.position, wallCheckRadius, whatIsWall);
	
	notAtEdge = Physics2D.OverlapCircle(edgeCheck.position, wallCheckRadius, whatIsWall);
	
	if(hitWall || !notAtEdge){
		moveRight = !moveRight;
	}
	
	enemyAnim.SetFloat("Speed", Mathf.Abs(enemyRigidbody2D.velocity.x));
	
	if(moveRight && !player.isDead){
		transform.localScale = new Vector3(-1f,1f,1f);
		enemyRigidbody2D.velocity = new Vector2(moveSpeed, enemyRigidbody2D.velocity.y);
	}else if(!moveRight && !player.isDead){
		transform.localScale = new Vector3(1f,1f,1f);
		enemyRigidbody2D.velocity = new Vector2(-moveSpeed, enemyRigidbody2D.velocity.y);
	}
	
	
}