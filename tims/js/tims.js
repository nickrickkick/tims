// variables that could be usefull
// fight global
var q = 0;
var f = 0;
var c = 0;
var z = 0;
var little = false;
var game; //canvas
var battle; //background
var map; // background
var context;
var player1;
var player2;
var PlayerHealth = 10;
var speed = 0;
var horizontal = 0;
var speed2 = 0;
var horizontal2 = 0;
var PlayerDmg = Math.floor(Math.random() * 6); // damage that player outputs
var battle_music = document.getElementById("battle_music");
//var main_x = document.getElementById("blueFight"), main_y = document.getElementById("blueFight"), move_x = 0 , move_y = 0;
//var main_x2 =  document.getElementById("redFight"), main_y2 =  document.getElementById("redFight"), move_x2 = 0, move_y2 = 0;
//maps global
var main_x = document.getElementById("blueFight"), main_y = document.getElementById("blueFight"), move_x = 0 , move_y = 0;
var main_x2 =  document.getElementById("redFight"), main_y2 =  document.getElementById("redFight"), move_x2 = 0, move_y2 = 0;
var people = 4;
var blueplay = document.getElementById("blueFight");
var redplay = document.getElementById("redFight");
var framerate = 25;
var map_music = document.getElementById("map_music");
var player1Health = 10;
var player2Health = 10;

  
 
 
   
  
       
   
 
 


   



function keyReleaseBlue(e) {
    
    if(e.keyCode == 66) {
         document.getElementById("blueFight").style.visibility = "visible";
     }
}

   
function keyPressBlue(e){
   
    if(little === true){
    
           if(e.keyCode == 68){
      
      console.log(blueplay);
      if (blueplay == null){
          blueplay = document.getElementById("blueFight");
      }
        if (main_x == null){
          main_x = document.getElementById("blueFight");
      }
         speed = 1.5;
        move_x = speed;
      
      document.getElementById("blueFight").style.transform = "rotate(90deg)";
           }
    
    if(e.keyCode == 65){
        speed = -1.5;
    move_x = speed;
    document.getElementById("blueFight").style.transform = "rotate(-90deg)";
    }
    
    if(e.keyCode == 83){
          if (main_y == null){
          main_y = document.getElementById("blueFight");
      }
        horizontal = 1.5;
    move_y = horizontal;
   
    document.getElementById("blueFight").style.transform = "rotate(180deg)";
    }
    if(e.keyCode == 87){
        horizontal = -1.5;
    move_y = horizontal;
    document.getElementById("blueFight").style.transform = "rotate(360deg)";
    }
     if(e.keyCode == 32) {
         document.getElementsByClassName("blueFight").style.backgroundImage = "url('images/BlueBoard.gif')";
     }
      if(e.keyCode == 66) {
        document.getElementById("blueFight").style.visibility = "hidden";
        document.getElementById("swordBlue").style.left = (x).toString() + "px";
     document.getElementById("swordBlue").style.top = (y).toString() + "px";
     document.getElementById("swordBlue").style.visibility = "visible";
     }
    moveBlue();
    }
}

