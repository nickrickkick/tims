

function gamelogic() {
    for (var i = 0; i < player2.length; i++){
        if(Math.abs(main_x - player2[i].x) <= 10 && main_y - player2[i].y <= 10 &&  main_y - player2[i].y >= -1){
          
        }  
    }
    for (var i = 0; i < player1.length; i++){
        if(Math.abs(main_x - player1[i].x) <= 10 && main_y - player1[i].y <= 10 &&  main_y - player1[i].y >= -1){
          
        }
    }
    for (var i = 0; i < obstacle.length; i++){
        if(Math.abs(main_x - obstacle[i].x) <= 10 && main_y - obstacle[i].y <= 10 &&  main_y - obstacle[i].y >= -1){
          
        }
    }
    for (var i = 0; i < player2.width; i++){
        if(Math.abs(main_y - player2[i].y) <= 10 && main_x - player2[i].x <= 10 &&  main_x - player2[i].x >= -1){
         
        }
    }  
    for (var i = 0; i < player1.width; i++){
        if(Math.abs(main_y - player1[i].y) <= 10 && main_x - player1[i].x <= 10 &&  main_x - player1[i].x >= -1){
       
        }
    }  
    for (var i = 0; i < obstacle.width; i++){
        if(Math.abs(main_y - obstacle[i].y) <= 10 && main_x - obstacle[i].x <= 10 &&  main_x - obstacle[i].x >= -1){
          
        }  
    }

}

function maplogic(){
    
}
