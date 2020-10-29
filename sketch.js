
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  monkeyImage = loadImage("sprite_1.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 //createCanvas(600,600)
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2;
  console.log(ground.x)
  foodGroup=new Group();
  bananaGroup=new Group();
  obstaclesGroup=new Group();
  
}


function draw() {
background(180)
  //ground.velocityX=-4
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  if(keyDown("space")) {
    monkey.velocityY=-5
  }
  monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground);
  stroke("white");
  textSize(20);
  fill("white")
  text("score:" + score, 500,50);
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:" + survivalTime, 100,50);
  food();
  obstacles();
  
  drawSprites();
}function food() {
  if (frameCount%80 === 0) {
    banana=createSprite(600,200,40,10)
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.y=Math.round(random(120,200))
    banana.velocityX=-3
    banana.lifetime=800
    bananaGroup.add(banana)
  }
}
function obstacles() {
  if (frameCount%300 === 0) {
    obstacle=createSprite(650,320,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2;
    obstacle.velocityX=-3;
  }
  
}






