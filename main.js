noseX = 0;
noseY = 0;

function preload() {
    clown = loadImage("https://i.postimg.cc/nVN93h61/1030148845-width-178-height-178.webp");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown, noseX, noseY, 50, 48);
}

function modelLoaded() {
    console.log('Posenet is initialized');
}

function take_snapshot() {
    save('pic_filter.png');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 22;
        noseY = results[0].pose.nose.y - 15;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
    }
}
