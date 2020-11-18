
function setup(){
  noFill();
  for(let i = 1; i < 11; i++){
  let x=i*9

  stroke(0,0,255)

  if(i>5){
    stroke(255,0,0)
  }

  ellipse(50,50,x,x)
}
}
