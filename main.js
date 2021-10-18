

difference = 0;
leftWristX = 0;
rightWristX= 0;
function setup(){
 video= createCapture(VIDEO);
 video.size(550,500);

 canvas = createCanvas(550,550);
 canvas.position(560,150);

 poseNet = ml5.poseNet(video,modelLoaded);
 poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("posenet is initialized");
}
function draw(){
    background('#32CD32');
    document.getElementById("text_size").innerHTML = "width and hieght of the message will be "+difference+"px";
    textsize(difference);
    fill('#808080');
    text('ouail',50,400);
    
    
    
    

}

function gotPoses(results){
if(results.length>0){
    console.log(results);
leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);
console.log("leftWrist = " + leftWristX + "rightWrist = " + rightWristX + "difference"+ difference);
}
}