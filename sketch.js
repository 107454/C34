var dogo,dogIMG,alsodogIMG
var database
var foodS=0
var foodstack
function preload(){
dogIMG=loadImage("Images/Dogo.png")
alsodogIMG=loadImage("Images/ALSOdogo.png")
}

function setup() {
database=firebase.database()
createCanvas(500, 500);
dogo=createSprite(250,300,150,150)
dogo.addImage(dogIMG)
dogo.scale=0.15
foodstack=database.ref('Food')
foodstack.on("value",readStock)
textSize(20)
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
writeStock(foodS)
dogo.addImage(alsodogIMG)
}
  drawSprites();
fill(255,255,254)
stroke("black")
text("Food remaining : "+foodS,170,200)
textSize(13)
text("press the up arrow to feed",130,10,300,20)
}
function readStock(data){
foodS=data.val()
}
function writeStock(x){
if(x<=0){
x=0
}else{
x=x-1
}
database.ref('/').update({
Food:x 
}
)
}

