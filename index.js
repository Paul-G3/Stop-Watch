
let startButton = document.querySelector(".play");
let resetButton = document.querySelector(".reset");

let seconds = 0;
let minutes = 0;
let hours = 0;
let Watch;
let Buttonstatus = 'not clicked'; 

function stopWatch()
{
    seconds++;
    console.log(seconds);

    if(seconds / 60 == 1)
    {
        seconds = 0;
        minutes++;
    }

    if(minutes / 60 == 1)
    {
        minutes = 0;
        hours++;
    }

    if(hours == 23 && minutes == 59 && seconds == 59)
    {
        seconds = 0;
        minutes = 0;
        hours = 0;
    }

    let timer = document.querySelector(".timer");

    timer.innerText = hours + ":" + minutes + ":" + seconds;
};
 


startButton.addEventListener("click", function(){

    if(Buttonstatus == "not clicked") // if the button is not clicked
    {
        Watch = setInterval(stopWatch, 1000);
        Buttonstatus = "clicked";
        startButton.style.backgroundColor = "yellow";
    }
    else // if the button is clicked 
    {
        clearInterval(Watch);
        Buttonstatus = "not clicked";
        startButton.style.backgroundColor = "blue";
    }
   
});

resetButton.addEventListener("click", function()
{

       clearInterval(Watch);

       let timer = document.querySelector(".timer");

       minutes = 0;
       seconds = 0;
       hours = 0;

    timer.innerText = hours + ":" + minutes + ":" + seconds;
    startButton.style.backgroundColor = "blue";

});