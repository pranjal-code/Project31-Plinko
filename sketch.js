var Engine = Matter.Engine;
var World = Matter.World;
var Events = Matter.Events;
var Bodies = Matter.Bodies;

//empty arrays
var particles = [];
var plinkos = [];
var divisions =[];

var divisionHeight=300;


function setup() 
{
  createCanvas(800, 800);
  engine = Engine.create();

  world = engine.world;
  //ground class new ground
  ground = new Ground(width/2,height,width,20);

//divisions
   for (var k = 0; k <=width; k = k + 80) 
   {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

   //PLINKLO ARRRANGEMENT

   //1
    for (var j = 75;j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,75));
    }

    //2
    for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,175));
    }

    //3
     for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,275));
    }

    //4
     for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,375));
    }
}
 


function draw() 
{
  background("white");

  Engine.update(engine);
  ground.display();
  
  //DISTANCE BETWEEN PLINKLO

   for (var i = 0; i < plinkos.length; i++) 
   {
     plinkos[i].display();
   }

   //NEW PARTOCLE COMING INTERVAL

   if(frameCount%60===0)
   {
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   }
 
  for (var j = 0; j < particles.length; j++) 
   {
     particles[j].display();
   }

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
}