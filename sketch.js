var Hball, database;
var position;
function setup(){
    createCanvas(500,500);
    database= firebase.database()
    Hball= createSprite(250,250,10,10);
    Hball.shapeColor= 'blue';
    var Hballref= database.ref('ball/position')
    Hballref.on('value',readPosition,showerror)
}

function draw(){
    background("white");

    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
function readPosition(data){
    position= data.val();
    Hball.x=position.x;
    Hball.y=position.y
}

function writePosition(x,y){
    database.ref('ball/position').set({
        'x':position.x+x,
        'y':position.y+y,
    })
}
function showerror(){
   console.log('sorry not being able to upload')
}
