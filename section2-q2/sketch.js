// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;

 noStroke();

  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
let n;
n=i+j
      if(n%2==0){
        fill(255);  }

      else{
fill(150);  }

    rect(size * i,size * j,size,size);

    if(n%2==1 && j<3){
      fill(255,0,0)
      ellipse(size*i+12.5, size*j+12.5,22)
       }

    if(n%2==1 && j>4){
      fill(0)
        ellipse(size*i+12.5, size*j+12.5,22)
       }
}
  }
}
