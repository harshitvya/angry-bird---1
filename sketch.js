var move, unmove;

function setup() {
    createCanvas(800, 400);
    move = createSprite(200, 200, 50, 50);
    unmove = createSprite(400, 200, 100, 100);
    move.debug = true;
    unmove.debug = true;
}

function draw() {
    background(0);
    move.x = mouseX;
    move.y = mouseY;
    console.log(move.x - unmove.x);
    console.log(unmove.x - move.x);
    if (move.x - unmove.x < (move.width / 2 + unmove.width / 2) && unmove.x - move.x < (move.width / 2 + unmove.width / 2) && unmove.y - move.y < (move.height / 2 + unmove.height / 2) && move.y - unmove.y < (move.height / 2 + unmove.height / 2)) {
        move.shapeColor = "blue";
        unmove.shapeColor = "blue";
    } else {
        move.shapeColor = "red";
        unmove.shapeColor = "red";
    }
    drawSprites();
}