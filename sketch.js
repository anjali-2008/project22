var fairy,fairyImage
var background,backgroundImage
var star,starImage

function preload()
{
   //preload the images here
   fairyImage=loadImage("fairy.png");
   backgroundImage=loadImage("starnight.png");
   starImage=loadImage("star.png");
}

function setup() {
  createCanvas(800, 750);
  var background=createSprite(400,325,800,750);
  background.addImage(backgroundImage);

  var star=createSprite(400,100,10,10);
  star.addImage(starImage);

  var fairy=createSprite(300,325,10,10);
  fairy.addImage(fairyImage);
}

var fairy=createSprite(400,325,10,10);

function draw() {
  background("black");

if(keyDown("LEFT_ARROW"))
{fairy.x=fairy.x-2}

if(keyDown("RIGHT_ARROW"))
{fairy.x=fairy.x+2}

if(keyDown("DOWN_ARROW"))
{star.velocityY=2}
  
  drawSprites();
}
