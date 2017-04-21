

function gamelogic() {
    for (var i = 0; i < player2.length; i++){
        if(Math.abs(main_x - player2[i].x) <= 10 && main_y - player2[i].y <= 10 &&  main_y - player2[i].y >= -1){
          
    }  
    for (var i = 0; i < player1.length; i++){
        if(Math.abs(main_x - player1[i].x) <= 10 && main_y - player1[i].y <= 10 &&  main_y - player1[i].y >= -1){
          
        }
    for (var i = 0; i < obstacle.length; i++){
        if(Math.abs(main_x - obstacle[i].x) <= 10 && main_y - obstacle[i].y <= 10 &&  main_y - obstacle[i].y >= -1){
          
    }
    for (var i = 0; i < player2.length; i++){
        if(Math.abs(main_x - player2[i].x) <= 10 && main_y - player2[i].y <= 10 &&  main_y - player2[i].y >= -1){
          
    }  
    for (var i = 0; i < player1.length; i++){
        if(Math.abs(main_x - player1[i].x) <= 10 && main_y - player1[i].y <= 10 &&  main_y - player1[i].y >= -1){
          
        }
    for (var i = 0; i < obstacle.length; i++){
        if(Math.abs(main_x - obstacle[i].x) <= 10 && main_y - obstacle[i].y <= 10 &&  main_y - obstacle[i].y >= -1){
          
    }
    }

}

function maplogic(){
    
}


// keycodes p1: w: 87 s: 83 a: 65 d: 68
// keycodes arrows (p2): l: 37 u: 38 r: 39 d: 40
function move(event) {
    var k = event.keyCode,
        if (k>50){
        chrId = document.getElementById('player1'),
        chr = {
            updown: function () {
                var y = parseInt(getComputedStyle(chrId).top);
                if (k == 83) {
                    --y;
                } else if (k == 87) {
                    ++y;
                }

                return y;
            },

            leftright: function () {
                var x = parseInt(getComputedStyle(chrId).left);
                if (k == 65) {
                    --x;
                } else if (k == 68) {
                    ++x;
                }

                return x;
            }
        };
        }
    else{
        chrId = document.getElementById('player2'),
        chr = {
            updown: function () {
                var y = parseInt(getComputedStyle(chrId).top);
                if (k == 40) {
                    --y;
                } else if (k == 38) {
                    ++y;
                }

                return y;
            },

            leftright: function () {
                var x = parseInt(getComputedStyle(chrId).left);
                if (k == 37) {
                    --x;
                } else if (k == 39) {
                    ++x;
                }

                return x;
            }
        };
    }

    chrId.style.top = (chr.updown()) + "px";
    chrId.style.left = (chr.leftright()) + "px";
}

document.addEventListener('keydown', move);

