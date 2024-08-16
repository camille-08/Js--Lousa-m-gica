function setup() {
    createCanvas(600, 600);
    background("lightcyan");
  }
  
  function draw() {
    
   
  
    stroke(" navy");
    fill("cyan");
  
    //console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  