var back,snow1,snow2

function preload(){
  back=loadImage("snow1.jpg")
  snow1=loadImage("snow4.webp");
  snow2=loadImage("snow5.webp");

}

function setup() {
  createCanvas(800,400);


}

function draw() {
  background(back);  
  drawSprites();
  snowfall()
}
function snowfall(){
  if(frameCount%50===0){
    var snow=createSprite(0,0)
    snow.velocityY=5
    snow.addImage(snow1)
    snow.x=Math.round(random(50,750))
    snow.scale=0.1

  }
  if(frameCount%70===0){
    var snowi=createSprite(0,0)
    snowi.velocityY=5
    snowi.addImage(snow2)
    snowi.x=Math.round(random(50,750))
    snowi.scale=0.1

  }
}