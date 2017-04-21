// variables that could be usefull
// fight global
var player1;
var player2;
var PlayerHealth = 10;
var PlayerMovementSpeeed = 5;
var PlayerDmg = Math.floor(Math.random() * 6); // damage that player outputs
var battle_music= document.getElementById("battle_music");
var battle;
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
