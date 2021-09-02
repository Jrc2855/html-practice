
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
    var button = document.querySelector('button');
    document.getElementById("button").style.cursor = "pointer";
    button.onclick = function panda(){
        alert("Pandas eat between 26 and 84 pounds of Bamboo per day.") ;
    }
}


//This is my cursor change function
function cursor(){
    document.getElementById("clickme", "panda.emoji").style.cursor = "pointer";
}