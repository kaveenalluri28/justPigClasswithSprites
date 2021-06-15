const Engine = Matter.Engine; // the force that puts physical laws into bodies

const World = Matter.World; // world for all the bodies
const Bodies = Matter.Bodies; // soul creation for body ( bodies on the said earth)

var engine,world,body; // objects of above classes
var ground;
var box, box2 , box3;
var ground;
var circle;

var pig1 , pig2 ;

function setup() {
  createCanvas(800,800);

  engine = Engine.create(); // engine object gets created with Engine class properties;
  world = engine.world; // attaching world object to engine object

   console.log("hello");

 pig1 = new Pig(200,200);
 pig2 = new Pig(400,500);

   box = new Box(400 , 300,60,70);
   box.debug = true;
   console.log(box);

   box2 = new Box(430,100,50,110);
   
   ground = new Ground(400,780,800,10);

   //circle = new Ball(300,300,30);

}

function draw() {
  background(0);  

  Engine.update(engine); // updates the engine object (like reset)

 box.display();
 box2.display();

 ground.display();

 pig1.display();
 pig2.display();
 //circle.display();
}



//. add matter.js into index.html

// -------------before setup - in sketch file------------------

// nameSpacing - addes const Bodies = Matter.Bodies....etc
// create objects for classes

// -------------setup---------------------

// create engine, world objects and attach them to their classes
// create a soul ( options - create options for soul as well)
// add soul to the world


// ----------------draw function-------------

// update the engine
//make the dummy body's rectMode to CENTER - positioning
// make the dummy body
// attach dummy to the soul by rewriting the x, y positions ( attach soul)