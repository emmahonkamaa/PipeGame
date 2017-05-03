var game = new Phaser.Game(900, 490, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var gridH = 490;
var gridW = 735;
var squareSize = 70;

function preload() {
    game.stage.backgroundColor = '#005a77';
    game.load.image('start', 'putket/start.png');
    game.load.image('straight1', 'putket/straight1.png');
    game.load.image('straight2', 'putket/straight2.png');
    game.load.image('corner1', 'putket/corner1.png');
    game.load.image('corner2', 'putket/corner2.png');
    game.load.image('corner3', 'putket/corner3.png');
    game.load.image('corner4', 'putket/corner4.png');
    //Tällä ladataan spritet (esim. ne kalat)
    //game.load.spritesheet('fisu', 'assets/dude.png', 32, 48);
}

function create() {
    drawGrid(1.5*squareSize, 0, gridW, gridH);
    drawGrid(0, 0, squareSize, gridH);
    var pipesInGame = game.add.group();
    var pipesWaiting = game.add.group();
    startingPipe = game.add.sprite(140, 350, 'start');
    createMega();
    fillWaitingRoom();
    drawWaitingRoom();
    //spriten luominen
    //game.add.sprite(0, 0, 'fisu');


}


function update() {
    fillWaitingRoom();
    //drawWaitingRoom();
}

//var bench7 = ["","","","","","",""];
var latestY = 0;

function drawWaitingRoom(){
  for(var i=0; i<7; i++){
    var x = game.add.sprite(0,i*squareSize, waitingRoom[i].img);
    enableDrag(x);
    //x.input.enableSnap(squareSize, squareSize, false, true);
    var a = i;
    x.events.onDragStart.add(function(){latestY=a});
    x.events.onDragStop.add(function(){fixLocation(this, latestY)}, this);
    //x.events.onDragStop.add(fixLocation(x, startLoc));
    console.log(latestY);
    waitingRoom[i]=x;
  }
};

function fixLocation(item, location) {
    var origLocY = location*squareSize;
    //console.log(item.x " + " item.y);
    // Move the items when it is already dropped.
    if (item.x < 3*squareSize || item.x > 12*squareSize) {
        console.log(latestY);
        item.x = 0;
        item.y = origLocY;
    }
    else{
        var newLocX = (item.x+squareSize/2) + 3*squareSize;
        var newLocY = (item.y+squareSize/2);
        item.x = newLocX;
        item.y = newLocY;
        megaArray[newLocX][newLocY] = item;

    }

}


/*function enableDragWaiting(){
    for(var i=0; i<7; i++){
        enableDrag(waitingRoom[i]);
    }
};
*/
