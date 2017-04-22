// key codes w: 87 s: 83 a: 65 d: 68
function keyPressBlue(e){
    // make a script that can move a player in the direction they selected via clicking a button and moves them 125px in that direction
    if(e.keyCode == 87) {
    function myMove() {
        var elem = document.getElementById("myAnimation");
        var pos = element.getBoundingClientRect();
        console.log(rect.top, rect.right, rect.bottom, rect.left);
        var id = setInterval(frame, 10);
            function frame() {
            if (pos == pos + 125) {
                clearInterval(id);
            } else {
            pos++; 
                elem.style.bottom = pos + 'px'; 
                elem.style.left = pos + '0'; 
            }
        }
    }
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
   
}



