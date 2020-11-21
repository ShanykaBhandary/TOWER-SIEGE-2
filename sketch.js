const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;


  block8 = new Base(330,235,30,40)
  block9 = new Base(360,235,30,40)
  block10 = new Base(390,235,30,40)
  block11 = new Base(420,235,30,40)
  block12 = new Base(450,235,30,40)
  block13 = new Base(360,195,30,40)
  block14 = new Base(390,195,30,40)
  block15 = new Base(420,195,30,40)
  block16 = new Base(390,155,30,40)
}

function draw() {
  background(255,255,255);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  drawSprites();
}