function keyReleaseBlue(e){
    
    if(e.keyCode == 68){
        move_x = 0;
      //  document.getElementById("blueFight").style.transform = "rotate(90deg)";
    }
      if(e.keyCode == 65){
        move_x = 0;
        
    }
      if(e.keyCode == 83){
        move_y = 0;
    
       //  document.getElementById("blueFight").style.transform = "rotate(180deg)";
    }
      if(e.keyCode == 87){
        move_y = 0;
         
        // document.getElementById("blueFight").style.transform = "rotate(360deg)";
    }
     if(e.keyCode == 32) {
       //  document.getElementsByClassName("blueFight").style.backgroundImage = "url('images/BlueBoardSolo.png')"
     }
 
}
function keyPressRed(e){
   if(little === true){
       if(e.keyCode == 39){
           
              if (redplay == null){
          redplay = document.getElementById("redFight");
      }
        if (main_x2 == null){
          main_x2 = document.getElementById("redFight");
      }
           
           speed2 = 1.5;
        move_x2 = speed2;
        
        document.getElementById("redFight").style.transform = "rotate(90deg)";
    }
    if(e.keyCode == 37){
        speed2 = -1.5;
    move_x2 = speed2;
        
         document.getElementById("redFight").style.transform = "rotate(-90deg)";
    }
    if(e.keyCode == 40){
          if (main_y2 == null){
          main_y2 = document.getElementById("redFight");
      }
        horizontal2 = 1.5;
    move_y2 = horizontal2;
        
         document.getElementById("redFight").style.transform = "rotate(180deg)";
    }
    if(e.keyCode == 38){
        horizontal2 = -1.5;
    move_y2 = horizontal2;
        document.getElementById("redFight").style.transform = "rotate(360deg)";
    }
   moveRed();
   }
}
function keyReleaseRed(e){
    if(e.keyCode == 39){
        move_x2 = 0;
      //  document.getElementById("redFight").style.transform = "rotate(90deg)";
    }
      if(e.keyCode == 37){
        move_x2 = 0;
     //   document.getElementById("redFight").style.transform = "rotate(-90deg)";
    }
      if(e.keyCode == 40){
        move_y2 = 0;
      //  document.getElementById("redFight").style.transform = "rotate(180deg)";
    }
      if(e.keyCode == 38){
        move_y2 = 0;
      //  document.getElementById("redFight").style.transform = "rotate(360deg)";
    }
   
}

function moveBlue(){
   c += move_x;
     z += move_y;
      var res = 1175;
  var x = res + c;
   var str = 600;
   var y = str + z;
         
          if(main_x >= 10 && speed > 0){
            main_x += 0;
        }
          else if(main_x <= -9 && speed < 0){
         main_x += 0;
     }else{
      document.getElementById("blueFight").style.left = (x).toString() + "px";
           
            
           
     
      }
         if(main_y >= 10 && horizontal > 0){
        main_y += 0;
      }
      else  if (main_y <= -9 && horizontal < 0){
        main_y += 0;
        }else{
        
             document.getElementById("blueFight").style.top = (y).toString() + "px";
             
         }
    
   
}
function moveRed(){
      q += move_x2;
      f += move_y2;
       var zez = 500;
  var x2 = zez + q;
  
  
   var sst = 100;
   var y2 = sst + f;
     
       if(main_x2 >= 10 && speed2 > 0){
            main_x2 += 0;
        }
          else if(main_x2 <= -9 && speed2 < 0){
         main_x2 += 0;
     }else{
         document.getElementById("redFight").style.left = (x2).toString() + "px";
     }
     if(main_y2 >= 10 && horizontal2 > 0){
        main_y2 += 0;
      }
      else  if (main_y2 <= -9 && horizontal2 < 0){
        main_y2 += 0;
        }else{
            document.getElementById("redFight").style.top = (y2).toString() + "px";
        }
   
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
    
  //  draw();
  if(little === false){
       
       
  }
  else if(little ===true){
      moveBlue();
    moveRed();
  }
  
  
}



function init() {
     var but = document.getElementsByClassName("battle");
     game = document.getElementById("land");
     if (game && game.getContext) {
    context = game.getContext('2d');
    setInterval(this.gameLoop,1000/100);
    window.canvas = document.getElementById("space");
    window.ctx_1 = game.getContext("2d");
     window.addEventListener("keydown", keyPressBlue, false);
     window.addEventListener("keyup", keyReleaseBlue, false);
     window.addEventListener("keydown", keyPressRed, false);
     window.addEventListener("keyup", keyReleaseRed, false); 
     }
     
     but.onclick = function(){
         little = true;
     }
}

  


window.addEventListener("load", this.init, false);


