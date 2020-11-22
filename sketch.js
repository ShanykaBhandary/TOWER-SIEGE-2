const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score=0
function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  Polygon = new polygon(50,50,20,20)
  slingshot = new SlingShot(Polygon.body,{x:.200,y:50})
  block8 = new Box(330,235,30,40)
  block9 = new Box(360,235,30,40)
  block10 = new Box(390,235,30,40)
  block11 = new Box(420,235,30,40)
  block12 = new Box(450,235,30,40)
  block13 = new Box(360,195,30,40)
  block14 = new Box(390,195,30,40)
  block15 = new Box(420,195,30,40)
  block16 = new Box(390,155,30,40)

}

function draw() {
  background(255,255,255);

  text("SCORE" + score,750,40)

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  slingshot.display();
  Polygon.display();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  drawSprites();
}






