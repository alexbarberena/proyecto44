var backgroundImg;
var mario,marioImg;

var engine,world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var screen=1;

var screen1,image1;

var gameState=0;

var background2;

var block1,block2,block3,block4;

var score=0;

var ground;

function preload(){
 backgroundImg=loadImage("image.jpeg");
 marioImg=loadImage("mario3.png");
screen1=loadImage("screen1.png");
image1=loadImage("image.jpeg");

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
	world = engine.world;

  ground=createSprite(200,675,5000,20);
  ground.visible=false;

  mario=createSprite(55, 595, 10, 10,);
  mario.addImage(marioImg);
  mario.scale=0.1;

  block1=new Block(260,510);
  block2=new Block(505,505);
  block3=new Block(555,330);
  block4=new Block(600,510);




}

function draw() {
 background(image1);
  if(gameState===0){
   // mario.visible=false;  
  }

  console.log(score);

  console.log("x:" + mario.x);
  console.log("y:" + mario.y);

  console.log(block1.x);
  console.log(block1.y);
 
  mario.velocityY=5;
  mario.collide(ground);

  if(keyDown("space") && mario.y >= 159) {
    mario.velocityY = -12;
  }
  
  if(keyDown(LEFT_ARROW)){
	  mario.x=mario.x-5;
	}
  
	if(keyDown(RIGHT_ARROW)){
		mario.x=mario.x+5;
	  }
    if(keyDown(UP_ARROW)){
      mario.y=mario.y-5;
    }
    
    if(keyDown(DOWN_ARROW)){
      mario.y=mario.y+5;
      }
     
    if(mario.y && mario.x === block1.x && block1.y){
     score=score+1; 
    }

    if(mario.y && mario.x === block2.x && block2.y){
      console.log("hola");
     }
 
     if(mario.y && mario.x === block3.x && block3.y){
      console.log("hola");
     }
 

  drawSprites();

  
}