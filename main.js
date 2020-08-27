const game = new Game;

var timer;
var counter = 60;
var seconds, minutes;


function timeIt() {
  if (counter > 0) {
    counter--;
  }
	minutes = floor(counter/60);
  seconds = counter % 60;  
}
  

function setup() {
    createCanvas(500, 500);
    background(199, 188, 159)
    setInterval(timeIt, 1000);
    game.setup()
  
  }
  
  function draw() {
    game.drawGame()
  }

  function keyPressed() {
    if(keyCode == 32 && (game.gameStatus == "game over" || game.gameStatus == "startPage")) {
      counter = 60 
      game.gameStatus = "playing";
      game.score = 0;
    }
  }



  

  