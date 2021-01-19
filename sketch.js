
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var roof;
var line1,line2,line3,line4,line5,line6;
var bob1,bob2,bob3,bob4,bob5,bob6;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 var options={isStatic:true}
roof=Bodies.rectangle(500,120,800,20,options)
	World.add(world,roof)
	
	bob1=new Bob (40,300,30,30)
	bob2=new Bob (50,300,30,30)
	bob3=new Bob (60,300,30,30)
	bob4=new Bob (70,300,30,30)
	bob5=new Bob (80,300,30,30)
	bob6=new Bob (90,300,30,30)

	line1=new Chain(bob1.body,{x:310,y:120})
	line2=new Chain(bob2.body,{x:380,y:120})
	line3=new Chain(bob3.body,{x:450,y:120})
	line4=new Chain(bob4.body,{x:520,y:120})
	line5=new Chain(bob5.body,{x:590,y:120})
	line6=new Chain(bob6.body,{x:680,y:120})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  rectMode(CENTER)
  rect(roof.position.x,roof.position.y,400,20)
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
 bob6.display()
  line1.display()
  line2.display()
  line3.display()
  line4.display()
 line5.display()
 line6.display()
 
  drawSprites();
 
}



