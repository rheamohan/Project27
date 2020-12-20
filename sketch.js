
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine , world;
var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(820, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(230,500,40,40);
	bob2 = new Bob(312,500,40,40);
	bob3 = new Bob(394,500,40,40);
	bob4 = new Bob(476,500,40,40);
	bob5 = new Bob(558,500,40,40);

	roof = new Roof(400,100,610,40);

	rope1 = new Rope(bob1.body,roof.body,-80*2,0)
	//line = (bob1.x,bob1.y,roof.x,roof.y);

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine);

  rectMode(CENTER);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  drawSprites();
 
}



