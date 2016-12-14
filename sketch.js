var paint = false;

var col = {
  r: 0,
  g: 0,
  b: 0
};

function setup() {
	var canvasDiv = document.getElementById("test");
	var width = canvasDiv.offsetWidth-50;
	
  var myCanvas = createCanvas(width,width*0.5625);
	myCanvas.parent('test');
  background(255);
}

function draw() {
  if (paint) {
    noStroke();
    fill(col.r, col.g, col.b);
    ellipse(mouseX,mouseY,20,20);
  }
}

function touchStarted() {
  col.r = random(0, 255);
  col.g = random(0, 255);
  col.b = random(0, 255);
  paint = true;
}

function touchEnded() {
  paint = false;
}

function download() {
	var downcanvas = document.getElementById("defaultCanvas0");
	downloadURI(downcanvas.toDataURL("image/png"), "test.png");
}

function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
}