var Play = 1;
var End = 0;
var gameState = Play;
var cb, cb_running, cb_collided;
var background1, background_image, obs_Image, ground;

function preload(){

cb_running = loadAnimation("cowboy_1.jpg","cowboy_2.jpg","cowboy_3.jpg",
"cowboy_4.jpg");
cb_collided = loadImage("cowboy_2.jpg");

background_image = loadImage("background.jpg");

obs_image = loadImage("cactus.jpg");
}

function setup(){
  createCanvas(750,500);
  
  background1 = createSprite(0,0,750,500);
  background1.addImage(background_image);
  background1.scale = 3.5;

  ground = createSprite(0,450,1500,5);
  //ground.visible = false;

  cb = createSprite(50,455,50,50);
  cb.addAnimation("running", cb_running);
  
}

function draw(){

  background("blue")
 
  drawSprites();
}

