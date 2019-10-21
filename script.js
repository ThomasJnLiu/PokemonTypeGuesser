let mobilenet;
let video;
let classifier; 
let output = '';
let button1, button2, trainButton;

function modelReady(){
    console.log('model is ready');
}

function videoReady(){
    console.log('video is ready');
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }else{
        output = results[0].label;
        mobilenet.classify(gotResults);
    }
 }
function setup(){
    createCanvas(640, 520);
    background(0);
    video = createCapture(VIDEO);
    video.hide();
    mobilenet = ml5.featureExtractor('MobileNet', modelReady);
    classifier = mobilenet.classification(video, videoReady);

    button1 = createButton ('Object1');
    button1.mousePressed(function(){
        classifier.addImage('Object1');
    });

    button2 = createButton ('Object2');
    button2.mousePressed(function(){
        classifier.addImage('Object2');
    });

    trainButton = createButton ('train');
    trainButton.mousePressed(function(){
        classifier.train(function(loss){
            if(loss == null){
                console.log('traning complete');
                classifier.classify(gotResults);
            }else{
                console.log(loss);
            }
        });
    });
}

function draw(){
    background(0);
    image(video,0 ,0);
    fill(255);
    textSize(32);
    text(output, 10, height -10);
}