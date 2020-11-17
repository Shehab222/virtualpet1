//Create variables here
var dog,dogImg
var happyDog
var database
var foodS
var foodStock
function preload()
{
  //load images here
  dogImg= loadImage("images/dogImg.png");
  happyDog= loadImage("/images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog=createSprite(250,250,5,5);
  dog.addImage(dogImg)
  dog.scale=0.2;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
  drawSprites();
  //add styles here
  fill("White");
  text("Note:Press The UP_ARROW Key To Feed Drago Milk!",120,350);
  
if(keyWentDown (UP_ARROW)) {
  writeStock(foodS);
  dog.addImage(happyDog);
}
}

function readStock (data){

  foodS=data.val();
}

function writeStock (x){
  database.ref('/').update({
    Food:x
  })
}
