var P1Walking = new Image(); //provides variable to assign the animated image
P1Walking.src = "images/BlueTIMSMap" // assigns the animated image
var canvas = document.getElementById("P1Walking");
canvas.width = 32;
canvas.height = 32;
var P1Walk = P1sprite({
    context: canvas.getContect("2d"),
    width: 32,
    hight 32,
    image: P1Walking
});


// allows calling of multiple sprites 
function P1sprite (options) {
    var that = {},
        frameIndex = 0;
        tickCount = 0,
        ticksPerFrame = options.ticksPerFrame || 1;
                
    that.context = options.context;
    that.width = options.width
    that.height = options.height;
    that.image = options.image;
    
    return that;
    
    that.render = function () {
        //draw the animation
             that.context.drawImage(
           that.image,
           frameIndex * that.width / numberOfFrames,
           0,
           that.width / numberOfFrames,
           that.height,
           0,
           0,
           that.width / numberOfFrames,
           that.height);
          that.update = function () {
              
        tickCount += 1;
			
        if (tickCount > ticksPerFrame) {
        
        	tickCount = 0;
        	
                // If the current frame index is in range
            if (frameIndex < numberOfFrames - 1) {	
            // Go to the next frame
            frameIndex += 1;  
        }
    };
}
}
}


