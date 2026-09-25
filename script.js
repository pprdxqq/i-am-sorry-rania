const open=document.getElementById("open"),intro=document.getElementById("intro"),letter=document.getElementById("letter"),textEl=document.getElementById("text"),next=document.getElementById("next"),sign=document.getElementById("sign"),more=document.getElementById("more"),final=document.getElementById("final"),listen=document.getElementById("listen"),voice=document.getElementById("voice");
const paragraphs=[
"I've had some time to think, and I realized how much I care about you.",
"And honestly, I know I haven't made you as happy or made you smile the way I used to these past few days. I'm sorry for that.",
"You mean so much to me, and the last thing I ever want is for you to feel like I don't care or that I don't appreciate having you in my life.",
"Sometimes I don't show it the way I should, but that doesn't change how much I love you.",
"I don't want to disappoint you. I want to be someone who makes you smile, someone you feel loved by, and someone you can always feel safe with.",
"I love you. ♥"
];
let current=0;
open.onclick=()=>{intro.classList.add("hidden");letter.classList.remove("hidden");showParagraph()};
function showParagraph(){textEl.textContent=paragraphs[current];next.textContent=current===paragraphs.length-1?"Continue":"Next";if(current===paragraphs.length-1){next.classList.add("hidden");sign.classList.remove("hidden");more.classList.remove("hidden")}}
next.onclick=()=>{if(current<paragraphs.length-1){current++;showParagraph()}};
more.onclick=()=>{letter.classList.add("hidden");final.classList.remove("hidden");hearts(28)};
listen.onclick=()=>{if(voice.paused){voice.play();listen.textContent="♡ Pause my message"}else{voice.pause();listen.textContent="♡ Continue my message"}};
voice.onended=()=>listen.textContent="♡ Listen to my message again";
function hearts(n=1){for(let i=0;i<n;i++)setTimeout(()=>{let h=document.createElement("div");h.className="floating";h.textContent=Math.random()>.4?"♥":"♡";h.style.left=Math.random()*100+"vw";h.style.fontSize=10+Math.random()*20+"px";h.style.animationDuration=5+Math.random()*5+"s";document.getElementById("hearts").appendChild(h);setTimeout(()=>h.remove(),10000)},i*100)}
setInterval(()=>{if(final.classList.contains("hidden"))hearts(1)},1200);