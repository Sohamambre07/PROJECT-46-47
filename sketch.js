

function preload()
{
shipImg = loadImage("ship.png")
shiplaserImg = loadImage("shiplaser.png")
eship1Img = loadImage("eship1.png")
eship2Img = loadImage("eship2.png")
eship3Img = loadImage("eship3.png")
eship4Img = loadImage("eship4.png")
eship5Img = loadImage("eship5.png")
bg = loadImage("Space.jpg")
}

function setup() {
	createCanvas(displayWidth,displayHeight);
ship = createSprite(603,607,20,20)
ship.scale=0.3
	ship.addImage(shipImg)
shiplaser = createSprite(603,566,20,20)
shiplaser.addImage(shiplaserImg)
shiplaser.rotation+=90;
shiplaser.scale=0.1

eship1 = createSprite(829,123,20,20)
eship1.addImage(eship1Img)
eship1.scale=0.2

eship2 = createSprite(493,199,20,20)
eship2.addImage(eship2Img)
eship2.scale=0.4

eship3 = createSprite(222,387,20,20)
eship3.addImage(eship3Img)
eship3.scale=0.2

eship4 = createSprite(136,130,20,20)
eship4.addImage(eship4Img)
eship4.scale=0.2

eship5 = createSprite(1081,208,20,20)
eship5.addImage(eship5Img)
eship5.scale=0.2

}


function draw() {
 
  background(bg);

  if(keyDown("right")){
	ship.x+=5
	}
  
	if(keyDown("left")){
	  ship.x-=5
	}
  
	if(keyDown("up")){
	  ship.y-=5
	}
  
	if(keyDown("down")){
	  ship.y+=5
	}

	if (keyWentDown("space")) {
		shiplaser.x= ship.x;
		shiplaser.y= ship.y-40;
	   shiplaser.velocityY=-9;
	 }
	
	 if (shiplaser.isTouching(eship1)) {
		eship1.destroy();
	  }

	  if (shiplaser.isTouching(eship2)) {
		eship2.destroy();
	  }

	  if (shiplaser.isTouching(eship3)) {
		eship3.destroy();
	  }

	  if (shiplaser.isTouching(eship4)) {
		eship4.destroy();
	  }

	  if (shiplaser.isTouching(eship5)) {
		eship5.destroy();
	  }


  textSize(40)
  text(mouseX+":"+mouseY,200,200)

  drawSprites();
 
}



