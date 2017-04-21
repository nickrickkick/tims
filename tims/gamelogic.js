

function gamelogic() {
    

}

function maplogic(){
    
}


// key codes w: 87 s: 83 a: 65 d: 68
function move(event) {
    var k = event.keyCode,
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

    chrId.style.top = (chr.updown()) + "px";
    chrId.style.left = (chr.leftright()) + "px";
}

document.addEventListener('keydown', move);

