let mobilenet;
let classifier; 
let output = '';
let button1, button2, trainButton;
let userImage;

function modelReady(){
    console.log('model is ready');
    
}
function customModelReady(){
    console.log('custom model is ready');
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
        $(".guess").text(results[0].label);
        console.log(results[0].label);
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
        console.log('added fire');
    });

    button2 = createButton ('Water');
    button2.mousePressed(function(){
        classifier.addImage(userImage, 'Water');
        console.log('added water');
    });

    button3 = createButton ('Grass');
    button3.mousePressed(function(){
        classifier.addImage(userImage, 'Grass');
        console.log('added grass');
    });

    button4 = createButton ('Normal');
    button4.mousePressed(function(){
        classifier.addImage(userImage, 'Normal');
        console.log('added normal');
    });

    button5 = createButton ('Fighting');
    button5.mousePressed(function(){
        classifier.addImage(userImage, 'Fighting');
        console.log('added fighting');
    });

    button6 = createButton ('Flying');
    button6.mousePressed(function(){
        classifier.addImage(userImage, 'Flying');
        console.log('added flying');
    });

    button7 = createButton ('Poison');
    button7.mousePressed(function(){
        classifier.addImage(userImage, 'Poison');
        console.log('added poison');
    });

    button8 = createButton ('Electric');
    button8.mousePressed(function(){
        classifier.addImage(userImage, 'Electric');
        console.log('added electric');
    });

    button9 = createButton ('Psychic');
    button9.mousePressed(function(){
        classifier.addImage(userImage, 'Psychic');
        console.log('added psychic');
    });

    button10 = createButton ('Bug');
    button10.mousePressed(function(){
        classifier.addImage(userImage, 'Bug');
        console.log('added bug');
    });

    button11 = createButton ('Rock');
    button11.mousePressed(function(){
        classifier.addImage(userImage, 'Rock');
        console.log('added rock');
    });

    trainButton = createButton ('train');
    trainButton.mousePressed(function(){
        classifier.train(function(loss){
            if(loss == null){
                console.log('training complete');
            }else{
                console.log(loss);
            }
        });
    });
}

$(document).ready(function(){
    console.log('ready');
    $('.inputButton').click(function(){
        userImage = createImg($('.input').val(), imageReady);
        userImage.hide();
        background(0);
        console.log($('.input').val());
    });
    
    $('.classifyButton').click(function(){
        classifier.classify(userImage, gotResults);
    });

    $('.saveButton').click(function(){
        classifier.save();
    })
    $('.loadButton').click(function(){
        classifier.load('./model.json', customModelReady);
    });
});