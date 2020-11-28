var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1000,400);
  
  speed = random(55,90);
  weight = random(400,1500);
  deformation = (0.5*weight*speed*speed)/22500;

  car = createSprite(50,200,50,50);
  car.shapeColor = "white";
  wall = createSprite(900,200,60,height/2);
  wall.shapeColor = "lightblue";

  car.velocityX = speed;
  }

function draw() {
  background("black");
  if (deformation<100
    && car.x - wall.x < wall.width/2 + car.width/2 
    && wall.x - car.x < wall.width/2 + car.width/2) {
    car.shapeColor = "darkgreen";
    car.velocityX = 0;
  }  
  if(deformation>100
    && deformation<180
    && car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2) {
      car.shapeColor = "yellow";
      car.velocityX = 0;
    }
  if (deformation>180
    && car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2) {
      car.shapeColor = "red";
      car.velocityX = 0;
    }    

  drawSprites();
  car.collide(wall);
}