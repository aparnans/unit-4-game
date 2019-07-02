

// Variable to store random total number
var totalRandomNum;
var userTotal = 0;
var wins = 0;
var losses = 0;

// Variables to store ramdom numbers for Crystals
var lavenderNum;
var redNum;
var yellowNum;
var greenNum;
var winLoss = false;

// start/reset function
var startReset = function () {

    totalRandomNum = Math.floor(Math.random() * 99) + 2;
    userTotal = 0;

    // reset wins ,losses only in case of start/reset
    // and not when user wins or loses
    console.log(winLoss);
    if (!winLoss) {

        wins = 0;
        losses = 0;
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);

    }
    else {
        winLoss = false;
    }
    lavenderNum = Math.floor(Math.random() * 12) + 1;
    redNum = Math.floor(Math.random() * 12) + 1;
    yellowNum = Math.floor(Math.random() * 12) + 1;
    greenNum = Math.floor(Math.random() * 12) + 1;

    $("#totalNumber").text("Total Number : " + totalRandomNum);
    $("#userTotal").css("opacity", "0.0");

    // assign attribute values to crystals
    $("#lavenderButton").attr("value", lavenderNum);
    $("#redButton").attr("value", redNum);
    $("#yellowButton").attr("value", yellowNum);
    $("#greenButton").attr("value", greenNum);
}

startReset();

$("#start").on("click", function () {
    startReset();
});

var imgClick = function (idName) {

    var num = $(idName).attr("value");
    userTotal = userTotal + parseInt(num);

    // Display the user total
    $("#userTotal").css("opacity", "1.0");
    $("#userTotal").text("User Total: " + userTotal);

    if (userTotal === totalRandomNum) // this is a win
    {
        wins++;
        $("#wins").text("Wins: " + wins);
        winLoss = true;
        startReset();
    }
    else if (userTotal > totalRandomNum) // this is a loss
    {
        losses++;
        $("#losses").text("Losses: " + losses);
        winLoss = true;
        startReset();
    }
};

$("#redButton").click(function () {
    imgClick("#redButton");
});

$("#lavenderButton").click(function () {
    imgClick("#lavenderButton");
});

$("#yellowButton").click(function () {
    imgClick("#yellowButton");
});

$("#greenButton").click(function () {
    imgClick("#greenButton");
}); 