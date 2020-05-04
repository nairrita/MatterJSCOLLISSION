
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies
const Events = Matter.Events

var engine,world;
var balls = [];
var ball;
var dots = [];
var cols = 5;
var rows = 5;

function setup(){
  createCanvas(400,400)
 engine  = Engine.create();
 world = engine.world

 player = new Player(200,200)

 //MatterJS collission event
 function collision(event){
   var pairs = event.pairs
   for(i=0;i<pairs.length;i++){
     var labelA = pairs[i].bodyA.label;
     var labelB = pairs[i].bodyB.label;
    if(labelA == "particle"  && labelB == "dots"){
    console.log("colls")
    balls[i].destroy()
    }
    if(labelA== "dots" && labelB == "particle"){
      console.log("colliding")
      balls[i].destroy();
    }
   }

 }


 Events.on(engine, 'collisionStart',collision)





var spacing = width/cols
for(var j = 0;j<rows;j++){
 for(var i=0;i<cols;i++){
    var dot = new Dots(i*spacing,j*spacing);
   dots.push(dot);
 }
 }

}

function draw(){
  background(0)

  if(frameCount%60===0){
    ball = new Ball(random(width),100,20)
    balls.push(ball)
  }
Engine.update(engine)

for(var i=0;i< balls.length;i++){
  balls[i].display();
  
}

for(var i=0;i<dots.length;i++){
  dots[i].display();
}
player.display();

}