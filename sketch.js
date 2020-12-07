
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;


var bob1;
var staticobject1;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 //bob object
	bob1 = new bob(100,320,50);
	bob2 = new bob(250,320,50);
	bob3 = new bob(350,320,50);
  bob4 = new bob(400,320,50);
  bob5 = new bob(550,320,50);

	staticobject1 = new staticbody(350,34,700,45);
     //rope object
     rope1 = new rope(bob1.body, {x:100,y:34}, -70*2,0)
     rope2 = new rope(bob2.body, {x:250,y:34}, -70*2,0)
     rope3 = new rope(bob3.body, {x:350,y:34}, -70*2,0)
     rope4 = new rope(bob4.body, {x:400,y:34}, -70*2,0)
     rope5 = new rope(bob5.body, {x:550,y:34}, -70*2,0)
     //rope1 = new rope(bob1.body, staticobject1.body, -70*2,0)
  // rope2 = new rope(bob2.body, staticobject1.body, -70*2,10)
	// rope3 = new rope(bob3.body, staticobject1.body, -70*7,0)
	// rope4 = new rope(bob4.body, staticobject1.body, -70*7,0)
   
  Matter.Body.applyForce(bob1.body, bob1.body.position,{x:100, y:100})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  console.log(mouseX)
 

  
  staticobject1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.show();
  bob2.show();
  bob3.show();
  bob4.show();
  bob5.show();

  drawSprites();
 
}



