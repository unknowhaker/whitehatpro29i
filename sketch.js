const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var ground,stand,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,poli,slingShot;
function setup() {
    createCanvas(1200, 800);
      
    engine = Engine.create();
    world = engine.world;
    //1075,725,975,625
    ground = new Ground(600,780,1200,10);
    stand = new Ground(900,700,350,10);
    box1 = new Box(750,50,50);
    box2 = new Box(800,50,50);
    box3 = new Box(850,50,50);
    box4 = new Box(900,50,50);
    box5 = new Box(950,50,50);
    box6 = new Box(1000,50,50);
    box7 = new Box(1050,50,50);
    box8 = new Box(800,50,50);
    box9 = new Box(850,50,50);
    box10 = new Box(900,50,50);
    box11 = new Box(950,50,50);
    box12 = new Box(1000,50,50);
    box13 = new Box(850,50,50);
    box14 = new Box(900,50,50);
    box15 = new Box(950,50,50);
    box16 = new Box(900,50,50);
    poli = new Poligon(50,200,50);
    slingShot = new SlingShot(this.poli,{x:100,y:200});
}
  
function draw() {
    background(220);
    Engine.update(engine);
    ground.display();
    stand.display();
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
    box14.display();
    box15.display();
    box16.display();
    poli.display();
    slingShot.display();
}
function mouseDragged (){
    Matter.Body.setPosition(poli.body,{x:mouseX,y:mouseY});
}

function mouseReleased (){
    slingShot.fly();
}