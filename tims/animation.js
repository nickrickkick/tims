console.log("hello animation -- hello");
document.onreadystatechange = function() {
    if (document.readyState === "complete"){
        console.log("hello animation");
//Width and height for our canvas
 var canvasWidth = 1000; 
 var canvasHeight = 750;
 
 //the with and height of our spritesheet
 var spriteWidth = 128; 
 var spriteHeight = 32; 
 
 //we are having two rows and 8 cols in the current sprite sheet
 var rows = 1; 
 var cols = 4; 
 
 //The 0th (first) row is for the right movement
 var trackRight = 0; 
 
 //1st (second) row for the left movement (counting the index from 0)
 var trackLeft = 1; 
 
 //To get the width of a single sprite we divided the width of sprite with the number of cols
 //because all the sprites are of equal width and height 
 var width = 32; 
 
 //Same for the height we divided the height with number of rows 
 var height = 32; 
 
 //Each row contains 4 frame and at start we will display the first frame (assuming the index from 0)
 var curFrame = 0; 
 
 //The total frame is 4
 var frameCount = 4; 
 
 //x and y coordinates to render the sprite 
 var x=0;
 var y=0; 
 
 //x and y coordinates of the canvas to get the single frame 
 var srcX=0; 
 var srcY=0; 
 
 //tracking the movement left and write 
 var left = false;
 
                        //Assuming that at start the character will move right side 
 var right = false;
 
 //Speed of the movement 
 var speed = 12; 
 
 //Getting the canvas 
 var canvas = document.getElementById('canvas_wrap');
 
 //Creating an Image object for our character 
 var character = new Image(); 
 
 //Setting the source to the image file 
 character.src = "images/RedTIMSMap.png";

function updateFrame(){
 //Updating the frame index 
 curFrame = ++curFrame % frameCount; 
 
 //Calculating the x coordinate for spritesheet 
 srcX = curFrame * width; 
}

var ctx = canvas.getContext('2d');
console.log(ctx);
function draw(){
 //Updating the frame 
 updateFrame();
 //Drawing the image 
 ctx.drawImage(character,srcX,srcY,width,height,x,y,width,height);
 ctx.clearRect(x,y,width,height);
}

setInterval(draw,100);
}};