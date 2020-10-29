function setup() {

  createCanvas(800,600);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(400,400,80,30);
  
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "green";
   text("red",200,200)
  //movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;

  rect1 = createSprite(100,100,50,100);
  rect2 = createSprite(700,100,50,100);
  rect1.velocityX = 5;
  rect2.velocityX=-5;
  rect1.shapeColor = "green";
  rect2.shapeColor = "black";
  rect3=createSprite(600,400,50,100);
 rect3.shapeColor="brown";
  rect4=createSprite(400,400,50,100);
  rect4.shapeColor="blue";
  rect3.velocityX=-5;
  rect4.velocityX=5;


}
function draw() {

  background(255,255,255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(rect1,movingRect)){
    rect1.shapeColor = "purple";
    movingRect.shapeColor = "purple";
  }else{
    rect1.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";
  }

  bounceoff(rect3,rect4);
  bounceoff(rect1,rect2);
  drawSprites();
}