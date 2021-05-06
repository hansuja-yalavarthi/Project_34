const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21, box22, box23, box24, box25, box26, box27, box28;
var hero, monster, rope, ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(1350, 625);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400, 800, 250);
  rope = new Rope(hero.body, {
    x: 500,
    y: 50
  });
  monster = new Monster(1100, 550, 300);

  //row1
  box1 = new Box(625, 100, 70, 70);
  box2 = new Box(625, 170, 70, 70);
  box3 = new Box(625, 240, 70, 70);
  box4 = new Box(625, 330, 70, 70);
  box5 = new Box(625, 400, 70, 70);
  box6 = new Box(625, 470, 70, 70);
  box7 = new Box(625, 540, 70, 70);
  box8 = new Box(625, 610, 70, 70);

  //row2
  box9 = new Box(695, 100, 70, 70);
  box10 = new Box(695, 170, 70, 70);
  box11 = new Box(695, 240, 70, 70);
  box12 = new Box(695, 330, 70, 70);
  box13 = new Box(695, 400, 70, 70);
  box14 = new Box(695, 470, 70, 70);

  //row3
  box15 = new Box(770, 100, 70, 70)
  box16 = new Box(770, 170, 70, 70);
  box17 = new Box(770, 240, 70, 70);
  box18 = new Box(770, 330, 70, 70);
  box19 = new Box(770, 400, 70, 70);

  //row4
  box20 = new Box(845, 100, 70, 70);
  box21 = new Box(845, 170, 70, 70);
  box22 = new Box(845, 240, 70, 70);
  box23 = new Box(845, 330, 70, 70);
  box24 = new Box(845, 400, 70, 70);
  box25 = new Box(845, 470, 70, 70);
  box26 = new Box(845, 540, 70, 70);
  box27 = new Box(845, 610, 70, 70);
  box28 = new Box(845, 680, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, {
    x: mouseX,
    y: mouseY
  });
}