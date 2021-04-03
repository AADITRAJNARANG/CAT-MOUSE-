var bg;
var together;
var cat, catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;

function preload() {
    bg = loadImage("garden.png");
    catImg1= loadAnimation("catImg.png");
    catImg2=loadAnimation("cat2.png","cat3.png");
    catImg3= loadAnimation("cat4.png");
    mouseImg1=loadAnimation("mouse1.png");
    mouseImg2= loadAnimation("mouse2.png","mouse3.png");
    mouseImg3=loadAnimation("mouse4.png");

}

function setup(){
     createCanvas(1000,800);

    cat = createSprite(870, 600);
    cat.addAnimation("catsleep", catImg1);
    cat.scale = 0.2;

    mouse = createSprite(200, 600);
    mouse.addAnimation("mouseLO",mouseImg1);
    mouse.scale = 0.15;

}

function draw() {

    background(bg);

    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("CATIMG",catImg2);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("CATIMG");
        mouse.addAnimation("MOUSEIMG",mouseImg3);
        mouse.scale=0.15;
        mouse.changeAnimation("MOUSEIMG");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5; 
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning");
        
        mouse.addAnimation("catTeasing",mouseImg2);
        
        mouse.changeAnimation("catTeasing");
    }
}