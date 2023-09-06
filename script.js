 let count=3;
 let board =0;
 var Block = document.getElementsByClassName("Block");
 var video =document.getElementById("video");
 var countdown = document.getElementById("Countdown");

 function start()
    {
        video.play();
        countdown.style.animationName="counter";
        Block[1].style.animationName="slide1"
        //Block[2].style.animationName="slide1" 

    }

 document.addEventListener('click',start);