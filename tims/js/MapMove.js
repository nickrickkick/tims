/* // key codes w: 87 s: 83 a: 65 d: 68
function keyPressBlue(e){

 if(e.keyCode == 68){
         speed = 1.5;
        move_x = speed;
        document.getElementsByClassName("blueFight").style.backgroundImage = "url('BlueBoard.gif')";
     document.getElementsByClassName("blueFight").style.transform = "rotate(-90deg)";
    if(e.keyCode == 83){
        speed = 1.5;
        move_x = speed
        
    }
    if(e.keyCode == 65){
        
    }
    if(e.keyCode == 87){
        
    }
function keyPressRed(e){
   
    if(e.keyCode == 39){
           speed2 = 1.5;
        move_x2 = speed2;
    }
    if(e.keyCode == 37){
        speed2 = -1.5;
    move_x2 = speed2;
    }
    if(e.keyCode == 40){
        horizontal2 = 1.5;
    move_y2 = horizontal2;
    }
    if(e.keyCode == 38){
        horizontal2 = -1.5;
    move_y2 = horizontal2;
    }
  
}
function keyReleaseRed(e){
    if(e.keyCode == 39){
        move_x2 = 0;
    }
      if(e.keyCode == 37){
        move_x2 = 0;
    }
      if(e.keyCode == 40){
        move_y2 = 0;
    }
      if(e.keyCode == 38){
        move_y2 = 0;
    }
}

function moveBlue(){
 
         if(main_x >= 0 && speed > 0){
            main_x += 0;
        }
          else if(main_x <= 1000 && speed < 0){
         main_x += 0;
     }else{
         main_x += move_x;
     }
       
      if(main_y >= 0 && horizontal > 0){
        main_y += 0;
      }
      else  if (main_y <= 750 && horizontal < 0){
        main_y += 0;
        }else{
            main_y += move_y;
        }
  
    
   
}
function moveRed(){
       if(main_x2 >= 0 && speed2 > 0){
            main_x2 += 0;
        }
          else if(main_x2 <= 1000 && speed2 < 0){
         main_x2 += 0;
     }else{
         main_x2 += move_x2;
     }
       
      if(main_y2 >= 0 && horizontal2 > 0){
        main_y2 += 0;
      }
      else  if (main_y2 <= 750 && horizontal2 < 0){
        main_y2 += 0;
        }else{
            main_y2 += move_y2;
        }
   
} */


var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');

var xpos = 62.5;
var ypos = 312.5;

context.drawImage('RedMap.gif',xpos ,ypos);
context.stroke();

document.onkeydown = move;

function move(e){
    if(e.keyCode == 39){
        xpos += 125;
    }
    if(e.keyCode == 37){
        xpos -= 125;
    }
    if(e.keyCode == 38){
        ypos += 125;
    }
    if(e.keyCode == 40){
        ypos -= 125;
    }
    canvas.width = canvas.width;
    context.drawImage('RedMap.gif',xpos ,ypos);
    context.stroke();
}

