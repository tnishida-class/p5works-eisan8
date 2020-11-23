// テキスト「関数を作る 値を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(200, 200);
  calendar(2019, 10);

  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
  }
}

function calendar(y, m){

  let size = width/7
  let n = 0
 for (let i = 0; i <= 5; i++){
   for(let t =0; t <=6; t++){

 rect(size*t,size*i,size,size);

  let dow = dayOfWeek(y, m, 1);
  for(let d = 1; d <= daysInMonth(y, m); d++){

    textSize(5);
    textFont("serif");
    text("d", dow*width+3, n*width+3);
    if(dow=6){
      n += 1;
    }
  }



  //  rect( dayOfWeek(y,m,d)*size , n*size , size , size);


 }  }
    // BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
  }

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){

return isLeapYear(y) ? 366 : 355;
}


function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){

let c =dayOfYear(y,m,d);
let e =Math.floor((y-2000)/4);
let f =(e*2+2+(y-2001-e))%7;
let a =(c+f+5)%7; //

console.log(a) ;
    // BLANK[2]
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}
