noseX=0;
noseY=0;
function preload() {  
   clown_nose = loadImage('https://i.postimg.cc/BvBrZWsf/clown-nose-clipart-2.png');  
}

function setup()  {
  canvas = createCanvas(300,300);
  canvas.center(); 
  video = creatCapture(VIDEO);
  vidoe.size(300,300);
  video.hide();


  posNet = ml5.posNet(video, modelLoaded)
  posNet.on('pose', gotPoses)
} 

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function draw() {
   image(video, 0,0,300,300);
   fill(255,0,0);
   stroke(255,0,0);
   circle(noseX, noseY, 20);
   image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot() {
save ('myFilterImage.png')    
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x = "+ results[0].pose.nose.x);
    console.log("nose y = "+ results[0].pose.nose.y);
  }
}