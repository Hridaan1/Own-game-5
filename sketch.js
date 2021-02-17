var canvas, backgroundImage;
var gameState , PLAY,END;
var houseimg;

function preload(){
  playerImg = loadImage("images/RunningPlayer.png");
  zombieImgR = loadImage("images/Zombie_right.png");
  zombieImgL = loadImage("images/Zombie_left.png");
  Deadbody = loadImage("images/DeadBody.png");
  houseimg = loadImage("images/House1.png");

}

function setup(){
  canvas = createCanvas(400,400);
    //wall1 = createSprite(50,50,10,50);
    CreateMap();

    player = createSprite(20,30,10,10);
    player.scale=0.2;
    player.addImage(playerImg);
    player.addAnimation("dead",Deadbody);
  //  player.debug=true;


    zombie1 =  createSprite(250,170,10,10);
    zombie1.addAnimation("left",zombieImgL);
    zombie1.addAnimation("right",zombieImgR);
    zombie1.scale=0.1;
    zombie1.velocityX =4;
   // zombie1.debug= true;

    zombie1.setCollider("circle", 0,0,40);

    zombie2 =  createSprite(250,170,10,10);
    zombie2.addAnimation("left",zombieImgL);
    zombie2.addAnimation("right",zombieImgR);
    zombie2.scale=0.2;
    zombie2.velocityY=4;   
 
    house = createSprite(370,380,20,20);
    house.addImage(houseimg);
    house.scale=0.15;

    PLAY = 1;
    END = 0;
    gameState = PLAY;
}

function draw(){
  background("yellow");
  edges = createEdgeSprites();
if(gameState === PLAY){
  if(keyDown("up")){
    player.y = player.y-10;
  }  

  if(keyDown("down")){
    player.y = player.y+10;
  }  

  if(keyDown("left")){
    player.x = player.x-10;
  }  

  if(keyDown("right")){
    player.x = player.x+10;
  }  
  if(player.isTouching(house)){
    textSize(30);
      text("!You Won!",200,200);
      player.velocityY=0;
      player.velocityX=0;
      zombie1.velocityX=0;
      zombie1.velocityY=0;
      

  }

  console.log(zombie1.x);

  if(zombie1.velocityX<0){
    zombie1.changeAnimation("left", zombieImgL);
    zombie1.scale = 0.17;
  }else {
    zombie1.changeAnimation("right", zombieImgR);
    zombie1.scale = 0.1;
  }
  if(zombie1.isTouching(player)){
    gameState = END;
  }
}else if (gameState === END){
  textSize(30);
  textFont("Lobster");
  text("!Dead Body!", 150,200);

  player.changeAnimation("dead", Deadbody);
}

player.bounceOff(cardboard1);
player.bounceOff(cardboard2);
player.bounceOff(cardboard3);
player.bounceOff(cardboard4);
player.bounceOff(cardboard5);
player.bounceOff(cardboard6);
player.bounceOff(cardboard7);
player.bounceOff(cardboard8);
player.bounceOff(cardboard9);
player.bounceOff(cardboard10);
player.bounceOff(cardboard11);
player.bounceOff(cardboard12);
player.bounceOff(cardboard13);
player.bounceOff(cardboard14);
player.bounceOff(cardboard15);
player.bounceOff(cardboard16);
player.bounceOff(cardboard17);
player.bounceOff(cardboard18);
player.bounceOff(cardboard19);
player.bounceOff(cardboard20);
player.bounceOff(cardboard21);
player.bounceOff(cardboard22);
player.bounceOff(edges);

zombie1.bounceOff(edges[0]);
zombie1.bounceOff(edges[1]);
zombie2.bounceOff(edges[2]);
zombie2.bounceOff(edges[3]);

  drawSprites();
}



function CreateMap(){
  cardboard1 = createSprite(10,70,100,20);
  cardboard1.shapeColor = "brown";
  cardboard2 = createSprite(100,50,20,100);
  cardboard2.shapeColor = "brown";
  cardboard3 = createSprite(80,130,100,20);
  cardboard3.shapeColor = "brown";
  cardboard4 = createSprite(50,250,20,100);
  cardboard4.shapeColor = "brown";
  cardboard5 = createSprite(130,210,100,20);
  cardboard5.shapeColor = "brown";
  cardboard6 = createSprite(10,250,100,20);
  cardboard6.shapeColor = "brown";
  cardboard7 = createSprite(160,120,20,100);
  cardboard7.shapeColor = "brown";
  cardboard8 = createSprite(150,20,100,20);
  cardboard8.shapeColor = "brown";
  cardboard9 = createSprite(250,70,20,100);
  cardboard9.shapeColor = "brown";
  cardboard10 = createSprite(270,150,100,20);
  cardboard10.shapeColor = "brown";
  cardboard11 = createSprite(330,50,100,20);
  cardboard11.shapeColor = "brown";
  cardboard12 = createSprite(340,125,20,100);
  cardboard12.shapeColor = "brown";
  cardboard13 = createSprite(220,250,20,100);
  cardboard13.shapeColor = "brown";
  cardboard14 = createSprite(330,210,150,20);
  cardboard14.shapeColor = "brown";
  cardboard15 = createSprite(100,300,20,100);
  cardboard15.shapeColor = "brown";
  cardboard16 = createSprite(180,310,100,20);
  cardboard16.shapeColor = "brown";
  cardboard17 = createSprite(30,352,20,100);
  cardboard17.shapeColor = "brown";
  cardboard18 = createSprite(175,352,20,100);
  cardboard18.shapeColor = "brown";
  cardboard19 = createSprite(280,290,20,100);
  cardboard19.shapeColor = "brown";
  cardboard20 = createSprite(350,270,120,20);
  cardboard20.shapeColor = "brown";
  cardboard21 = createSprite(250,390,100,20);
  cardboard21.shapeColor = "brown";
  cardboard22 = createSprite(330,370,20,100);
  cardboard22.shapeColor = "brown";
}