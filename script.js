function setup(){
    createCanvas(600,600);
    background("gray");
}
function draw(){
    textSize(60);
    text(time.hour() + ":" + time.min() + ":" + time.sec(),200,200);
}

