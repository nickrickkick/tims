//on shield press, change from homescreen to Map
document.onreadystatechange = function() {
    if (document.readyState === "complete"){
      var press = document.getElementsByClassName("start");

//console.log(press);
    press.item(0).onclick = function() {
    console.log("hello");
    
    document.getElementById("canvas_wrap").style.backgroundImage = "url('images/MapTIMS.png')";
    this.style.zIndex = "2";
    document.getElementsByClassName("redPlayer").style.zIndex= "20";
    document.getElementsByClassName("bluePlayer").style.zIndex= "20";
    document.getElementById("background_music").pause();
     var sound = document.getElementById("map_music");
         sound.play();
         
    }   
    runAnimation();
}};

//on character same space, change from map to battlefield
var stepX = [-437.5,-312.5,-187.5,-62.5,62.5,187.5,312.5,437.5];
var stepY = [-312.5,-187.5,-62.5,62.5,187.5,312.5];
var c;

//on character defeat, change from battlefield to map

