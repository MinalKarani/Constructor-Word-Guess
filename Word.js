var letter=require("./Letter.js");
var chalk = require('chalk');

var Word=function(targetWord)
{

    //An array of `new` Letter objects representing the letters of the underlying word
    this.newLetters=[];
    this.targetWord=targetWord;
    
    for(var i=0;i<this.targetWord.length;i++)
    {
        this.newLetters.push( new letter(this.targetWord[i]));
    }

//A function that returns a string representing the word. 
this.wordString = function(){
    
    //This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
    var answerWord="";
    for(var i=0;i<this.newLetters.length;i++)
    {
        
        answerWord=answerWord  + " " + this.newLetters[i].characterOutput();
    }
    return answerWord;

}
//A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
this.wordGuess = function(guessedWord){
    var flag=false;
    for(var i=0;i<this.newLetters.length;i++)
    {
            //console.log(this.newLetters[i]);
            if (!this.newLetters[i].ifletterGuessed)
            {
            this.newLetters[i].characterGuessed(guessedWord);
            if (this.newLetters[i].ifletterGuessed===true){
                flag=true;
            }
        }
                       
    }
    if(flag){
        console.log(chalk.green.bold("\nCorrect, keep guessing"));
    }
    else{
        console.log("\nWrong! Try again!".custom);
    }

}
}

// exporting our Word constructor
module.exports = Word;