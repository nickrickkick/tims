// key codes w: 87 s: 83 a: 65 d: 68
//function keyPressBlue(e){
//    if(e.keyCode == 32) {
//        var rect = element.getBoundingClientRect();
//        console.log(rect.top, rect.right, rect.bottom, rect.left);
//        var imgSrc = document.getElementsByClassName("blueFight"), // or any other selector
//        x = rect.left, // your data
//        y = rect.top; // your data
//        function addimage() { 
//        var img = document.createElement("Lahio");
//        img.src = "images/BlueBoard.gif"; 
//        img.height = 10; 
//        img.width = 9;
//        img.style.left = x;
//        img.style.top = y;
//        var SwingDeath = document.getElementById("Lahio").id; 
//        var element = document.getElementById(SwingDeath);
//        element.parentNode.removeChild(element);
//        
//     code not working :(   
//    }
//     
    if(e.keyCode == 68){
         speed = 1.5;
        move_x = speed;
        document.getElementsByClassName("blueFight").style.backgroundImage = "url('BlueBoard.gif')";
     document.getElementsByClassName("blueFight").style.transform = "rotate(-90deg)";
     
    }
    if(e.keyCode == 65){
        speed = -1.5;
    move_x = speed;
    document.getElementsByClassName("blueFight").style.backgroundImage = "url('BlueBoard.gif')";
   
    }
    if(e.keyCode == 83){
        horizontal = 1.5;
    move_y = horizontal;
   document.getElementsByClassName("blueFight").style.backgroundImage = "url('BlueBoard.gif')";
    document.getElementsByClassName("blueFight").style.transform = "rotate(180deg)";
    }
    if(e.keyCode == 87){
        horizontal = -1.5;
    move_y = horizontal;
  document.getElementsByClassName("blueFight").style.backgroundImage = "url('BlueBoard.gif')";
    document.getElementsByClassName("blueFight").style.transform = "rotate(90deg)";
    }
  
}

function keyReleaseBlue(e){
    if(e.keyCode == 68){
        move_x = 0;
        document.getElementById("blueFight").style.backgroundImage = "url('BlueBoardSolo.png')";
        document.getElementById("blueFight").style.transform = "rotate(-90deg)";
    }
      if(e.keyCode == 65){
        move_x = 0;
        document.getElementById("blueFight").style.backgroundImage = "url('BlueBoardSolo.png')";
    }
      if(e.keyCode == 83){
        move_y = 0;
         document.getElementById("blueFight").style.backgroundImage = "url('BlueBoardSolo.png')";
         document.getElementById("blueFight").style.transform = "rotate(180deg)";
    }
      if(e.keyCode == 87){
        move_y = 0;
         document.getElementById("blueFight").style.backgroundImage = "url('BlueBoardSolo.png')";
         document.getElementById("blueFight").style.transform = "rotate(90deg)";
    }
}
function keyPressRed(e){
   
       if(e.keyCode == 39){
           speed2 = 1.5;
        move_x2 = speed2;
        document.getElementById("redFight").style.backgroundImage = "url('RedBoard.gif')"
        document.getElementById("redFight").style.transform = "rotate(90deg)";
    }
    if(e.keyCode == 37){
        speed2 = -1.5;
    move_x2 = speed2;
        document.getElementById("redFight").style.backgroundImage = "url('RedBoard.gif')"
        document.getElementById("redFight").style.transform = "rotate(-90deg)";
    }
    if(e.keyCode == 40){
        horizontal2 = 1.5;
    move_y2 = horizontal2;
        document.getElementById("redFight").style.backgroundImage = "url('RedBoard.gif')"
        document.getElementById("redFight").style.transform = "rotate(180deg)";
    }
    if(e.keyCode == 38){
        horizontal2 = -1.5;
    move_y2 = horizontal2;
        document.getElementById("redFight").style.backgroundImage = "url('RedBoard.gif')"
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
};



