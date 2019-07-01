

// Variable to store random total number
var totalRandomNum;
var userTotal=0;
var wins = 0;
var losses = 0;

// Variables to store ramdom numbers for Crystals
var lavenderNum;
var redNum;
var yellowNum;
var greenNum;

// start/reset function
var startReset = function(){
    
    totalRandomNum = Math.floor(Math.random()*99);
    userTotal =0;

    lavenderNum= Math.floor(Math.random()*12) + 1;
    redNum= Math.floor(Math.random()*12) + 1;
    yellowNum= Math.floor(Math.random()*12) + 1;
    greenNum= Math.floor(Math.random()*12) + 1;

    console.log("totalRandomNumber: ", totalRandomNum)
    console.log(lavenderNum);
    console.log(redNum);
    console.log(totalRandomNum);
    console.log(yellowNum);
    $("#totalNumber").text("Total Number : "+ totalRandomNum);
    
    // assign attribute values to crystals
    $("#lavenderButton").attr("value", lavenderNum);
    $("#redButton").attr("value", redNum);
    $("#yellowButton").attr("value", yellowNum);
    $("#greenButton").attr("value", greenNum);

}   

startReset();

$("start").on("click", function(){
    startReset();
});

console.log("Attribute Value " +$("#lavenderButton").attr("value"));


 $("#lavenderButton").click(function(){
    
    num = $("#lavenderButton").attr("value");
    userTotal = userTotal + parseInt(num);    
    
    if(userTotal===totalRandomNum) // this is a win
    {
        wins++;        
        $("#wins").text("Wins: "+wins);
        startReset();
    }
    else if(userTotal > totalRandomNum) // this is a loss
    {
        losses++;
        $("#losses").text("Losses: "+losses);        
        startReset();
    }
    else
    {
        null;
    }
}); 

$("#redButton").click(function(){
    
    num = $("#redButton").attr("value");
    userTotal = userTotal + parseInt(num);    
    
    if(userTotal===totalRandomNum) // this is a win
    {
        wins++;        
        $("#wins").text("Wins: "+wins);
        console.log("in wins  : "+wins);
        startReset();
    }
    else if(userTotal > totalRandomNum) // this is a loss
    {
        losses++;
        $("#losses").text("Losses: "+losses);
        console.log("in losses : "+losses);        
        startReset();
    }
    else
    {
        null;
    }
}); 
$("#yellowButton").click(function(){
    
    num = $("#yellowButton").attr("value");
    userTotal = userTotal + parseInt(num);    
    
    if(userTotal===totalRandomNum) // this is a win
    {
        wins++;        
        $("#wins").text("Wins: "+wins);
        console.log("in wins  : "+wins);
        startReset();
    }
    else if(userTotal > totalRandomNum) // this is a loss
    {
        losses++;
        $("#losses").text("Losses: "+losses);
        console.log("in losses : "+losses);        
        startReset();
    }
    else
    {
        null;
    }
}); 
$("#greenButton").click(function(){
    
    num = $("#greenButton").attr("value");
    userTotal = userTotal + parseInt(num);    
    
    if(userTotal===totalRandomNum) // this is a win
    {
        wins++;        
        $("#wins").text("Wins: "+wins);
        console.log("in wins  : "+wins);
        startReset();
    }
    else if(userTotal > totalRandomNum) // this is a loss
    {
        losses++;
        $("#losses").text("Losses: "+losses);
        console.log("in losses : "+losses);        
        startReset();
    }
    else
    {
        null;
    }
}); 