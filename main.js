noseX=0
noseY=0
function preload()
{
    moustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}
function setup()
{
 canvas=createCanvas(300,300)
 canvas.center()
     video=createCapture(VIDEO)
     video.size(300,300)
     video.hide()
 pose=ml5.poseNet(video,modelloaded)
 pose.on('pose',gotposses)
}
function gotposses(results)
{
    if(results.length>0)
    {
noseX=results[0].pose.nose.x-40
noseY=results[0].pose.nose.y

    }
}
function draw()
{

    image(video,0,0,300,300)
    image(moustache,noseX,noseY,80,35)
}
function takesnapshot()
{
    save('mahip.png')
}
function modelloaded()
{
    console.log("working")
}