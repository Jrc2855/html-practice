
// This is my function for a user prompted question
function question(){
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
function button(){
    var button = document.querySelector();
    button.onclick = function panda(){
        alert("Pandas eat between 26 and 84 pounds of Bamboo per day.") ;
    }
}


//This is my cursor change function
function cursor(){
    document.getElementById("clickme").style.cursor = "pointer";
    document.getElementById("emoji1").style.cursor = "pointer"
}

//This is my user input function
function hungryPanda(correctAnswer);
{
    let play = prompt('Would you like to guess how much bamboo the panda ate? (yes or no)');
    console.log<(play)
    while (play.toLowerCase() == 'yes'){
        let tries = 3;
        for(let p = 1; p <= tries; p++){
            userAnswer = prompt("Pick a number between 1 and 90");

            while((userAnswer < 1) || (userAnswer > 90)){
                userAnswer = prompt('How much did the panda eat?');
            }
            if(userAnswer == correctAnswer){
                alert("That's correct!");
                break;
            }   else(userAnswer == incorrectAnswer);{
                alert("That's incorrect. Try again. You have " + (tries - p) + " tries left");
            }
        }
    }

}