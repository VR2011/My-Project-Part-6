var earth, rocket, net, ground_control, space;
var recta, recto;
var x = 0;
var y, count, between;
var score = 0;
var health = 100;
var sat1, sat2, sat3, sat4;
var sat1i, sat2i, sat3i, sat4i;
var spaceFont;
var level1Debris = [];
var level1Debrisi = [];
var level2Debris = [];
var level2Debrisi = [];
var level3Debris = [];
var level3Debrisi = [];
var gameState = 'one';
var inPlay = false;
var tscore, thide, tgameState, tlevel;
var intro = 0;
var intro1s, intro2s, intro3s, intro4s, Song, collected, boom;
var button;
var ending;
var a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20; 
var damaged1, damaged2, damaged3, damaged4;
var DamagedR;
var ready = false;
var wall;
var up_img, down_img, up_arrow, down_arrow;
function preload() {
    earth = loadImage('earth.png');
    rocket = loadImage('rocket.png');
    net = loadImage('net.png');
    sat1i = loadImage('satellite.png');
    sat2i = loadImage('satellite2.png');
    sat3i = loadImage('satellite3.png');
    sat4i = loadImage('satellite4.png');
    astronaut = loadImage('astronaut.png');
    helmet = loadImage('helmet.png');
    scrap1 = loadImage('scrap.png');
    scrap2 = loadImage('scrap2.png');
    scrap3 = loadImage('scrap3.png');
    space = loadImage('space.jpg');
    ground_control = loadImage('ground-control.png')
    spaceFont = loadFont('Chopsic-K6Dp.ttf');
    damaged1 = loadImage('damaged1.png');
    damaged2 = loadImage('damaged2.png');
    damaged3 = loadImage('damaged3.png');
    damaged4 = loadImage('damaged4.png');
    up_img = loadImage('up_arrow.png');
    down_img = loadImage('down_arrow.png');
    intro1s = loadSound('Intro1.wav');
    intro2s = loadSound('Intro2.wav');
    intro3s = loadSound('Intro3.wav');
    Song = loadSound('Space_Debris.mp3');
    collected = loadSound('goal.wav');
    boom = loadSound('hurt.wav');
}

function setup() {
    count = 0;
    button = createButton("Next");
    button.position(displayWidth*.7, displayHeight/2.5);
    var canvas = createCanvas(displayWidth, displayHeight);
    imageMode(CENTER);
    space.width = displayWidth;
    space.height = displayHeight;
    rectMode(CENTER);
    recta = createSprite(150, 300, 50, 50);
    recta.addImage(rocket);
    recto = createSprite(recta.x - 40, recta.y + 80, 50, 50);
    recto.addImage(net);
    DamagedR = [rocket, damaged1, damaged2, damaged3, damaged4];
    wall = createSprite(0, displayHeight/2, 5, displayHeight);
    up_arrow = createSprite(displayWidth*.9, displayHeight/2, 35, 35);
    up_arrow.addImage(up_img);
    down_arrow = createSprite(displayWidth*.9, displayHeight/1.6, 35, 35);
    down_arrow.addImage(down_img);
    level1Debris.push(a0);
    level1Debris.push(a1);
    level1Debris.push(a2);
    level1Debris.push(a3);
    level1Debris.push(a4);
    level1Debris.push(a5);
    level1Debris.push(a6);
    level1Debris.push(a7);
    level1Debris.push(a8);
    level1Debris.push(a9);
    level1Debrisi.push(sat1i);
    level1Debrisi.push(helmet);
    level1Debrisi.push(scrap1);
    level1Debrisi.push(scrap2);
    level1Debrisi.push(sat1i);
    level1Debrisi.push(helmet);
    level1Debrisi.push(scrap1);
    level1Debrisi.push(scrap2);
    level1Debrisi.push(sat1i);
    level1Debrisi.push(helmet);
    level2Debris = [b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13];
    level2Debrisi.push(sat2i);
    level2Debrisi.push(astronaut);
    level2Debrisi.push(scrap2);
    level2Debrisi.push(scrap3);
    level2Debrisi.push(sat2i);
    level2Debrisi.push(astronaut);
    level2Debrisi.push(scrap2);
    level2Debrisi.push(scrap3);
    level2Debrisi.push(sat2i);
    level2Debrisi.push(astronaut);
    level2Debrisi.push(scrap2);
    level2Debrisi.push(scrap3);
    level2Debrisi.push(sat2i);
    level2Debrisi.push(astronaut);
    level3Debris = [c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19];
    level3Debrisi.push(sat3i);
    level3Debrisi.push(astronaut);
    level3Debrisi.push(sat4i);
    level3Debrisi.push(scrap1);
    level3Debrisi.push(scrap3);
    level3Debrisi.push(sat3i);
    level3Debrisi.push(astronaut);
    level3Debrisi.push(sat4i);
    level3Debrisi.push(scrap1);
    level3Debrisi.push(scrap3);
    level3Debrisi.push(sat3i);
    level3Debrisi.push(astronaut);
    level3Debrisi.push(sat4i);
    level3Debrisi.push(scrap1);
    level3Debrisi.push(scrap3);
    level3Debrisi.push(sat3i);
    level3Debrisi.push(astronaut);
    level3Debrisi.push(sat4i);
    level3Debrisi.push(scrap1);
    level3Debrisi.push(scrap3);
    for(i=0; i<level1Debris.length; i++){
        y = random(displayWidth/6, displayHeight/2.5);
        between = random(1, 5)
        level1Debris[i] = createSprite(200*i*between + displayWidth, y, 500, 400);
        level1Debris[i].addImage(level1Debrisi[i]);
    }
    for(j=0; j<level2Debris.length; j++){
        y = random(250, 400);
        between = random(1, 5)
        level2Debris[j] = createSprite(100*j*between + displayWidth*1.1, y, 500, 400);
        level2Debris[j].addImage(level2Debrisi[j]);
    }
    for(k=0; k<level3Debris.length; k++){
        y = random(250, 400);
        between = random(1, 3)
        level3Debris[k] = createSprite(75*k*between + displayWidth*1.25, y, 500, 400);
        level3Debris[k].addImage(level3Debrisi[k]);
    }
    if(intro === 1){
        intro1s.play();
    }
    if(intro === 2){
        intro2s.play();
    }
    if(intro === 3){
        intro3s.play();
    }
    Song.loop();
}

