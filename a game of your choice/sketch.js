const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pf, car;
var ending;
var obs;


function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    pf=Bodies.rectangle(600,200,1150,370);
    World.add(world,pf);
    car=Bodies.rectangle(80, 200, 40, 30);
    World.add(world, car);
    ending=Bodies.rectangle(1100,200,20,370);
    World.add(world, ending);
    if(frameCount%30===0){
        obs=Bodies.rectangle(600,0,20,40);
        World.add(world,obs);
    }
}

function draw(){
    background("black");
    Engine.update(engine);
    fill("white");
    rectMode(CENTER);
    rect(pf.position.x,pf.position.y,1150,370);
    rectMode(CENTER);
    fill("black");
    rect(car.position.x,car.position.y,40,30);
    rectMode(CENTER);
    fill("green");
    rect(ending.position.x,ending.position.y,20,370);
    if(keyDown("RIGHT_ARROW")){
        var xpos=3
        car.position.x=car.position.x+xpos;
    }
    if(ending.position.x-car.position.x<=30){
        car.position.x=car.position.x;
        text("YOU WIN", 600,100);
    }
    if(frameCount%30===0){
        rectMode(CENTER);
        fill("red");
        rect(obs.position.x,obs.position.y,20,40);
    }
    if(obs.position.x-cars.position.x<=70){
        car.position.x=car.position.x;
        obs.position.y=obs.position.y
        text("YOU LOSE", 600,100);
    }
    var ypos=5;
    obs.position.y=obs.position.y+ypos;
    
}