//Selects all the buttons with class drum and tells the number of buttons with the help of length function.
var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i =0;i<numberOfButtons;i++){
  //Selects all the buttons with class button and adds eventlistener to it and gives a command when click the function calls.
  document.querySelectorAll("button")[i].addEventListener("click", function (){
    //"This" helps to select all the html content on the page and helps to store inside the variable.
    var buttonInneHTML1 = this.innerHTML;
    makeSound(buttonInneHTML1);

    buttonAnimation(buttonInneHTML1);

  });
}
//"keydown" is a function used when a key is pressed and after that the function written in the next parameter runs.
document.addEventListener("keydown",function(event){
  //"key" here helps to detect which key is pressed on the keyboard and sends that key to the function and checks is there any function specified for this key.
  makeSound(event.key);
  buttonAnimation(event.key);
});
function makeSound(key){

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

      case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

      case "s":
      var tom3 = new Audio("sounds/tom-3.mp3 ");
      tom3.play();
      break;

      case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

      case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

      case "k":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

      case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

      // This line prints the key pressed by the user on the console.
    default: console.log(key);

  }
}

function buttonAnimation(currentKey){
  var currentButton = document.querySelector("." + currentKey);
  currentButton.classList.add("pressed");

  setTimeout(function(){
    currentButton.classList.remove("pressed");
  },100);

}
