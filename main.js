var mustache_x=0
var mustache_y=0

function preload() { 
    mustache=loadImage("https://i.postimg.cc/g26nJJQf/m.png");
}
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
    /*fill(255,0,0);
    stroke (0,255,0);
    circle(mustache_x, mustache_y, 20)*/
    image(mustache,mustache_x, mustache_y, 70,70)
}
function take_snapshot() {
    save('my_pic.png')
}

function modelLoaded() {
    console.log("posenetmodel has been intialized");
}
function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
      mustache_x=results[0].pose.nose.x-30;
        mustache_y=results[0].pose.nose.y-30;
        console.log("mustache_x=" + mustache_x);
        console.log("mustache_y=" + mustache_y);
    }
    }
