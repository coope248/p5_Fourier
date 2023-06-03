let scl = 50
let sWave = [];
let sHue = 180;
let i = 0;
let t = 0;
let tMult = -0.05;
let xMult = 1;
function setup() {
  createCanvas(5100, 200);
  colorMode(HSB);
}

function draw() {
  let x = 0;
  let y = 0;
  background(0, 0, 70);
  translate(100, height / 2);
  let yp = 0;
  let xp = 0;
  let a = tMult * t++;
  N = (0+floor(frameCount / (4 * PI/abs(tMult))))//%100;
  for (let i = 0; i < N; i++) {
    n = 2 * i + 1; //square
    radius = scl / n; //square
    
//     n = 1+i; //sawtooth
//     radius = scl*pow(-1,n)/ pow(n,1); // sawtooth
    
//     m = 2 //triangle
//     n = i+1;  //triangle
//     radius = scl*((pow(-1,n)*pow(m,2))/(3*(m-1)*pow(n,2)))*sin((n*(m-1)*PI)/m); //triangle
    x += radius * cos(n * a);
    y += radius * sin(n * a);
    fill((300 + 100 * i+t/100) % 360, 100, 100);
    stroke(0, 0, 0);
    ellipse(xp, yp, 2 * radius);
    line(xp, yp, x, y);
    
    xp = x;
    yp = y;
  }
  sWave.unshift(y);
  stroke(0)
  line(x, y, 200, y);
  stroke(sHue, 100, 100);
  beginShape();
  for (let j = 0; j < sWave.length; j++) {
    noFill();
    stroke(sHue, 100, 100);
    vertex(200 + xMult * j, sWave[j]);
  }
  endShape();
  if (sWave.length > (width - 200) / xMult) {
    sWave.pop();
  }
}
