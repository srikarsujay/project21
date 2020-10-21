var bullet ,wall,speed,weight,thickness




function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
weight=random(30,52)
thickness=random(22,88)
bullet=createSprite(50, 200, 50, 50);
  bullet.velocityX=speed
wall=createSprite(1200,200,thickness,height/2)
}

function draw() {
  background(255,255,255); 
if(hasCollided(bullet,wall)){
  bullet.velocityX=0
  var diformation=0.5*weight*speed*speed/thickness*thickness*thickness
if(diformation>10){
  wall.shapeColor=color(255,0,0)
}

if(diformation<10){
  wall.shapeColor=color(0,255,0)
}
}
  drawSprites();
}
function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.width+lbullet.x
wallLeftEdge=lwall.x
if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false
}