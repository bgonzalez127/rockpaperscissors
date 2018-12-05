// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

$(function () {
    $("#shoot").click(function(){
        var compchoice = "";
        var x = Math.random();
        if(x <= .33) {
            compchoice = "Rock";
        } else if (x <= .66) {
            compchoice = "Paper";
        } else {
          compchoice = "Scissor";  
        }
        
        var userchoice =  $("#input").val();
        
        // we will assign these based on the result below
        var tie = false;
        var userWon = false;
        
        if(userchoice === compchoice){
            tie = true;
        } else if (userchoice === "Scissor" && compchoice === "Paper"){
            userWon = true;
        }else if (userchoice === "Rock" && compchoice === "Scissor"){
            userWon = true;
        }else if (userchoice === "Paper" && compchoice === "Rock"){
            userWon = true;
        }
        
        var result = "";
        // tie, you lost, you won
        if(tie) {
            result = "You tied yo";
        } else if(userWon) {
            result = "You won yo";
        } else {
            result = "You lost, dumby";
        }
         
        
        
        // is tie true?
        
        console.log("hello", compchoice);
        $("#userChoice").text(userchoice);
        $("#computerChoice").text(compchoice);
        $("#result").text(result);

    });
});