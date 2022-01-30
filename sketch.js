var path,boy,pathimg,boyimg
function preload(){
  //pre-load images
  pathimg=loadImage("path.png")
  boyimg=loadAnimation("Runner-1.png","Runner-2.png","Runner-1.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
path=createSprite(200,200);
path.addImage(pathimg);
path.velocityY=4
path.scale=1.4
boy=createSprite(200,300,30,30);
boy.addAnimation("running",boyimg)
boy.scale=0.1

lb=createSprite(30,200,20,400)
lb.visible=false
rb=createSprite(370,200,20,400)
rb.visible=false
}

function draw() {
  background(0);
  boy.x=World.mouseX
  if(path.y>400){
    path.y=height/2
  }
  boy.collide(lb)
  boy.collide(rb)
drawSprites()
}
