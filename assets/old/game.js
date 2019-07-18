//----CREATE GLOBAL VARIABLES----//

//Generate a random number that will be shown on the screen between 19-120 (max minus min to get first number)
var randomNumber = Math.floor(Math.random()*101+19);

//Append to html number
$("#number").text(randomNumber);

//Generate random numbers for each of the crystals between 1-12
var pinkCrystal = Math.floor(Math.random()*11+1);
var blueCrystal = Math.floor(Math.random()*11+1);
var greenCrystal = Math.floor(Math.random()*11+1);
var yellowCrystal = Math.floor(Math.random()*11+1);

//Variable for keeping track of wins
var wins = 0;

//Append to #wins html
$("#wins").text(wins);

//Variable for keeping track of losses
var losses = 0;

//Append #losses html
$("#losses").text(losses);

//Variable for keeping track of total score
var score = 0;

//----RESET FUNCTION----//
function reset(){

    //Reset the random number
    randomNumber = Math.floor(Math.random()*101+19);

    //Append the number to the id in html
    $("#number").text(randomNumber);
    
    //Reset random number for crystals
    pinkCrystal = Math.floor(Math.random()*11+1);
    blueCrystal = Math.floor(Math.random()*11+1);
    greenCrystal = Math.floor(Math.random()*11+1);
    yellowCrystal = Math.floor(Math.random()*11+1);

    //Reset the total score
    score = 0;

    //Append the number of total score to the id in html
    $("#total-score").text(score);
}

//----FUNCTION FOR WINNING----//
function winner() {

    //Alert user has won
    alert("Winner!");

    //Incement the wins
    wins ++;

    //Append text to DOM
    $("#wins").text(wins);

    //Reset
    reset();
}

//----FUNCTION FOR LOSING----//
function loser() {

    //Alert user has lost
    alert ("Loser!");

    //Incement the losses
    losses ++;

    //Append text to DOM
    $("#losses").text(losses);

    //Reset
    reset();
}

//----CREATE CLICK FUNCTIONS FOR CRYSTALS----//

//Create a click function for pink crystal
$("#c1").on("click", function(){

    //Set the totaly score equal to the score plus the crystal's number
    score += pinkCrystal

    //Check to see if it's working
    // console.log("Total: " + score);

    //Append the number guessed to the DOM
    $("#total-score").text(score); 

    //If the totaly score is equal to the random number that the computer generated then they win (call win function)
    if (score == randomNumber){
        winner();
    }

    //If the totaly score is greater than random number that the computer generated then they lose (call lose function)
    else if ( score > randomNumber){
        loser();
    }
});

//Create a click function for blue crystal
$("#c2").on("click", function(){

    //Set the totaly score equal to the score plus the crystal's number
    score += blueCrystal

    //Check to see if it's working
    // console.log("Total: " + score);

    //Append the number guessed to the DOM
    $("#total-score").text(score); 

    //If the totaly score is equal to the random number that the computer generated then they win (call win function)
    if (score == randomNumber){
        winner();
    }

    //If the totaly score is greater than random number that the computer generated then they lose (call lose function)
    else if ( score > randomNumber){
        loser();
    }
});

//Create a click function for green crystal
$("#c3").on("click", function(){

    //Set the totaly score equal to the score plus the crystal's number
    score += greenCrystal

    //Check to see if it's working
    // console.log("Total: " + score);

    //Append the number guessed to the DOM
    $("#total-score").text(score); 
    
    //If the totaly score is equal to the random number that the computer generated then they win (call win function)
    if (score == randomNumber){
        winner();
    }

    //If the totaly score is greater than random number that the computer generated then they lose (call lose function)
    else if ( score > randomNumber){
        loser();
    }
});

//Create a click function for yellow crystal
$("#c4").on("click", function(){
    
    //Set the totaly score equal to the score plus the crystal's number
    score += yellowCrystal

    //Check to see if it's working
    // console.log("Total: " + score);

    //Append the number guessed to the DOM
    $("#total-score").text(score); 
    
    //If the totaly score is equal to the random number that the computer generated then they win (call win function)
    if (score == randomNumber){
        winner();
    }

    //If the totaly score is greater than random number that the computer generated then they lose (call lose function)
    else if ( score > randomNumber){
        loser();
    }
});