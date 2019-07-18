////

var randomNumber = Math.floor(Math.random()*102+19);

$("#number").text(randomNumber);

var pinkCrystal = Math.floor(Math.random()*11+1);
var blueCrystal = Math.floor(Math.random()*11+1);
var greenCrystal = Math.floor(Math.random()*11+1);
var yellowCrystal = Math.floor(Math.random()*11+1);

var wins = 0;

$("#wins").text(wins);

var losses = 0;

$("#losses").text(losses);

var score = 0;

////
function reset(){

    randomNumber = Math.floor(Math.random()*101+19);

    $("#number").text(randomNumber);
    
    //Reset random number for crystals
    pinkCrystal = Math.floor(Math.random()*11+1);
    blueCrystal = Math.floor(Math.random()*11+1);
    greenCrystal = Math.floor(Math.random()*11+1);
    yellowCrystal = Math.floor(Math.random()*11+1);

    score = 0;

    $("#total-score").text(score);
}

 //WINS//
function winner() {

    alert("Winner!");

    wins ++;

    $("#wins").text(wins);

    //Reset
    reset();
}

