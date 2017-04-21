// variables that could be usefull
// fight global
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
     
      map = new Image;
    map.src = "map.png";
    context.drawImage(map, x, 0);
 context.drawImage(map, map.width + x, 0);
 
 battle = new Image;
 map.src = "battle.png";
 
 
 

 

}
function gameloop(){
    
    spawnplayer();
}
function spawnplayer(){
    var player2a = new Image;
    player2a.src = player2;
       context.drawImage(player2a, 12, 10);
  
function init() {
     setInterval(gameLoop,1000);
  /*   window.addEventListener("keydown", keyPressBlue, false);
     window.addEventListener("keyup", keyReleaseBlue, false);
     window.addEventListener("keydown", keyPressRed, false);
     window.addEventListener("keyup", keyReleaseRed, false); */
   
}
}


//window.addEventListener("load", init, false);


