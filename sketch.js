var shipImg,ship,seaImg,sea;
function preload(){

shipImg=loadAnimation("ship-1.png","ship-2.png");
seaImage=loadImage("sea.png");

}

function setup(){
  createCanvas(300,300);

   ship=createSprite(70,180,20,20);
   ship.addAnimation("ship",shipImg);
ship.scale=0.2;
sea=createSprite(10,200,600,10);
sea.x=sea.width/2;
sea.velocityX=-2;
sea.visible=false
}
function draw() {


  background(seaImage);
 if(keyDown("space")){
   ship.velocityY=-10;
 }

ship.velocityY = ship.velocityY + 0.8

if(sea.x < 0){
  sea.x = sea.width/2
}

ship.collide(sea);
drawSprites();
}