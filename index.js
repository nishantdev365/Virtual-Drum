var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

function resetColor() {
  setTimeout(function() {
    document.body.style.backgroundColor = "#283149";
  }, 200);
}

function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      document.body.style.backgroundColor = "#45f6e4";
      tom1.play();
      resetColor();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      document.body.style.backgroundColor = "#ff0000";
      resetColor();
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      document.body.style.backgroundColor = "#2629a0";
      resetColor();
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      document.body.style.backgroundColor = "#ff7800";
      resetColor();
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      document.body.style.backgroundColor = "#c32867";
      resetColor();
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      document.body.style.backgroundColor = "	#006bff";
      resetColor();
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      document.body.style.backgroundColor = "#00b0bf";
      resetColor();
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
