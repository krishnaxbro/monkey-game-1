
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime=0;

function preload(){
  
 canvas=(600,600); 
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() 
{
    
    monkey=createSprite(80,315,20,20);
    monkey.addAnimation("running",monkey_running); 
    monkey.scale=0.1;
    ground=createSprite(400,350,900,10);
    ground.velocityX=-4;
    
  
}


function draw() 
{
  
  
  
  FoodGroup=new Group();
  ObstacleGroup=new Group();
  
  if(keyDown("space")&&monkey.y>=200){
     monkey.velocityY=-12;
     }
  
    monkey.velocityY=monkey.velocityY+0.8;
  
  
  if(ObstacleGroup.isTouching(monkey)){
     ground.changevelocityX=0;
     FoodGroup.changeVelocityXEach=0;
    ObstacleGroup.changeVelocityXEach=0;
     survivalTime=0;
     }
  
  if (ground.x<0){
        ground.x=ground.width/2;
        }
  
  
  background("white");
  stroke("white");
  textSize(20);
  fill("white");
  text("score"+score,200,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survival time"+survivalTime,100,50);
  
  monkey.collide(ground);
  obstacles();
  food();
  drawSprites();
}

function food(){
if(frameCount%80===0){
   banana=createSprite(400,400,20,20);
   banana.y=Math.round(random(120,200));
   banana.addImage(bananaImage);
   banana.scale=0.1;
   banana.velocityX=-4;
   FoodGroup.add(banana);
   }

}

function obstacles(){
if(frameCount%300===0){
obstacle=createSprite(350,350,20,20);
obstacle.y=Math.round(random(330,320));
obstacle.addImage(obstacleImage);
obstacle.velocityX=-4;
obstacle.scale=0.1;
ObstacleGroup.add(obstacle);
}

}


