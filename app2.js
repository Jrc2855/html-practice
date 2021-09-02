// This is my function for a user prompted question
function Question(){
    let userAnswer = prompt("Do you like pandas?");
    console.log(userAnswer);
    if(userAnswer() == 'no'){
        document.write("img src=Panda.jpg");
    } else {
        (userAnswer() == 'yes');
        {
            document.write("img src=Panda2.jpg");
        }
    }
}

Question ();