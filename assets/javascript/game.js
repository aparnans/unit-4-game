

// Variable to store random total number
var totalRandomNum;
var userTotal=0;

// Variables to store ramdom numbers for Crystals
var lavendarNum;
var redNum;
var yellowNum;
var greenNum;

// start/reset function
var startReset = function(){
    totalRandomNum = Math.floor(Math.random()*99);

    lavendarNum= Math.floor(Math.random()*12);
    redNum= Math.floor(Math.random()*12);
    yellowNum= Math.floor(Math.random()*12);
    greenNum= Math.floor(Math.random()*12);

    // console.log(totalRandomNum);
    // console.log(lavendarNum);
    // console.log(redNum);
    // console.log(totalRandomNum);
    // console.log(yellowNum);
    //console.log("totalRandomNumber: ", totalRandomNum)
    $("#totalNumber").text("Total Number : "+ totalRandomNum);
    
    // assign

    //console.log($("#lavendarButton").attr("value"));
    
    

    $("#red").attr("value", redNum);
    $("#yellow").attr("value", yellowNum);
    $("#green").attr("value", greenNum);

}   

startReset();

console.log(lavendarNum);
$("#lavenderButton").attr("value", lavendarNum);

//var lav = document.getElementById("#lavenderButton");

//lav.setAttribute("value","50");


console.log($("#lavenderButton").attr("value"));

var assignNum= function(idname,p_num){
    
    console.log("in click");
    console.log("type of userTotal : "+typeof(userTotal));

    console.log("type of pnum : "+typeof(p_num));
    
    userTotal = userTotal + parseInt(p_num);
    
    console.log("userTotal : "+userTotal);

    
}

 $("#lavendarButton").on("click", assignNum("a","4"));