
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone;
var ground,tree,treeImg;
var boy,chain,boyImg;
var mango1,mango2,mango3,mango4;

function preload()
{
  boyImg = loadImage("sprite/boy.png");
  treeImg = loadImage("sprite/tree.png");
}

function setup() {
	createCanvas(1365, 620);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  tree = createSprite(1200,300,200,300);
  tree.addImage("treeImg",treeImg);
  tree.scale = 0.5;
  stone = new Stone(200,700);
  mango1 = new Mangoes(1300,70);
  mango2 = new Mangoes(1340,80);
  mango3 = new Mangoes(1000,70);
  mango4 = new Mangoes(1200,50);  
  ground = new Ground(700, 600, 1400, 20);
  chain = new Chain(stone.body,{x:200,y:400});
  boy = createSprite(300,500,200,300);
  boy.addImage("boyImg",boyImg);
  boy.scale = 0.18;
  Engine.run(engine);
  detectcollision(stone,mango1);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  drawSprites();
  stone.display();
  ground.display();
  boy.display();
  chain.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
     
}

function mouseDragged() {
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}
function mouseReleased() {
  chain.fly();
}
function detectcollision(stone,mango1){
  if (stone.x + mango1.x < 10) {
     Matter.Body.setStatic(mango1.Body,false);
      // collision detected!
 }
}
function keyPressed(){
  if (keyCode === 32 ){
     chain.attach(stone.body);
  }
}


