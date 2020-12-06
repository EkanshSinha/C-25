
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here

ground = new Ground(600,height,1200,20)
paper = new Paper(310,220);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPress(){
if(keyCode===UP_Arrow){

Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
}
}


