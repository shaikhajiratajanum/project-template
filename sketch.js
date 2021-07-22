var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaf,leafImg;
function preload(){
  gardenImg = loadImage("garden.png");
  gardenImg=addImg("garden",gardenImg);
  rabbitImg = loadImage("rabbit.png");
  rabbitImg=addImg("rabbit",rabbitImg);
  appleImg = loadImage("apple.png");
  appleImg=addImg("apple",appleImg);
  leafImg = loadImage("leaf.png");
  leafImg=addImg("leaf",leafImg);
  grassImg=loadImage("grass.png");
  grassImg=addImg("grass",grassImg);
  orangeLeafImg=loadImage("orangeLeaf.png");
  orangeLeafImg=addImg("orangeleaf",orangeLeafImg);
}

function setup(){
  
  createCanvas(600,600);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.X=world.mouseX
  var select_sprites = Math.round(random(1,3));
  if(frameCount%80===0){
  }
  if(select_sprites===1)
{ createApple();}
 else if (select_sprites===2){                                                                 createApple();}
else{  createApple();} 
 
  drawSprites();

var select_sprites = Math.round(random(1,3));
if (frameCount%100===0){
if(select_sprites===1)
{createLeaves();}
else if(select_sprites===5){
    createLeaves();}
else {  createLeaves();  }}
drawSprites();
}
function createApple(){
apple=createSprite(random(50,350),40,10,10)
apple.addImg(appleImg);
apple.scale=0.1;
apple.velocityY=5;
apple.lifetime=150;
}
function createLeaves(){
leaf=createSprite(random(50,350),40,10,10);
leaf.addImg(leafImg)
leaf.scale=0.1;
leaf.velocityY=5;
leaf.lifetime=150;
}
drawSprite();{
}
