noseX=0;
noseY=0;

function preload(){
    clown_nose = loadImage('https://static.vecteezy.com/system/resources/previews/024/134/734/original/light-blue-butterfly-free-png.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.position(500, 250);
    video=createCapture(VIDEO);
    video.hide();

    tint_color = "";

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-17;
        console.log("nose x = "+ results[0].pose.nose.x);
        console.log("nose y = "+ results[0].pose.nose.y);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);  
    image(clown_nose, noseX, noseY, 30, 30);
    tint(tint_color);
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}
