var noOfDrums=document.querySelectorAll(".drum").length;
function makesound(key){
  switch(key){
    case 'w':
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'a':
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case 's':
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case 'd':
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case 'j':
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case 'k':
      var kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
      break;
    case 'l':
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    default: console.log(key);
  }
}
for(let i=0;i<noOfDrums;i++){
  document.querySelectorAll("button")[i].addEventListener("click", function() {

    makesound(this.innerText);
    buttonAnimation(this.innerText);
  });
}

document.addEventListener("keydown",function(event){
  makesound(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(key){
  switch(key){
    case 'w':
    case 'a':
    case 's':
    case 'd':
    case 'j':
    case 'k':
    case 'l':
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
      activeButton.classList.remove("pressed");
    },100)
    break;
    default:
    console.log(key);
  }
}
// var audio = new Audio("sounds/crash.mp3");
// audio.play();
