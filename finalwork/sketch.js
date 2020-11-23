// 最終課題を制作しよう

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(255);
  balloon("4と6を押してください",400,400);
  comment("推しメンを知りたい人はダブルクリック",800,400);
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

  function balloon(t,x,y){

  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let a = w+50;
  let b = h+50;
  stroke(0);
  rect( x , y , a, b );
  fill(0);
  text(t, x+a/6, y+b/2 );
}
function comment(t,x,y){
let w = textWidth(t);
let h = textAscent() + textDescent();
let a = w+50;
let b = h+50;
stroke(255);
rect( x , y , a, b );
fill(0);
text(t, x+a/6-20, y+b/2 );
}
let n;
let m;
let l;
let u;
  function draw() {

  strokeWeight(4);
  stroke(255);
  fill(136,72,152);
  triangle(12*n*m,120*n*m,116*n*m,120*n*m,116*n*m,10*n*m);

  fill(255);
  triangle(3*n*m,112*n*m,109*n*m,112*n*m,108*n*m,4*n*m);

  stroke(255,219,237);
  fill(255);
  triangle(0,108*n*m,106*n*m,108*n*m,106*n*m,0);

strokeWeight(0.1)
  fill(255,219,237);
  textFont("MS PMINCHO")
  textSize(33*n*m)
  text("櫻坂",45*n*m,150*n*m)

  fill(255,219,237);
  textSize(32*n*m);
  textFont("serif");
  text("46", 68*n*m, 100*n*m);

  fill(255,96,208);
  textSize(120);
  textFont("MS PMINCHO");
  text("小池美波!!", -200*u, 200);

fill(0,116,201);
  textSize(120);
  textFont("MS PMINCHO");
  text("小林",-200*u,700);

fill(238,236,115);
  textSize(120);
  textFont("MS PMINCHO");
  text("由依!!",-280*u,700);

}



function keyPressed(){
  if(key == "4"){n=-3;
  }
  else if(key=="6"){m=-1;
  }
  else {n=0
  }
}

function doubleClicked(){
u=-3;
}
