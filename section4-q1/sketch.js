// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let size;
//let n;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}


function draw(){
  background(160, 192, 255);

  count = (count + 1) % cycle;
  if(count>49){
    size=50-(count-50);}

 else{size = count;}



//function KeyPressed(){
//  if(key == " "){ n=2;}
//else{n=1;}}

  // BLANK[1]
  ellipse(width / 2, height / 2, size);
}
