////

var randomNumber = Math.floor(Math.random()*102+19);

$("#number").text(randomNumber);

var mmsCandy = Math.floor(Math.random()*11+1);
var gummyCandy = Math.floor(Math.random()*11+1);
var hersheyCandy = Math.floor(Math.random()*11+1);
var twizzlersCandy = Math.floor(Math.random()*11+1);

var wins = 0;

$("#wins").text(wins);

var losses = 0;

$("#losses").text(losses);

var score = 0;

////
function reset(){

    randomNumber = Math.floor(Math.random()*101+19);

    $("#number").text(randomNumber);
    
    //Reset 
    mmsCandy = Math.floor(Math.random()*11+1);
    gummyCandy = Math.floor(Math.random()*11+1);
    hersheyCandy = Math.floor(Math.random()*11+1);
    twizzlersCandy = Math.floor(Math.random()*11+1);

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
//LOSE//
function loser() {

    alert ("Loser!");

    losses ++;

    $("#losses").text(losses);

//RESET//
    reset();
}

//BLOCK FOR CRYSTALS//

//PINK//

$("#cbest").on("click", function(){

    score += pinkCrystal

    $("#total-score").text(score); 

    if (score == randomNumber){
        winner();
    }

    else if ( score > randomNumber){
        loser();
    }
});

//BLUE//

$("#cblue").on("click", function(){

    score += blueCrystal

 
    $("#total-score").text(score); 

    if (score == randomNumber){
        winner();
    }

    else if ( score > randomNumber){
        loser();
    }
});

//GREEN//
$("#cgreen").on("click", function(){

    score += greenCrystal

    
    $("#total-score").text(score); 
    
    if (score == randomNumber){
        winner();
    }

    else if ( score > randomNumber){
        loser();
    }
});

//YELLOW//
$("#cyellow").on("click", function(){
    
    score += yellowCrystal


    $("#total-score").text(score); 
    
    if (score == randomNumber){
        winner();
    }

    else if ( score > randomNumber){
        loser();
    }
});