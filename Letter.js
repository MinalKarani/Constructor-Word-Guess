var Letter=function(character){

    //underlying character for the letter
    this.character=character;
    //whether that letter has been guessed yet
    this.ifletterGuessed=false;

    //A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.characterOutput=function(){
        if(this.ifletterGuessed===true)
        {
            console.log(this.character);
            return this.character;
        }
        else
        {
            //console.log("_");
            return "_";
        }

    };
    //A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

    this.characterGuessed=function(guessedLetter){
        
        console.log("minal: "+guessedLetter,this.character);
        if(guessedLetter===this.character)
        {
            console.log("Guessed: "+this.character);
            this.ifletterGuessed=true;
        }
    }
};

// exporting our Letter constructor
module.exports = Letter;