let mobilenet;
let classifier; 
let output = '';
let button1, button2, trainButton;
let userImage;
let fire = new Array (5);
let water = new Array (5);
let grass = new Array (5);
let normal = new Array (5);
let fighting = new Array (5);
let flying = new Array (5);
let poison = new Array (5);
let electric = new Array (5);
let psychic = new Array (5);
let bug = new Array (5);
let rock = new Array (5);

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
    fire[0] = createImg("images/fire/charmander.jpg");
    fire[1] = createImg("images/fire/flareon.jpg");
    fire[2] = createImg("images/fire/magmar.jpg");
    fire[3] = createImg("images/fire/vulpix.jpg");
    fire[4] = createImg("images/fire/arcanine.jpg");

    water[0] = createImg("images/water/squirtle.jpg");
    water[1] = createImg("images/water/poliwag.jpg");
    water[2] = createImg("images/water/lapras.jpg");
    water[3] = createImg("images/water/gyarados.jpg");
    water[4] = createImg("images/water/golduck.jpg");

    grass[0] = createImg("images/grass/bulbasaur.jpg");
    grass[1] = createImg("images/grass/victreebel.jpg");
    grass[2] = createImg("images/grass/bellsprout.jpg");
    grass[3] = createImg("images/grass/exeggutor.jpg");
    grass[4] = createImg("images/grass/ivysaur.jpg");

    normal[0] = createImg("images/normal/chansey.jpg");
    normal[1] = createImg("images/normal/clefable.jpg");
    normal[2] = createImg("images/normal/wigglytuff.jpg");
    normal[3] = createImg("images/normal/rattata.jpg");
    normal[4] = createImg("images/normal/lickitung.jpg");

    fighting[0] = createImg("images/fighting/hitmonchan.jpg");
    fighting[1] = createImg("images/fighting/hitmonlee.jpg");
    fighting[2] = createImg("images/fighting/mankey.jpg");
    fighting[3] = createImg("images/fighting/machamp.jpg");
    fighting[4] = createImg("images/fighting/machoke.jpg");

    flying[0] = createImg("images/flying/pidgey.jpg");
    flying[1] = createImg("images/flying/doduo.jpg");
    flying[2] = createImg("images/flying/pidgeot.jpg");
    flying[3] = createImg("images/flying/spearow.jpg");
    flying[4] = createImg("images/flying/fearow.jpg");

    poison[0] = createImg("images/poison/arbok.jpg");
    poison[1] = createImg("images/poison/gastly.jpg");
    poison[2] = createImg("images/poison/koffing.jpg");
    poison[3] = createImg("images/poison/grimer.jpg");
    poison[4] = createImg("images/poison/nidoran-m.jpg");
    
    electric[0] = createImg("images/electric/electabuzz.jpg");
    electric[1] = createImg("images/electric/jolteon.jpg");
    electric[2] = createImg("images/electric/pikachu.jpg");
    electric[3] = createImg("images/electric/zapdos.jpg");
    electric[4] = createImg("images/electric/raichu.jpg");

    psychic[0] = createImg("images/psychic/slowbro.jpg");
    psychic[1] = createImg("images/psychic/mew.jpg");
    psychic[2] = createImg("images/psychic/mewtwo.jpg");
    psychic[3] = createImg("images/psychic/mr-mime.jpg");
    psychic[4] = createImg("images/psychic/slowpoke.jpg");

    bug[0] = createImg("images/bug/paras.jpg");
    bug[1] = createImg("images/bug/parasect.jpg");
    bug[2] = createImg("images/bug/scyther.jpg");
    bug[3] = createImg("images/bug/venonat.jpg");
    bug[4] = createImg("images/bug/weedle.jpg");

    rock[0] = createImg("images/rock/diglett.jpg");
    rock[1] = createImg("images/rock/kabuto.jpg");
    rock[2] = createImg("images/rock/rhydon.jpg");
    rock[3] = createImg("images/rock/sandshrew.jpg");
    rock[4] = createImg("images/rock/onix.jpg");

    createCanvas(640, 520);
    background(0);
    mobilenet = ml5.featureExtractor('MobileNet', { numLabels: 11 },modelReady);
     mobilenet.numClasses=11;
    classifier = mobilenet.classification(userImage, imageReady);
    
    button1 = createButton ('Add');
    button1.mousePressed(function(){
        for(var i = 0; i < 5; i++){
            classifier.addImage(fire[i], 'fire');
        }

        for(var i = 0; i < 5; i++){
            classifier.addImage(water[i], 'water');
        }
        
        for(var i = 0; i < 5; i++){
            classifier.addImage(grass[i], 'grass');
        }
        for(var i = 0; i < 5; i++){
            classifier.addImage(normal[i], 'normal');
        }
        for(var i = 0; i < 5; i++){
            classifier.addImage(fighting[i], 'fighting');
        }
        for(var i = 0; i < 5; i++){
            classifier.addImage(flying[i], 'flying');
        }
        for(var i = 0; i < 5; i++){
            classifier.addImage(poison[i], 'poison');
        }
        for(var i = 0; i < 5; i++){
            classifier.addImage(electric[i], 'electric');
        }
        for(var i = 0; i < 5; i++){
            classifier.addImage(psychic[i], 'psychic');
        }
        for(var i = 0; i < 5; i++){
            classifier.addImage(bug[i], 'bug');
        }
        for(var i = 0; i < 5; i++){
            classifier.addImage(rock[i], 'rock');
        }

        console.log('done adding');

    });
/*
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
*/
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
        resizeCanvas(userImage.width, userImage.height);
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