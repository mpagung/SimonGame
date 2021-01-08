alert("hello")
var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var userPattern=[];
var level=0;
var count=0;//the number of times the buttons are pressed

$(document).keydown(function(){
  //Start of game, the first button is shown
  alert("Let the game begin")
  if (level===0){
    nextSequence();
  }})

$(".btn").click(function(){
  var userChosenColor=$(this).attr("id");//gets button pressed
  userPattern.push(userChosenColor);//concatenate
  //animate
  animatePress(userChosenColor);
  playSound(userChosenColor);
  //Checks user input everytime key is pressed
  checkAnswer(userPattern.length-1);})



//   $(".btn").click(function(){
//     console.log("hi");
//     var userChosenColor=$(this).attr("id");
//     console.log(userChosenColor);
//     userPattern.push(userChosenColor);
//     console.log(userPattern);
//     animatePress(userChosenColor);
//     playSound(userChosenColor);
//   })
// }

function playSound(name){
  var button=new Audio("sounds/"+name+".mp3");
  button.play();
}
function animatePress(currentColor){
  $("#"+currentColor).fadeIn(100).fadeOut(100).fadeIn(100);
}
function nextSequence(){
  userPattern=[];
  console.log("user after reset:"+userPattern)

  var randomNumber=Math.floor(Math.random()*4);
  var randomChosenColor=buttonColors[randomNumber];
  animatePress(randomChosenColor);
  playSound(randomChosenColor);
  level++;
  $("h1").text("Level "+level);
  console.log("User:"+userPattern.length-1)
  console.log("game:"+gamePattern[userPattern.length-1])

  gamePattern.push(randomChosenColor);
  console.log("Here you go cheater:"+gamePattern)
}
function checkAnswer(currentLevel){
  console.log(userPattern[currentLevel] + "and"+gamePattern[currentLevel])
  if(userPattern[currentLevel]===gamePattern[currentLevel]){
    console.log("success");
    if(userPattern.length==gamePattern.length){
      console.log("level clear")
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }


  else if (userPattern.length==gamePattern.length) {
    console.log("wrong")
  }

}}

// When click, trigger handler function to register the button pressed




// function pressButton(){
//   $("button").click(nextSequence());
// }
