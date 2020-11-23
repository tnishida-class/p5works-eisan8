// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  noStroke();
  createCanvas(800, 800);
  background(255);
  balloon("I love sakurazaka46",20,20);
}

function balloon(t,x,y){

  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let m = w+50;
  let l = h+50;
  fill(200);
  rect( x , y , m, l );
  fill(0);
  text(t, x+m/6, y+l/2 );
  fill(200);
triangle(x+m,y+l, x+m-30,y+l, x+m+15,y+l+20);
}
