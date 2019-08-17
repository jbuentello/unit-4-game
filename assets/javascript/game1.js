var randomResult;
var wins = 0;
var losses = 0;
var lastNum = 0;

var resetGame = function () {
    $(".crystals").empty();

    randomResult = Math.floor(Math.random() * 101 ) + 19;

$("#result").html('Random Result: ' + randomResult);

for(var i = 0; i < 4; i++) {
    var randomNum = Math.floor(Math.random() * 11) + 1;
    var crystal= $("<div>");
        crystal.attr({
            "class": 'crystalImg',
            "data-random": randomNum
        });
    $(".crystals").append(crystal);
}
}

resetGame();
$(document).on('click', ".crystalImg", function() {

    var num = parseInt($(this).attr('data-random'));
    
    lastNum += num;

    $("#lastNum").html(lastNum);
    
    if(lastNum > randomResult) {
        losses++;
        $("#losses").html("Losses: " + losses);
        lastNum = 0;
        resetGame();
    }
    else if (lastNum === randomResult) {
        wins++;
        $("#wins").html("Wins: " + wins);
        lastNum = 0;
        resetGame();
    }

});


//PsuedoCode
// Page needs 4 Crystal images that will need to be clicked.
// Random number box, where a random number will be generated.
// Wins and loss box needs to be created.
//Each Crystal will need a random number assiged after each game. This number will need to be between 1-12.
//After the Crystal is clicked it will need to add that number to the next Crystal clicked.
//The number needs to be diplayed that is being added to alert the user where they stand.
//The number needs to stay the same on each crystal until the user wins or loses.
//If the users adds the crystals to the random number that is a win.
//If a users passes the number that is a lose.
//Once the user wins or loses the game resets using different random numbers