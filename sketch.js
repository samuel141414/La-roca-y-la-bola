const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;

var balls = [];


function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  

}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);
  ground.display();
  
  for(var i=0; i<Ball.length; i++){
  showCannonBalls(balls[i],i);
}

  cannon.display();
  tower.display();

 
  
}
function keypressed(){
  if (keycode === DOWN_ARROW){
    var cannonBall = new Cannonball(cannon.x, cannon.y);
    balls.push(cannonball);
  }

function showCannonBalls(ball, index){
ball.display();
if(ball.bodyposition.x >= width || ball.body.position.y >= height -50){
  matter.World.remove(world, ball.body);
  balls.splice(index, 1);
}
}

function keyReleased(){
  if (keycode === DOWN_ARROW)
    cannonBall.shoot()
}
}