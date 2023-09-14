function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("pink");
  stroke("withe");
  fill("red");

  // console.log(mouseIsPressed);

  if (mouseIsPressed) {
  }
  rect(mouseX, mouseY, 100, 100);
}
