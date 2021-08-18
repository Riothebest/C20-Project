var astronaut, astronautImg;
var bath, brush,  drink , eat , gym1 ,gym2, sleep;
var room, roomImg;
var gameState = 1;

function preload()
{
    bath = loadAnimation("bath1.png","bath2.png");
    brush = loadImage("brush.png");
    drink = loadAnimation("drink1.png","drink2.png");
    eat = loadAnimation("eat1.png","eat2.png");
    gym1 = loadAnimation("gym1.png","gym2.png");
    gym2 = loadAnimation("gym11.png","gym12.png");
    roomImg = loadImage("iss.png");
    sleep = loadImage("sleep.png");
    astronautImg = loadAnimation("move.png", " move1.png");
}

function setup()
{
  createCanvas(800,400);

  room = createSprite(400,200);
  room.addImage(roomImg);
  room.scale = 0.2;

  astronaut = createSprite(400, 200,1,1);
 
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(gameState == 1)
  {
    fill("red");
    textSize(30);
    text("Press down arrow twice to randomly generate the activity", 10,100);
    text("Will have to Reload for next activity",150,200)
    keyPressed();
  }

  if(gameState == 2)
  {
    
    astronaut.addAnimation("dance",astronautImg);
    astronaut.scale = 0.1;
    keyPressed();
  }

  if(gameState == 3)
  {
    astronaut.addAnimation("washing",bath);
    astronaut.scale = 0.1;
  }

  if(gameState== 4)
  {
    astronaut.addAnimation("brushing",brush);
    astronaut.scale = 0.1;
  }
  if(gameState== 5)
  {
    astronaut.addAnimation("drinking",drink);
    astronaut.scale = 0.1;
  }
  if(gameState== 6)
  {
    astronaut.addAnimation("eating",eat);
    astronaut.scale = 0.1;
  }
  if(gameState== 7)
  {
    astronaut.addAnimation("exercise1",gym1);
    astronaut.scale = 0.1;
  }
  if(gameState== 8)
  {
    astronaut.addAnimation("exersice",gym2);
    astronaut.scale = 0.1;
  }
  if(gameState== 9)
  {
    astronaut.addAnimation("sleeping",sleep);
    astronaut.scale = 0.1;
  }
}

function keyPressed()
{
  if(keyCode === DOWN_ARROW)
  {
    var i; 
    /*for(i=0;i<3;i++)
    {
      gameState += 1;
    }*/

    i = Math.round(random(1,8));
    switch(i)
    {
      case 1: gameState = 2
              break;
      case 2: gameState = 3
              break;
      case 3: gameState = 4
              break; 
      case 4: gameState = 5
              break;
      case 5: gameState = 6
              break;
      case 6: gameState = 7
              break;
      case 7: gameState = 8
              break;
      case 8: gameState = 9
              break;

      default: break;
    }
  }
  
}