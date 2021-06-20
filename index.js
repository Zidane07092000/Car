let car=document.querySelector(".car");
let start=document.querySelector(".start");
let pos=0;
let check=-1;
let move;
let speed=20;
let button=document.querySelectorAll(".gear");
for(var i=0;i<document.querySelectorAll(".gear").length;i++){
  document.querySelectorAll(".gear")[i].addEventListener("click",function(){
    var val=this.innerHTML;
    if (val==1){
      speed=50;
    }
    else if (val==2){
      speed=100;
    }
    else if (val==3){
      speed=150;
    }
  });
}
function playSound(value){
  let sound=new Audio("./sounds/sound.wav");
  if (value){
    sound.play();
  }
  else{
    sound.pause();
  }
}

start.addEventListener("click",()=>{
  check++;

  if (check%2==0){
    playSound(true);
      start.innerHTML="Stop";
      start.classList.add("pressed")
      move=setInterval(()=>{
      car.style.left=pos+"px";
      pos+=speed;
      if (pos>1390){
        pos=0;
      }
    },100);
  }
  else{

    clearInterval(move);
    start.innerHTML="Start";
    start.classList.remove("pressed")
    speed=20;
  }
});
