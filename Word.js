var letter=require("./Letter.js");
var Word=function(targetWord)
{

    //An array of `new` Letter objects representing the letters of the underlying word
    this.newLetters=[];
    this.targetWord=targetWord;

    for(var i=0;i<this.targetWord.length;i++)
    {
        this.newLetters.push(this.targetWord[i]);
    }
    console.log(this.newLetters);

//A function that returns a string representing the word. 
this.wordString = function(){
    
    //console.log("Target-Word:  "+this.newLetters.);
    //This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
    var answerWord="";
    for(var i=0;i<this.newLetters.length;i++)
    {
        var newObj= new letter(this.newLetters[i]);
        answerWord=answerWord + " " + newObj.characterOutput();
    }
    console.log("Answer-Word:  "+answerWord);

}
//A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
this.wordGuess = function(guessedWord){
    console.log(".......................");
    //console.log(guessedWord);
    console.log(this.newLetters.length);

    for(var i=0;i<this.newLetters.length;i++)
    {
        var newObj= new letter(this.newLetters[i]);
        console.log("************************");
        //console.log(this.newLetters[i]);
        newObj.characterGuessed(guessedWord);
    }
};

}

// exporting our Word constructor
module.exports = Word;