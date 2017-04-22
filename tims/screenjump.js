//on shield press, change from homescreen to Map
var press = document.getElementsByClassName("start");
var canvas= document.getElementById("land");
    press.onclick = function() {
    canvas.style.backgroundImage = "url('MapTIMS.png')";
    
}

//on character collision, change from map to battlefield


//on character defeat, change from battlefield to map

