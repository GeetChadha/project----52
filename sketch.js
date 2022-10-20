var spaceship;
var spaceshipImg;
var backgroundImg;
var asteroidsImg;

function preload() {
  spaceshipImg = loadImage("assets/spaceship2.webp");
  backgroundImg = loadImage("assets/Background.jpg");
  asteroidsImg = loadImage("assets/Asteroid.png");
}

function setup() {
  createCanvas(800,400);
  spaceship = createSprite(400, 360, 50, 10);
  spaceship.addImage(spaceshipImg);
  spaceship.scale = 0.1;
}

function draw() {
  background(backgroundImg);
  
  if(keyDown("LEFT_ARROW")){
    spaceship.x = spaceship.x-30
  }
  if(keyDown("RIGHT_ARROW")){
   spaceship.x = spaceship.x+30
  }

  createAsteroids()

  drawSprites();
}

function createAsteroids() {
   if (frameCount%50===0) {

     asteroids = createSprite(random(0,800),10,40,40);
     asteroids.velocityY = 1;
     asteroids.addImage(asteroidsImg);
     asteroids.scale= 0.1;
     asteroids.debug = false;
    // asteroids.setCollider("rectangle",0,0,400,400);
   }
}
