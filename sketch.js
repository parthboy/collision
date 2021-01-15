var a,b;

function setup() {
  createCanvas(1200,800);
  a=createSprite(600,400,50,80);
  a.shapeColor="yellow";
  a.debug=true;
  b=createSprite(400,200,80,30);
  b.shapeColor="yellow";
  b.debug=true;
}

function draw() {
  background(255,255,255);  
  b.x=World.mouseX;
  b.y=World.mouseY;
  if(b.x-a.x<a.width/2+b.width/2&&a.x-b.x<a.width/2+b.width/2&&b.y-a.y<a.height/2+b.height2&&a.y-b.y<a.height/2+b.height/2){
    a.shapeColor="lightblue";
    b.shapeColor="lightblue"
  }
  else
  {
    a.shapeColor="yellow";
    b.shapeColor="yellow";
  }
  drawSprites();
}