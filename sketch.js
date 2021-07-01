
var trex ,trex_running,ground_img;
function preload(){
  
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
ground_img=loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,160,20,50);
 trex.addAnimation("running",trex_running)
 trex.scale=0.5;

 ground=createSprite(300,170,600,2);
 ground.addImage("ground",ground_img);
 ground.x=ground.width/2;
 edges=createEdgeSprites()
}

function draw(){
  background("white")
  ground.velocityX=-2;
  
  console.log(ground.x);

  if(keyDown("space")){
    trex.velocityY=-10;
  }
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  trex.velocityY=trex.velocityY+0.5;
  trex.collide(ground)
drawSprites();
}
