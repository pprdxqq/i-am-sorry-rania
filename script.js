const open=document.getElementById("open"),intro=document.getElementById("intro"),letter=document.getElementById("letter"),textEl=document.getElementById("text"),next=document.getElementById("next"),sign=document.getElementById("sign"),more=document.getElementById("more"),choice=document.getElementById("choice"),hate=document.getElementById("hate"),love=document.getElementById("love"),breakup=document.getElementById("breakup"),sorryBtn=document.getElementById("sorryBtn"),hateAudio=document.getElementById("hateAudio"),hatePlay=document.getElementById("hatePlay"),hateVoice=document.getElementById("hateVoice"),hateStatus=document.getElementById("hateStatus"),follow=document.getElementById("follow"),followBtn=document.getElementById("followBtn"),final=document.getElementById("final"),listen=document.getElementById("listen"),voice=document.getElementById("voice");
const paragraphs=[
"I've had some time to think, and I realized how much I care about you.",
"And honestly, I know I haven't made you as happy or made you smile the way I used to these past few days. I'm sorry for that.",
"You mean so much to me, and the last thing I ever want is for you to feel like I don't care or that I don't appreciate having you in my life.",
"Sometimes I don't show it the way I should, but that doesn't change how much I love you.",
"I don't want to disappoint you. I want to be someone who makes you smile, someone you feel loved by, and someone you can always feel safe with.",
"I love you. ♥"
];
let current=0,typing=false,showingFull=false,sadRainTimers=[],sadRainRunning=false;

open.onclick=()=>{intro.classList.add("hidden");letter.classList.remove("hidden");showParagraph()};
function typeString(p,done){typing=true;next.disabled=true;next.style.opacity=".35";textEl.textContent="";let i=0;function tick(){textEl.textContent=p.slice(0,i++);if(i<=p.length)setTimeout(tick,24);else{typing=false;next.disabled=false;next.style.opacity="1";done()}}tick()}
function showParagraph(){showingFull=false;typeString(paragraphs[current],()=>{next.textContent=current===paragraphs.length-1?"Read it all":"Next";if(current===paragraphs.length-1){sign.classList.remove("hidden");more.classList.add("hidden")}})}
function showFullLetter(){showingFull=true;textEl.textContent=paragraphs.join("\n\n");next.classList.add("hidden");sign.classList.remove("hidden");more.classList.remove("hidden")}
next.onclick=()=>{if(typing)return;if(current<paragraphs.length-1){current++;showParagraph()}else if(!showingFull){showFullLetter()}};
more.onclick=()=>{letter.classList.add("hidden");choice.classList.remove("hidden");hearts(18)};

hate.onclick=()=>{choice.classList.add("hidden");breakup.classList.remove("hidden");document.getElementById("hearts").innerHTML="";sadRain()};
sorryBtn.onclick=()=>{stopSadRain();breakup.classList.add("hidden");hateAudio.classList.remove("hidden");startHateAudio()};
love.onclick=()=>{choice.classList.add("hidden");follow.classList.remove("hidden");hearts(18)};
followBtn.onclick=()=>{follow.classList.add("hidden");final.classList.remove("hidden");hearts(28)};

async function startHateAudio(){
  hatePlay.textContent="▶ Play my message";
  hateStatus.textContent="Your message will continue automatically when the audio ends.";
  try{
    hateVoice.currentTime=0;
    await hateVoice.play();
    hatePlay.textContent="Ⅱ Pause my message";
    hateStatus.textContent="Listen…";
  }catch(e){
    hateStatus.textContent="Tap the button to play my message.";
    console.error(e);
  }
}
hatePlay.onclick=async()=>{
  try{
    if(hateVoice.paused){
      await hateVoice.play();
      hatePlay.textContent="Ⅱ Pause my message";
      hateStatus.textContent="Listen…";
    }else{
      hateVoice.pause();
      hatePlay.textContent="▶ Continue my message";
      hateStatus.textContent="Paused.";
    }
  }catch(e){
    hateStatus.textContent="Tap again to play my message.";
    console.error(e);
  }
};
hateVoice.onended=()=>{
  hateAudio.classList.add("hidden");
  final.classList.remove("hidden");
  hateStatus.textContent="";
  hearts(28);
};

listen.onclick=async()=>{try{if(voice.paused){await voice.play();listen.textContent="♡ Pause my memo"}else{voice.pause();listen.textContent="♡ Continue my memo"}}catch(e){listen.textContent="♡ Tap again to play my memo";console.error(e)}};
voice.onended=()=>listen.textContent="♡ Check this dope unscripted memo out";
voice.onerror=()=>listen.textContent="♡ Tap to retry my memo";

function addSadFace(){
  if(!sadRainRunning||breakup.classList.contains("hidden"))return;
  const rain=document.getElementById("sadRain");
  const f=document.createElement("img");
  f.className="sad-face";
  f.src="https://raw.githubusercontent.com/pprdxqq/i-am-sorry-rania/main/rania-sad-face.png";
  f.alt="";
  f.style.left=(Math.random()*110-5)+"vw";
  f.style.width=(65+Math.random()*105)+"px";
  f.style.setProperty("--drift",(Math.random()*260-130)+"px");
  f.style.setProperty("--rot",(Math.random()*80-40)+"deg");
  f.style.animationDuration=(7+Math.random()*7)+"s";
  f.style.animationDelay=(Math.random()*.8)+"s";
  rain.appendChild(f);
  setTimeout(()=>f.remove(),16000);
}
function addBrokenHeart(){
  if(!sadRainRunning||breakup.classList.contains("hidden"))return;
  const rain=document.getElementById("sadRain");
  const h=document.createElement("div");
  h.className="broken-heart";
  h.textContent="💔";
  h.style.left=Math.random()*100+"vw";
  h.style.fontSize=(18+Math.random()*30)+"px";
  h.style.setProperty("--drift",(Math.random()*300-150)+"px");
  h.style.setProperty("--rot",(Math.random()*120-60)+"deg");
  h.style.animationDuration=(6+Math.random()*7)+"s";
  h.style.animationDelay=(Math.random()*.8)+"s";
  rain.appendChild(h);
  setTimeout(()=>h.remove(),16000);
}
function sadRain(){
  stopSadRain();
  sadRainRunning=true;
  const rain=document.getElementById("sadRain");
  rain.innerHTML="";
  for(let i=0;i<18;i++){setTimeout(addSadFace,i*180)}
  for(let i=0;i<28;i++){setTimeout(addBrokenHeart,i*130)}
  const faceTimer=setInterval(()=>{for(let i=0;i<3;i++)addSadFace()},700);
  const heartTimer=setInterval(()=>{for(let i=0;i<3;i++)addBrokenHeart()},500);
  sadRainTimers=[faceTimer,heartTimer];
}
function stopSadRain(){
  sadRainRunning=false;
  sadRainTimers.forEach(clearInterval);
  sadRainTimers=[];
  const rain=document.getElementById("sadRain");
  if(rain)rain.innerHTML="";
}

function hearts(n=1){for(let i=0;i<n;i++)setTimeout(()=>{let h=document.createElement("div");h.className="floating";h.textContent=Math.random()>.4?"♥":"♡";h.style.left=Math.random()*100+"vw";h.style.fontSize=10+Math.random()*20+"px";h.style.animationDuration=5+Math.random()*5+"s";document.getElementById("hearts").appendChild(h);setTimeout(()=>h.remove(),10000)},i*100)}
setInterval(()=>{if(!choice.classList.contains("hidden")||!follow.classList.contains("hidden")||!final.classList.contains("hidden"))hearts(1)},1200);