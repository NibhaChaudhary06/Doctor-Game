var bg , backGround;
function preload(){
  bg= loadImage("Background.jpg");
 
}

function setup() {
  createCanvas(1350, 650);
  backGround = createSprite(750,325,1350,650)
  backGround.addImage(bg);
  backGround.velocityX = -4;
  backGround.scale = 0.1;
}

function draw() {
  background(0);
  
 if(backGround.x>0){
   backGround.x = 750

 }
  // if(keyDown("UP_ARROW")){
  //   spacecraft.y = spacecraft.y -2;
  // }
    
  // if(keyDown("LEFT_ARROW")){
  //   spacecraft.addImage(scimg3);
  //   spacecraft.x = spacecraft.x - 1;
  // }
    
  // if(keyDown("RIGHT_ARROW")){
  //   spacecraft.addImage(scimg2);
  //   spacecraft.x = spacecraft.x + 1;
  // }
    
  // if(keyDown("DOWN_ARROW")){
  //     spacecraft.addImage(scimg1);
  // }
  drawSprites();
}

  


