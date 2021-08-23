
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin,ground;
var world;

var ball1;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(width/2,670,width,20);

    ball1= new Ball(200,320,50,50);
	dustbin = new Dustbin(675,550,150,200);
	dustbin2 = new RectBox(600,550,20,200);
//	dustbin2.visible = false;
    dustbin3 = new RectBox(750,550,20,200);
//	dustbin3.visible = false;
	


	Engine.run(engine);
  
}


function draw() {

 background("lightgrey");
  Engine.update(engine);
  
  ball1.display();
  ground.display();
  dustbin.display();

  dustbin2.display();
  dustbin3.display();
     
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:50,y:-400});
		//Matter.Body.setStatic(ball1.Body,false);
		
	} 
 }


 function isTouching(){
	if (ball1.x - dustbin.image.x < dustbin.image.width/1 + ball1.width/1
	  && dustbin.image.x - ball1.x < dustbin.image.width/1 + ball1.width/1
	  && ball1.y - dustbin.image.y < dustbin.image.height/1 + ball1.height/1
	  && dustbin.image.y - dustbin.image.y < dustbin.image.height/1 + ball1.height/1){
    
		return true;
	  }
	  else {
		return false;
	  } 
	}
	
