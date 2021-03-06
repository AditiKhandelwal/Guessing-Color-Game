var numOfSquares =6;
var colors =[];
var pickedColor ;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

//At initial loading
init();
function init(){
    easyBtn.addEventListener("click", function(){
        easyBtn.classList.add("selected");
        hardBtn.classList.remove("selected");
        numOfSquares=3;
        colors =generateRandomColors(numOfSquares);
        pickedColor =  pickColor();
        colorDisplay.textContent = pickedColor;
         for(var i =0;i<squares.length;i++)
         {
             if(colors[i]){
             squares[i].style.backgroundColor =  colors[i];
          }else{
              squares[i].style.display = "none";
          }
         }
         if(resetButton.textContent=="Play Again?")
            {
                resetButton.textContent = "New Colors";
            }
   messageDisplay.textContent=""; 
   h1.style.backgroundColor = "steelblue"; 
      });
      
      hardBtn.addEventListener("click", function(){
          hardBtn.classList.add("selected");
          easyBtn.classList.remove("selected");
          numOfSquares =6;
          colors =generateRandomColors(numOfSquares);
        pickedColor =  pickColor();
        colorDisplay.textContent = pickedColor;
         for(var i =0;i<squares.length;i++)
         {
             
             squares[i].style.backgroundColor =  colors[i];
             squares[i].style.display = "block";
          }
          if(resetButton.textContent=="Play again?")
   {
       resetButton.textContent = "New Colors";
   }
   messageDisplay.textContent=""; 
   h1.style.backgroundColor = "steelblue";  
      });
      
     
         colors = generateRandomColors(numOfSquares);
         pickedColor =  pickColor();
         colorDisplay.textContent = pickedColor;
         messageDisplay.textContent="";
         this.textContent ="New Colors";
         for(var i =0;i<squares.length;i++)
         {
             squares[i].style.backgroundColor =  colors[i];
         }
         h1.style.backgroundColor = "steelblue";

         for(var i =0;i<squares.length; i++)
            {
                squares[i].style.backgroundColor=colors[i];

                squares[i].addEventListener("click", function(){
                    var clickedColor = this.style.backgroundColor;
                if(clickedColor === pickedColor)
                {
                    messageDisplay.textContent = "Correct!";
                    resetButton.textContent = "Play Again?";
                    changeColors(clickedColor);
                    h1.style.backgroundColor = clickedColor;
                }
                else{
                    this.style.backgroundColor ="#232323";
                    messageDisplay.textContent = "Try Again";
                }
                });
            }
            colors = generateRandomColors(numOfSquares);
            pickedColor =  pickColor();
            colorDisplay.textContent = pickedColor;
            messageDisplay.textContent="";
            this.textContent ="New Colors";
            for(var i =0;i<squares.length;i++)
            {
                squares[i].style.backgroundColor =  colors[i];
            }
            h1.style.backgroundColor = "steelblue";
            colorDisplay.textContent = pickedColor;

}



// Easy mode event listener
easyBtn.addEventListener("click", function(){
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numOfSquares=3;
  colors =generateRandomColors(numOfSquares);
  pickedColor =  pickColor();
  colorDisplay.textContent = pickedColor;
   for(var i =0;i<squares.length;i++)
   {
       if(colors[i]){
       squares[i].style.backgroundColor =  colors[i];
    }else{
        squares[i].style.display = "none";
    }
   }
   if(resetButton.textContent=="Play again?")
   {
       resetButton.textContent = "New Colors";
   }
   messageDisplay.textContent="";
   h1.style.backgroundColor = "steelblue";
});

// Hard mode event listener
hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numOfSquares =6;
    colors =generateRandomColors(numOfSquares);
  pickedColor =  pickColor();
  colorDisplay.textContent = pickedColor;
   for(var i =0;i<squares.length;i++)
   {
       
       squares[i].style.backgroundColor =  colors[i];
       squares[i].style.display = "block";
    }
    if(resetButton.textContent=="Play again?")
   {
       resetButton.textContent = "New Colors";
   }
   messageDisplay.textContent="";
   h1.style.backgroundColor = "steelblue";
});


// reset button event listener
resetButton.addEventListener("click", function(){
   colors = generateRandomColors(numOfSquares);
   pickedColor =  pickColor();
   colorDisplay.textContent = pickedColor;
   messageDisplay.textContent="";
   this.textContent ="New Colors";
   for(var i =0;i<squares.length;i++)
   {
       squares[i].style.backgroundColor =  colors[i];
   }
   h1.style.backgroundColor = "steelblue";
});

// displaying picked color on h1
colorDisplay.textContent = pickedColor;

// initiaizinf colors to square and adding event listener to squares
for(var i =0;i<squares.length; i++)
{
    squares[i].style.backgroundColor=colors[i];

    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
       if(clickedColor === pickedColor)
       {
           messageDisplay.textContent = "Correct!";
           resetButton.textContent = "Play Again?";
           changeColors(clickedColor);
           h1.style.backgroundColor = clickedColor;
       }
       else{
           this.style.backgroundColor ="#232323";
           messageDisplay.textContent = "Try Again";
       }
    });
}

// If correct answer make all square of same color
function changeColors(color){
    for(var i =0;i<squares.length; i++)
    {
        squares[i].style.backgroundColor = color;
    } 
}

// pick a random color from array
function pickColor(){
   var random = Math.floor( Math.random()*colors.length);
   return colors[random];
}

// generate random colors for array
function generateRandomColors(num){
    var arr =[]
    for(var i =0;i<num;i++)
    {
        arr.push(randomColor())
    }
    return arr;
} 

// generating colors
function randomColor(){
   var r =  Math.floor(Math.random()*256);
   var g =  Math.floor(Math.random()*256);
   var b =  Math.floor(Math.random()*256);
   return "rgb("+ r + ", "+ g +", "+ b + ")";
}