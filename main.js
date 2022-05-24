difference = 0;
rightWristX = 0;
leftWristY = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(1000, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

    function draw(){
        background('#fab973');

        document.getElementById("font_size").innerHTML = "Text's font size: " + difference + "px";
        textSize(difference);
        fill("#470b0b");
        text("Jam dog", 50, 400);

    }

    function modelLoaded(){
        console.log('PoseNet is initialized.');

    }

    function gotPoses(results){
        if(results.length > 0 ){
            console.log(results);
            leftWristX = results[0].pose.leftWrist.x;
            rightWristX = results[0].pose.rightWrist.x;
            difference = floor(leftWristX - rightWristX);
            console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = "+ difference);
        }
    }