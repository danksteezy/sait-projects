//global variable to hold my gamePieces array
var gamePieces;

//global varials user input, computer input and winner are global variables so
//we can call on these values later with jQuery
var input;
var compInput;
var winner;

//when button is clicked, function to start the game is initialized
function startGame(){
  //Creates array with gamePieces
  gamePieces = new Array("Rock","Paper","Scissors","Dynamite");
  //Prompt for the user to enter a value
  input = window.prompt("Please enter your move!(Case Sensitive)","Choices are Rock, Paper, Scissors or Dynamite");
  //checks if input is valid, will loop until a value is valid
  while(!(input == "Rock" || input == "Paper" || input == "Scissors" || input == "Dynamite")){
      input = window.prompt("Invalid input. Please enter your move!(Case sensitive)","Choices are Rock, Paper, Scissors or Dynamite");
  }
  //Generate a computer game piece
  compInput = getRandomGamePiece();

  //compare and determine who wins
  winner = whoWins(input,compInput);

}

//function to generate a random gamepiece for computer
function getRandomGamePiece(){
  var myRandomIndex = Math.ceil(Math.random()*gamePieces.length);
  //using switch statement to return computer game piece value
  var compGamePiece = "";

  switch(myRandomIndex){
    case 1:
      compGamePiece = "Rock";
      break;
    case 2:
      compGamePiece = "Paper";
      break;
    case 3:
      compGamePiece = "Scissors";
      break;
    case 4:
      compGamePiece = "Dynamite";
      break;
    default:
      alert("function getRandomGamePiece Error");
  }
  //return the generated value
  return compGamePiece;
}

//function to determine who wins
function whoWins(user,comp){
  if(user==comp){
    return "It is a tie!";
  }
  if(user=="Rock"){
    if(comp=="Scissors"){
      return "You Wins!";
    }else {
      return "Computer Wins!";
    }
  }
  if(user=="Paper"){
    if(comp=="Rock"){
      return "You Wins!"
    }else {
      return "Computer Wins!";
    }
  }
  if(user=="Scissors"){
    if(comp=="Paper"){
      return "You Wins!"
    }else {
      return "Computer Wins!";
    }
  }
  else{
    return "You Win!";
  }
}

$(document).ready(function(){
  $("button").click(function(){
    $("#results").html("You picked: " + input + "<br/>" + "Computer picked: " + compInput +"<br/>" + winner);
  })
})
