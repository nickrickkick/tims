//on shield press, change from homescreen to Map
var press = document.getElementsByClassName("start");
var canvas= document.getElementById("land");
    press.onclick = function() {
    document.getElementsByClassName("land").style.backgroundImage = "url('images/MapTIMS.png')";
    
}

//on character collision, change from map to battlefield


//on character defeat, change from battlefield to map

