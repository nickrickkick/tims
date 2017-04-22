// variables that could be usefull
// fight global
var game;
var player1;
var player2;
var PlayerHealth = 10;
var speed = 0;
var horizontal = 0;
var speed2 = 0;
var horizontal2 = 0;
var PlayerDmg = Math.floor(Math.random() * 6); // damage that player outputs
var battle_music = document.getElementById("battle_music");
var battle;
var main_x = document.getElementById("blueFight").left, main_y = document.getElementById("blueFight").top, move_x = 0 , move_y = 0;
var main_x2 =  document.getElementById("redFight").left, main_y2 =  document.getElementById("redFight").top, move_x2 = 0, move_y2 = 0;
//maps global
var people = 4;
var map;
var movement = 3;
var blueplay = document.getElementById("blueFight");
var redplay = document.getElementById("redFight");
var framerate = 25;
var map_music = document.getElementById("map_music");
var player1Health = 10;
var player2Health = 10;

 
       
 
  
function keyPressBlue(e){
   
 
    
           if(e.keyCode == 68){
      
      console.log(blueplay);
      if (blueplay == null){
          blueplay = document.getElementById("blueFight");
      }
        if (main_x == null){
          main_x = document.getElementById("blueFight").left;
      }
         speed = 1.5;
        move_x = speed;
      
       blueplay.style.transform = "rotate(90deg)";
           }
         

   //      speed = 1.5;
     //   move_x = speed;
       // document.getElementsByClassName("blueFight").style.backgroundImage = "url('BlueBoard.gif')";
//     document.getElementsByClassName("blueFight").style.transform = "rotate(-90deg)";
     
    
    if(e.keyCode == 65){
        speed = -1.5;
    move_x = speed;
   
    }
    
    if(e.keyCode == 83){
          if (main_y == null){
          main_y = document.getElementById("blueFight").top;
      }
        horizontal = 1.5;
    move_y = horizontal;
   
    blueplay.style.transform = "rotate(180deg)";
    }
    if(e.keyCode == 87){
        horizontal = -1.5;
    move_y = horizontal;
    blueplay.style.transform = "rotate(-90deg)";
    }
  
}

function keyReleaseBlue(e){
    if(e.keyCode == 68){
        move_x = 0;
        document.getElementById("blueFight").style.transform = "rotate(90deg)";
    }
      if(e.keyCode == 65){
        move_x = 0;
        
    }
      if(e.keyCode == 83){
        move_y = 0;
    
         document.getElementById("blueFight").style.transform = "rotate(180deg)";
    }
      if(e.keyCode == 87){
        move_y = 0;
         
         document.getElementById("blueFight").style.transform = "rotate(-90deg)";
    }
}
function keyPressRed(e){
   
       if(e.keyCode == 39){
           
              if (redplay == null){
          redplay = document.getElementById("redFight");
      }
        if (main_x2 == null){
          main_x2 = document.getElementById("redFight").left;
      }
           
           speed2 = 1.5;
        move_x2 = speed2;
        
        redplay.style.transform = "rotate(-90deg)";
    }
    if(e.keyCode == 37){
        speed2 = -1.5;
    move_x2 = speed2;
        
        redplay.style.transform = "rotate(90deg)";
    }
    if(e.keyCode == 40){
          if (main_y2 == null){
          main_y2 = document.getElementById("redFight").top;
      }
        horizontal2 = 1.5;
    move_y2 = horizontal2;
        
        redplay.style.transform = "rotate(180deg)";
    }
    if(e.keyCode == 38){
        horizontal2 = -1.5;
    move_y2 = horizontal2;
        
    }
  
}
function keyReleaseRed(e){
    if(e.keyCode == 39){
        move_x2 = 0;
        document.getElementById("redFight").style.backgroundImage = "url('RedBoardSolo.png')"
    }
      if(e.keyCode == 37){
        move_x2 = 0;
        document.getElementById("redFight").style.backgroundImage = "url('RedBoardSolo.png')"
    }
      if(e.keyCode == 40){
        move_y2 = 0;
        document.getElementById("redFight").style.backgroundImage = "url('RedBoardSolo.png')"
    }
      if(e.keyCode == 38){
        move_y2 = 0;
        document.getElementById("redFight").style.backgroundImage = "url('RedBoardSolo.png')"
    }
}

function moveBlue(){
 
      
         main_x += move_x;
     
      
     
            main_y += move_y;
        
  
    
   
}
function moveRed(){
      
         main_x2 += move_x2;
    
            main_y2 += move_y2;
        }
   




 
function draw(){
       context.save();
      context.clearRect(0,0,game.width,game.height);
      
     context.drawImage(blueplay, game.width/2 + main_x, game.height/2 + main_y );
       context.drawImage(redplay, game.width/2 + main_x, game.height/2 + main_y );
       
          context.restore();
  
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
    
   // spawnplayer();
  //  draw();
   moveBlue();
    moveRed();
  
}



function init() {
     setInterval(this.gameLoop,1000/framerate);
    
     window.addEventListener("keydown", keyPressBlue, false);
     window.addEventListener("keyup", keyReleaseBlue, false);
     window.addEventListener("keydown", keyPressRed, false);
     window.addEventListener("keyup", keyReleaseRed, false); 
   
}




window.addEventListener("load", this.init, false);


