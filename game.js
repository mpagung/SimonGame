alert("hello")
var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];

gamePattern.push(nextSequence())



function nextSequence(){
  var randomNumber=Math.floor(Math.random()*4);
  var randomChosenColor=buttonColours[randomNumber];
  // gamePattern.push(randomChosenColor)
  $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  // var button=new Audio("sounds/"+randomChosenColor+".mp3");
  // button.play();

  return randomChosenColor
}

// function pressButton(){
//   $("button").click(nextSequence());
// }
