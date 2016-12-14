var col = {
  r: 0,
  g: 0,
  b: 0
};

function setup() {
	var canvasDiv = document.getElementById("test");
	var width = canvasDiv.offsetWidth-50;
  //var aspect = 0.5625;
  var aspect = window.screen.availHeight / window.screen.availWidth;
  var height = (width*aspect)-(window.screen.availHeight/10);
	
  var myCanvas = createCanvas(width, height);
	myCanvas.parent('test');
  background(255);
}

function draw() {
}

function touchStarted() {
  col.r = random(0, 255);
  col.g = random(0, 255);
  col.b = random(0, 255);
}

function touchMoved() {
  noStroke();
  fill(col.r, col.g, col.b);
  ellipse(mouseX,mouseY,20,20);
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