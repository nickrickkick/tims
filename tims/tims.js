// variables that could be usefull
// fight global
var game;
var player1;
var player2;
var PlayerHealth = 10;
var speed = 0;
var horizontal = 0;
var speed2 = 0;
var horizontal= 0
var PlayerDmg = Math.floor(Math.random() * 6); // damage that player outputs
var battle_music= document.getElementById("battle_music");
var battle;
var main_x = 0, main_y = 0, move_x = 0, move_y = 0;
var main_x2 = 0, main_y2 = 0, move_x2 = 0, move_y2 = 0;
//maps global
var people= 4;
var map;
var movement= 3;
var blueplay;
var redplay;
var map_music= document.getElementById("map_music");




function draw(){
       context.save();
     
   
   player1 = new Image;
     player1.src = "images/BlueTIMSBoard.png";
     context.drawImage(player1, game.width/2 + main_x, game.height/2 + main_y );
             
 
 battle = new Image;
 battle.src = 'url("images/BoardTIMS.png")';
 
 
 }

/*  resources.load([
    'images/BlueTIMSBoard.png',
    'images/BlueTIMSMap.png',
    'images/BoardTIMS.png',
    'images/BoulderTIMS.png',
    'images/HeartTIMS.png',
    'images/HomescreenTIMS.png',
    'images/MapTIMS.png',
    'images/RedTIMSMap.png',
    'images/RedTIMSBoard.png',
    'images/ShieldTIMS.png',
    'images/TreeTIMS.png',
    
]); 

resources.onReady(init);

*/

function gameloop(){
    
    spawnplayer();
    draw();
}
function spawnplayer(){
    var Sprite = new Image;
    Sprite = player2;
       context.drawImage(sprite, 120, 100);
  
function init() {
     setInterval(gameLoop,1000);
      context = game.getContext('2d');
  /*   window.addEventListener("keydown", keyPressBlue, false);
     window.addEventListener("keyup", keyReleaseBlue, false);
     window.addEventListener("keydown", keyPressRed, false);
     window.addEventListener("keyup", keyReleaseRed, false); */
   
}
}


//window.addEventListener("load", init, false);


