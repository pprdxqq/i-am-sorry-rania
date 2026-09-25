const open=document.getElementById("open"),intro=document.getElementById("intro"),letter=document.getElementById("letter"),textEl=document.getElementById("text"),more=document.getElementById("more"),final=document.getElementById("final");
const text=`I've had some time to think, and I realized how much I care about you.

And honestly, I know I haven't made you as happy or made you smile the way I used to these past few days. I'm sorry for that.

You mean so much to me, and the last thing I ever want is for you to feel like I don't care or that I don't appreciate having you in my life.

Sometimes I don't show it the way I should, but that doesn't change how much I love you.

I don't want to disappoint you. I want to be someone who makes you smile, someone you feel loved by, and someone you can always feel safe with.

I love you. ♥`;
open.onclick=()=>{intro.classList.add("hidden");letter.classList.remove("hidden");type()};
function type(){let i=0;(function tick(){textEl.textContent=text.slice(0,i++);if(i<=text.length)setTimeout(tick,24);else more.classList.remove("hidden")})()}
more.onclick=()=>{letter.classList.add("hidden");final.classList.remove("hidden");hearts(28)};
function hearts(n=1){for(let i=0;i<n;i++)setTimeout(()=>{let h=document.createElement("div");h.className="floating";h.textContent=Math.random()>.4?"♥":"♡";h.style.left=Math.random()*100+"vw";h.style.fontSize=10+Math.random()*20+"px";h.style.animationDuration=5+Math.random()*5+"s";document.getElementById("hearts").appendChild(h);setTimeout(()=>h.remove(),10000)},i*100)}
setInterval(()=>{if(final.classList.contains("hidden"))hearts(1)},1200);