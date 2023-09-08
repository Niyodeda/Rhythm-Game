 let count=3;
 let board =0;
 var score = document.getElementById("board")
 var Block = document.getElementsByClassName("Block B1");
 var Block2 = document.getElementsByClassName("Block B2");
 var video =document.getElementById("video");
 var countdown = document.getElementById("Countdown");
 let iteration=1;
 var B1left= window.getComputedStyle(Block[0]).getPropertyValue("transform");
 var B2left= window.getComputedStyle(Block2[0]).getPropertyValue("transform");
 var Bmatrix = new DOMMatrix(B1left);
 var Bmatrix2 = new DOMMatrix(B2left); 
 const G = document.getElementsByClassName("btn1");
 const T = document.getElementsByClassName("btn2");
 function start()
    {
        video.play();
        
   
        G[0].addEventListener("mousedown",player);
        T[0].addEventListener("mousedown",player);
    function player(e)
    {   B1left= window.getComputedStyle(Block[0]).getPropertyValue("transform");
        B2left= window.getComputedStyle(Block2[0]).getPropertyValue("transform");
        Bmatrix = new DOMMatrix(B1left);
        Bmatrix2 = new DOMMatrix(B2left);   
        if(e.code=="KeyG" || e.type =="mousedown")
        {  
             
             if( Math.abs(parseInt(Bmatrix.m41)) >= 440-15 || (Math.abs(parseInt(Bmatrix.m41)+440) <= 15) )
            {
                board+=200;
                score.innerHTML=board;
            }
            else if( Math.abs(parseInt(Bmatrix.m41)) >= 440-27 || (Math.abs(parseInt(Bmatrix.m41)+440) <= 27))
            {
                board+=100;
                score.innerHTML=board;
            }
        }
        if(e.code=="KeyT" || e.type =="mousedown")
        {  
             
              if( Math.abs(parseInt(Bmatrix2.m41)) >= 440-15 || (Math.abs(parseInt(Bmatrix2.m41)+440) <= 15) )
             {
                 board+=200;
                 score.innerHTML=board;
             }
             else if( Math.abs(parseInt(Bmatrix2.m41)) >= 440-27 || (Math.abs(parseInt(Bmatrix2.m41)+440) <= 27))
             {
                 board+=100;
                 score.innerHTML=board;
             }
         }
    }
    document.addEventListener("keydown", player);

        countdown.style.animationName="counter";
        Block[0].style.animationName="slide1";
        var iterinterval = setInterval(iterationcount,1500);
        function iterationcount()
        {
         count--;
            countdown.innerText= count;
            if(iteration==3)
                {     
                 countdown.textContent="GO!";
                };

            if(iteration==4)
            {
             clearInterval(iterinterval)
             countdown.style.opacity=0;
             countdown.style.animationName="none";
            };
        iteration++;
        }
        
        setTimeout(()=>
        {
        Block2[0].style.animationName="slide2";
        Block2[0].style.opacity=1; 
        Block[0].style.animationName="none";
        Block[0].style.opacity=0.25;
        Block[0].style.animationDelay="0s"

        },((60/86.8)*55500))

        setTimeout(()=>
        {
        Block[0].style.animationName="slide1";
        Block[0].style.opacity=1;

        },((60/86.8)*85500))

        setTimeout(()=>
        {
            Block2[0].style.animationName="none";
            Block2[0].style.opacity=0.25; 
            Block[0].style.animationName="none";
            Block[0].style.opacity=0.25;
            G[0].removeEventListener("mousedown",player);
            T[0].removeEventListener("mousedown",player);
        },110000)
        document.removeEventListener('click',start);
    } 

 document.addEventListener('click',start);
 
 