  let textArray = ["But thy eternal summer shall not fade",
  "Nor lose possession of that fair thou owest",
  "Nor shall Death brag thou wanderest in his shade",
  "When in eternal lines to time thou growest",
  "So long as men can breathe or eyes can see",
  "So long lives this, and this gives life to thee"]
  let i = 0;
  let opacity = 100;



function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(102,205,170,5);
}

function mouseClicked(){
  textSize(random(5,70));
  textAlign(CENTER, CENTER);
  fill(255);
 text(textArray[i], mouseX, mouseY);
 i = i+1;
 if(i >= textArray.length){
  i=0;
 }
}