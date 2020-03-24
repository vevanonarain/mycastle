const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var rect1,rect2,rect3,rect4,rect5,rect6,rect7,rect8,rect9,rect10,rect11,rect12,rect13,rect14,rect15,rect16,rect17;

function setup() {
 var canvas =createCanvas(400,400);
 engine=Engine.create();
 world=engine.world;

rect1=new Rectangles(300,370,10,50);
rect2=new Rectangles(100,370,10,50);
rect3=new Rectangles(200,345,220,10);
rect4=new Rectangles(250,290,10,100);
rect5=new Rectangles(150,290,10,100);
rect6=new Rectangles(200,240,120,10);
rect7=new Rectangles(325,290,10,200);
rect8=new Rectangles(375,290,10,200);
rect9=new Rectangles(25,290,10,200);
rect10=new Rectangles(75,290,10,200);
rect11=new Rectangles(280,240,10,200);
rect12=new Rectangles(120,240,10,200);
rect13=new Rectangles(200,140,200,10);
rect14=new Rectangles(350,190,90,10);
rect15=new Rectangles(50,190,90,10);
rect16=new Rectangles(200,95,10,80);
rect17=new Rectangles(215,65,40,20);

}

function draw() {
  background(0);  
  drawSprites();
  Engine.update(engine);
  
  rect1.display();
  rect2.display();
  rect3.display();
  rect4.display();
  rect5.display();
  rect6.display();
  rect7.display();
  rect8.display();
  rect9.display();
  rect10.display();
  rect11.display();
  rect12.display();
  rect13.display();
  rect14.display();
  rect15.display();
  rect16.display();
  rect17.display();
}