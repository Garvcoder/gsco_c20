var car,wall
var speed, weight
function setup() 
{
  createCanvas(1200,400);
  car = createSprite(200,200,20,20);
  wall = createSprite(1000,200,20,100);
  speed = random(55,95)
  weight = random(400,1500);
  car.velocityX = speed
  
  //car.velocityX = carX;
  //car.weight = weight;
}

function draw() 
{
  background(0,0,0); 
  if (car.isTouching(wall))
  {
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22500
  
    text(deformation,10,10)
    
    if(deformation < 80 ) 
    {
     car.shapeColor = "green"
    }
    
    if(deformation > 180 ) {
      car.shapeColor = "red"
     }
    
     if(deformation < 180 && deformation > 80 ) {
      car.shapeColor = "yellow"
     }
    
    
  
  }
  drawSprites();
}


 