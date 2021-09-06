
// This is my function for a user prompted question
function questionPrompt(){
    let userAnswer = prompt("Do you like pandas?");
    console.log(userAnswer);
    if(userAnswer.toLowerCase() == 'no'){
        document.write("<img src=Panda.jpg>");
        } else {
            (userAnswer.toLowerCase() == 'yes');
         {
                document.write("<img src=Panda2.jpg>");
        }
    }
}


// This is my button function
function pandaAlert() {
        alert("Pandas eat between 26 and 84 pounds of Bamboo per day.");
    }


//This is my cursor change function
function cursorChange(){
    document.getElementById("clickme").style.cursor = "pointer";
    document.getElementById("pandaButton").style.cursor = "pointer";
}

function buttonCursor(){
    document.getElementById("ratingButton").style.cursor = "pointer";
}

//This is my user input function
function hungryPanda(){
    let play = prompt('Would you like to rate my page? (yes or no)');
    console.log(play)
    while (play.toLowerCase() == 'yes'){
        let tries = 200;
        for(let i = 1; i <=tries; i){
            userAnswer = prompt("What would you rate it between 1 and 5 stars");
            if(userAnswer == 5){
                alert("Thank you very much!"); 
                (tries - i);
                break;
            }
            if(userAnswer < 5);{
                alert("China does not accept anything less than a 5");
                (tries - i);
            }
        }
    return("Thank you for rating my page!")
    }
}