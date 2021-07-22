var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
 pathImg = loadImage("path.png");
 boyImg =
 loadAnimation("runner1.png","runner2.png");
}

function setup(){

  createCanvas(600,600);
 //moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY=4;
path.scale=1.2;

//Creating boy running
boy=createSprite(180,340,30,30);
boy.addAnimation("jakeRunning",boyImg);

//Create left boundary
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible=false;

//create right boundary
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible=false;
}

function draw() {
  background(200,200);
  path.velocityY=4;

//boy moving on Xaxis with mouse
boy.X=world.mouseX;

edges=createSprite();
boy.collide(edges[3]);
boy.collide(leftBoundary);
boy.collide(rightBoundary)

//code to reset the background
if(path.y>400){
 path.y=height/2
}
 
drawSprites();
}