function draw() {
    background(0);
    x+=0.02;
    if(inPlay === false && health === 100 && score === 0){
        fill(255);
        textSize(35);
        image(ground_control, displayWidth/1.825, displayHeight/1.35, displayWidth*1.5, displayHeight*2);
        button.mousePressed(next);
        if(intro === 1){
            text("OH NO!!! Hey Player! A lot of Space Debris", displayWidth/4, displayHeight/2.5);
            text(" was just detected entering the atmosphere", displayWidth/4, displayHeight/2.25);
        }
        if(intro === 2){
            text("You have to clean them up", displayWidth/4, displayHeight/2.5);
            text("by collecting them in your net", displayWidth/4, displayHeight/2.25);
        }
        if(intro === 3){
            text("Don't let your rocket get hit", displayWidth/4, displayHeight/2.5);
            text("Or else it will get damaged!", displayWidth/4, displayHeight/2.25);
        }
        if(intro === 4){
            text("Request accepted.", displayWidth/3, displayHeight/7);
            text("I will proceed with", displayWidth/3, displayHeight/5.75);
            text("the mission", displayWidth/3, displayHeight/4.85);
        }
        if(intro === 5){
            inPlay === true;
        }
    }

    if(inPlay === true){
        between = random(1, 3)
        if(gameState === 'one'){
            background(0, 0, 0);
            recto.setCollider('rectangle', 0, 10, 100, 100);
            for(i=0; i<level1Debris.length; i++){
                level1Debris[i].velocityX = -5*between;
            }
        }
        if(gameState === 'two'){
            for(i=0; i<level1Debris.length; i++){
                level1Debris[i].remove();
            }
            background(0, 0, 0);
            net.width = 150;
            net.height = 181.5;
            recto.setCollider('rectangle', 0, 20, 120, 150);
            for(j=0; j<level2Debris.length; j++){
                level2Debris[j].velocityX = -6*between;
            }
        }
        if(gameState === 'three'){
            for(i=0; i<level2Debris.length; i++){
                level2Debris[i].remove();
            }
            background(0, 0, 0);
            net.width = 200;
            net.height = 242;
            recto.setCollider('rectangle', -10, 20, 150, 200);
            for(k=0; k<level3Debris.length; k++){
                level3Debris[k].velocityX = -7*between;
            }
        }
        image(space, displayWidth/2, displayHeight/2, displayWidth, displayHeight);
        button.hide();
        push();
        translate(displayWidth/2, displayHeight*1.6);
        rotate(x);
        image(earth, 0, 0, displayWidth*1.25, displayHeight*2.5);
        pop();
    
        textSize(35);
        fill(255);
        textFont(spaceFont);
        tscore = text("Score: " + score, displayWidth/1.25, displayHeight/25);
        thealth = text("Health: " + health + "%", 50, 50);
        tlevel = text("Level", displayWidth/2.2, displayHeight/27);
        textSize(50);
        if(gameState === "one"){
            fill(63, 142, 252);
        } else if(gameState === "two"){
            fill(246, 142, 95);
        } else if(gameState === "three"){
            fill(255, 49, 46);
        }
        tgameState = text(gameState, displayWidth/1.9, displayHeight/25);
        
        if(score < 350){
            gameState = "one";
        } else if(score >= 350 && score < 800){
            gameState = "two";
        } else if(score >= 800 && score < 1500){
            gameState = "three";
        } else{
            inPlay = false;
            gameState = 'four';
        }
        
        for(i=0; i<level1Debris.length; i++){
            recto.collide(level1Debris[i], captured);
            recto.x=recta.x - 40;
            recto.y=recta.y + 80;
        }
        for(i=0; i<level1Debris.length; i++){
            recta.collide(level1Debris[i], hurt);
            recto.x=recta.x - 40;
            recto.y=recta.y + 80;
        }
        for(i=0; i<level1Debris.length; i++){
            wall.collide(level1Debris[i], hurtL);
        }
        for(i=0; i<level2Debris.length; i++){
            recto.collide(level2Debris[i], captured);
            recto.x=recta.x - 40;
            recto.y=recta.y + 80;
        }
        for(i=0; i<level2Debris.length; i++){
            recta.collide(level2Debris[i], hurt);
            recto.x=recta.x - 40;
            recto.y=recta.y + 80;
        }
        for(i=0; i<level2Debris.length; i++){
            wall.collide(level2Debris[i], hurtL);
        }
        for(i=0; i<level3Debris.length; i++){
            recto.collide(level3Debris[i], captured);
            recto.x=recta.x - 40;
            recto.y=recta.y + 80;
        }
        for(i=0; i<level3Debris.length; i++){
            recta.collide(level3Debris[i], hurt);
            recto.x=recta.x - 40;
            recto.y=recta.y + 80;
        }
        for(i=0; i<level3Debris.length; i++){
            wall.collide(level3Debris[i], hurtL);
        }

        if(recta.y <= 500){
            if(keyIsDown(40)){
                recta.y += 5;
                recto.y += 5;
            }
        }
        if(recta.y >= 100){
            if(keyIsDown(38)){
                recta.y -= 5;
                recto.y -= 5;
            }
        }

        if(mousePressedOver(up_arrow)){
            up();
        }
        if(mousePressedOver(down_arrow)){
            down();
        }

        drawSprites();
        if(health <= 0){
            inPlay = false;
        }
    }
    if(inPlay === false && health <= 0){
        Song.stop();
        recto.visible = false;
        recta.visible = false;
        earth.visible = false;
        tscore.visible = false;
        thealth.visible = false;
        tlevel.visible = false;
        tgameState.visible = false;
        textSize(100);
        fill(255);
        textFont(spaceFont);
        text("GAME       OVER", displayWidth/3.25, displayHeight*.375);
        textSize(50);
        text("Your      score       was     " + score, displayWidth/3.1, displayHeight/2);
    }

    if(inPlay === false && gameState === 'four'){
        recto.visible = false;
        recta.visible = false;
        earth.visible = false;
        tscore.visible = false;
        thealth.visible = false;
        tlevel.visible = false;
        tgameState.visible = false;
        textSize(100);
        fill(255);
        textFont(spaceFont);
        text("You Saved the World!!! You Won!", displayWidth/20, displayHeight*.375);
        textSize(50);
        text("Your      score       was     " + score, displayWidth/3.1, displayHeight/2);
    }
    
    if(health >= 20){
        recta.addImage(DamagedR[count]);
    }
}

/*function isTouching(object1, object2) {
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true;  
    } else {
        return false;
    }
}*/

function captured(spriteA, spriteB) {
    collected.play();
    spriteA.velocityX = 0;
    spriteB.remove();
    score+=50;
}

function hurt(spriteA, spriteB) {
    boom.play();
    spriteB.remove();
    spriteA.velocityX = 0;
    health -= 20;
    count+=1;
}

function next() {
    intro += 1;
    if(intro >= 5){
        inPlay = true;
        button.hide();
    }
}

function hurtL(spriteA, spriteB) {
    health = 0;
}

function mousePressed() {
    if(recta.y >= 100){
        recta.y -= 5;
        recto.y -= 5;
    }
}

function up() {
    if(recta.y >= 100){
        recta.y -= 5;
        recto.y -= 5;
    }
}

function down() {
    if(recta.y <= 500){
        recta.y += 5;
        recto.y += 5;
    }
}