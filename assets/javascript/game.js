$(document).ready()
var targetNumber = Math.floor(Math.random() * 101) + 19;

$(".computerNumber").text("The computer's number is " + targetNumber);

var counter = 0;
var playerScore = Math.round(Math.random() * 12) + 1;
var wins = 0
var losses = 0



$(".allCrystals").on("click", function () {

    //I can't figure out how to create the sub-function that allows the random numbers be assigned to each crystal
    //instead of all of them. Everything else seems to be okay but that one thing. 

    counter += playerScore;

    $(".yourScore").text("Your current score is " + counter);

    if (counter === targetNumber) {
        alert("You win!");
        wins++;
        $('.totalWins').text("Wins: " + wins);
        counter = 0;


    }
    else if (counter > targetNumber) {
        alert("You lose!");
        losses++;
        $('.totalLosses').text("Losses: " + losses);
        counter = 0;
    }

});