Status = "";
img = "";

function back() {
    window.location = "index.html";
}

function preload() {
    img = loadImage("home_interior.png");
}

function setup() {
    canvas = createCanvas(380 , 380);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded");
    Status = true;
}

function gotResults(error , results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
    }
}