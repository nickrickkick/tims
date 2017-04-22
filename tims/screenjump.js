//on shield press, change from homescreen to Map
document.onreadystatechange = function() {
    if (document.readyState === "complete"){
      var press = document.getElementsByClassName("start");
var canvas= document.getElementById("land");
//console.log(press);
    press.item(0).onclick = function() {
    console.log("hello");
    document.getElementById("canvas_wrap").style.backgroundImage = "url('images/MapTIMS.png')";
    press.style.zIndex = "2";
    }   
}};

//on character collision, change from map to battlefield


//on character defeat, change from battlefield to map

