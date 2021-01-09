var wall,car,speed,weight;




function setup() {
  createCanvas(1200,400);
  car = createSprite(50, 200, 50, 50);
  speed = random(55,90);
  weight = random(400,1500);
  wall = createSprite(1100,200,60,200);

  car.velocityX=speed
  car.shapeColor="white";
}

function draw() {
  background(0,0,0);  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0
    var d=0.5*weight*speed*speed/22500
    if(d>180){
      car.shapeColor="red"

    }
    if(d<180&&d>100){
      car.shapeColor="green"

    }
    if(d<100){
      car.shapeColor="blue"
    }
  }
  drawSprites();

}