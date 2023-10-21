var garden, rabbit;
var gardenImg, rabbitImg;
var apple, orangeLeaf, redImage;
var appleImg, orangeImg, redImg;

function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}

function createApples() {
  apple = createSprite(random(50, 350), 40, 10, 10);
  apple.addImage(appleImg);
  apple.scale = 0.07;
  apple.velocityY = 3;
  apple.lifetime = 150;
}

function createRed() {
  redImage = createSprite(random(50, 350), 40, 10, 10);
  redImage.addImage(redImg);
  redImage.scale = 0.06;
  redImage.velocityY = 3;
  redImage.lifetime = 150;
}

function createOrange() {
  orangeLeaf = createSprite(random(50, 350), 40, 10, 10);
  orangeLeaf.addImage(orangeImg);
  orangeLeaf.scale = 0.08;
  orangeLeaf.velocityY = 3;
  orangeLeaf.lifetime = 150;
}

function setup() {
  createCanvas(400, 400);
  garden = createSprite(200, 200);
  garden.addImage(gardenImg);

  rabbit = createSprite(180, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);

  var select_sprites = Math.round(random(1, 3));

  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createApples();
    } else if (select_sprites == 2) {
      createOrange();
    } else {
      createRed();
    }
  }
}

function draw() {
  background(0);
  rabbit.x = World.mouseX;

  edges = createEdgeSprites();
  rabbit.collide(edges);
  drawSprites();
}

