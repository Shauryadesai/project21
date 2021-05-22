var canvas;
var music;
var b1,b2,b3,b4
var ball,edges

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
b1 = createSprite(10,580,350,30);
b1.shapeColor = "yellow"
b2 = createSprite(360,580,350,30);
b2.shapeColor = "green"
b3 = createSprite(500,580,200,30);
b3.shapeColor = "blue"
b4 = createSprite(700,580,200,30);
b4.shapeColor = "orange"
    //create box sprite and give velocity
ball = createSprite(random(20,750),10,40,40);
ball.shapeColor = "white"
ball.velocityX = 6;
ball.velocityY = 7;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
 edges = createEdgeSprites();
 ball.bounceOff(edges);
 
 if(b1.isTouching(ball) && ball.bounceOff(b1)){
     ball.shapeColor = "yellow"
     music.play();
 }


if(b2.isTouching(ball) && ball.bounceOff(b2)){
     ball.shapeColor = "green"
     music.play();
 }
 if(b3.isTouching(ball) && ball.bounceOff(b3)){
    ball.shapeColor = "blue"
    music.stop();
    ball.velocityX = 0;
    ball.velocityY = 0;
}
if(b4.isTouching(ball) && ball.bounceOff(b4)){
    ball.shapeColor = "orange"
    music.play();
}
    //add condition to check if box touching surface and make it box
    drawSprites();
}
