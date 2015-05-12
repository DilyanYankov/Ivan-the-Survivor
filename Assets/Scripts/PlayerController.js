#pragma strict

var moveSpeed:float;
var jumpHeight:float;
var moveVelocity:float;
var myRigidbody2D: Rigidbody2D;
var groundCheck: Transform;
var groundCheckRadius: float;
var whatIsGround: LayerMask;
var grounded: boolean;
var anim: Animator;
var levelManager: LevelManager;
var isDead: boolean;
var hasFood: boolean;
 


function Start () {
	myRigidbody2D = GetComponent(Rigidbody2D);
	anim = GetComponent(Animator);
	levelManager = FindObjectOfType(LevelManager);
}


function FixedUpdate() {

	grounded = Physics2D.OverlapCircle(groundCheck.position, groundCheckRadius, whatIsGround);
}

function Update () {
	
	if(Input.GetKeyDown(KeyCode.Space) && grounded){
		myRigidbody2D.velocity = new Vector2(myRigidbody2D.velocity.x, jumpHeight);
	}
	
	if(grounded){
		anim.SetBool("Grounded",true);
	}
	
	Debug.Log(grounded);
	moveVelocity = 0f;
	
	if(Input.GetKey(KeyCode.D)){
		//myRigidbody2D.velocity = new Vector2(moveSpeed, myRigidbody2D.velocity.y);
		moveVelocity = moveSpeed;
	}
	
	if(Input.GetKey(KeyCode.A)){
		//myRigidbody2D.velocity = new Vector2(-moveSpeed, myRigidbody2D.velocity.y);
		moveVelocity = -moveSpeed;
	}
	
	myRigidbody2D.velocity = new Vector2(moveVelocity, myRigidbody2D.velocity.y);
	
	anim.SetFloat("Speed", Mathf.Abs(myRigidbody2D.velocity.x));
	 
		
	if(myRigidbody2D.velocity.x > 0){
		transform.localScale = new Vector3(1f, 1f, 1f);
	}else 
	if (myRigidbody2D.velocity.x < 0){
		transform.localScale = new Vector3(-1f, 1f, 1f);
	}
	
	if(isDead){
		anim.SetBool("IsDead", true);
	}
	
}







