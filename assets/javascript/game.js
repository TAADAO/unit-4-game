$(document).ready()
var targetNumber = Math.floor(Math.random() * 101) + 19;

$(".computerNumber").text("The computer's number is " + targetNumber);

var counter = 0;
var playerScore = Math.round(Math.random() * 12) + 1;
var wins = 0
var losses = 0

$(".cry1, .cry2, .cry3, .cry4").on("click", function () {

    counter += playerScore;

    $(".yourScore").text("Your current score is " + counter);

    if (counter === targetNumber) {
        alert("You win!");
        wins++;
        $('.totalWins').text("Wins: " + wins);
        document.body.style.counterReset = ".yourScore";

    }
    else if (counter > targetNumber) {
        alert("You lose!");
        losses++;
        $('.totalLosses').text("Losses: " + losses);
        document.body.style.counterReset = ".yourScore";
    }

});