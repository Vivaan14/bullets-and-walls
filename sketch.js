var thickness ,wall;
var speed,weight;
var bullet;
function setup() {
  createCanvas(1600,400);
   thickness = random(22,83);
   weight = random(30,52);
   speed = random(223,321);

 bullet = createSprite(50,200,50,5);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "black";

}

function draw() {
  background(0,0,255);
  if(hasCollided(bullet,wall)){
  bullet.velocityX = 0;
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10){
  wall.shapeColor = color(250,0,0);
  }
  if(damage<10){
  wall.shapeColor=color(0,255,0);
  }
  }
}
