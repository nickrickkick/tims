//on shield press, change from homescreen to Map
var pressList = document.getElementsByClassName("start");
if (pressList.length > 0) {
   var press = pressList[0];
}
var canvas= document.getElementById("land");
    press.onclick = function() {
    console.log("hello");
    document.getElementById("canvas_wrap").style.backgroundImage = "url('images/MapTIMS.png')";
    
    
};

//on character collision, change from map to battlefield


//on character defeat, change from battlefield to map

