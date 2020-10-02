var car,wall;


var speed, weight; 


function setup() {
  createCanvas(1600, 400);


	speed=random(55,90)
	weight=random(55,1500)


	car=createSprite(50, 200, 50,50);   

	car.velocityX = speed;

	car.shapeColor=color(230,230,0);


  
  	wall=createSprite(1500,200, 60, height/2)
  	wall.shapeColor=color(80,80,80)
}




