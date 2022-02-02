var nose_x= 0;
var nose_y= 0;
var right_wrist_x=0;
var left_wrist_x= 0;
var difference= 0;
function setup(){

    canvas= createCanvas(500, 408.977);
    canvas.position(560, 164.99);
    
    video= createCapture(VIDEO);
    video.size(481.59, 500)
     
    poseNet= ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses)


}

function modelloaded(){

    console.log ("poseNet model is initialized")
}

function gotPoses(results){

    if (results.length>0) {
        console.log(results);
    nose_x= results[0].pose.nose.x;
    nose_y= results[0].pose.nose.y;
    console.log("nosex= " + nose_x+ " nosey= " + nose_y);
    left_wrist_x= results[0].pose.leftWrist.x;
    right_wrist_x=results[0].pose.rightWrist.x;
        difference= floor(right_wrist_x-left_wrist_x);
        console.log("The difference is..."+ difference);
    }


}

function draw(){

background("#50BFE6");
document.getElementById=("square_sides").innerHTML="The Size of The Square Is..."+difference;
fill("Yellow");
stroke("black");
square(nose_x, nose_y, difference)

    
}

