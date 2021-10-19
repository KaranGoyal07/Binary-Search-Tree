// Global Variables
let colour = 220;
let font;

function setup() {
  font = 'Source Code Pro';
  textFont(font);

  // Creating a canvas
  createCanvas(960, 480);
  background(50);

  // Making tree object and adding values to the tree
  let tree = new Tree();
  for (let i = 0; i < 10; i++) {
    tree.addValue(floor(random(50)));
  }
  // Outputting the final sorted result
  tree.traverse();
  console.log(tree);
}

// Using draw function for creating the reload button
function draw() {
  rectMode(CENTER);
  fill(35);
  rect(width / 2 - 3, 420 + 3, 363, 43);
  fill(colour);
  rect(width / 2, 420, 360, 40);
  textAlign(CENTER);
  fill(50);
  textSize(24);
  text("RELOAD", width / 2, 428);
}

// Checks if the mouse is clicked and then calls clicked() function
function mouseClicked() {
  clicked();
}

// Checks if the mouse is between the reload button
function clicked() {
  if (mouseX < 654 && mouseX > 292 && mouseY < 440 && mouseY > 400) {
    colour = 180;
    setTimeout(location.reload(), 500);
  }
}
