var sea;
var seaImage;
var ship, ship_moving;
function preload(){
  seaImage = loadImage("sea.png");
  ship_moving = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(100,100);
  sea.addImage(seaImage);
  sea.x = sea.width /2;
  sea.velocityX = -10;
  ship = createSprite(200,250,20,20);
  ship.addAnimation("moving", ship_moving);
  ship.scale = 0.4;

  
}

function draw() {
  background(0);
  if (sea.x < 0){
     sea.x = sea.width/2;
   }
   drawSprites();


 
}