let mobilenet;
let classifier; 
let output = '';
let button1, button2, trainButton;
let userImage;

function modelReady(){
    console.log('model is ready');
}
function imageReady(){
    image(userImage, 0, 0, width, height);
    console.log('image is ready');
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }else{
        output = results[0].label;
        //mobilenet.classify(gotResults);
    }
 }
function setup(){
    createCanvas(640, 520);
    background(0);
    mobilenet = ml5.featureExtractor('MobileNet', modelReady);
    classifier = mobilenet.classification(userImage, imageReady);

    button1 = createButton ('Fire');
    button1.mousePressed(function(){
        classifier.addImage(userImage, 'Fire');
    });

    button2 = createButton ('Water');
    button2.mousePressed(function(){
        classifier.addImage(userImage, 'Water');
    });

    trainButton = createButton ('train');
    trainButton.mousePressed(function(){
        classifier.train(function(loss){
            if(loss == null){
                console.log('training complete');
                //classifier.classify(gotResults);
            }else{
                console.log(loss);
            }
        });
    });
}

function draw(){
    textSize(32);
    text(output, 10, height -10);
}

$(document).ready(function(){
    console.log('ready');
    $('.inputButton').click(function(){
        userImage = createImg($('.input').val(), imageReady);
        userImage.hide();
        console.log($('.input').val());
    });
    
})