function preload(){}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
}
function preload() { }
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotposes)
}

function draw() {
    image(video, 0, 0, 300, 300);
}
function take_snapshot() {
    save('pic.png')
}

function modelLoaded() {
    console.log("posenetmodel has been intialized");
}
function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nose x=" + results[0].pose.nose.x);
        console.log("nose y=" + results[0].pose.nose.y);
    }
}