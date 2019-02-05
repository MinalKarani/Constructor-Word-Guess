var word = require("./Word.js");
var inquirer=require("inquirer");
var colors = require('colors');

colors.setTheme({
    custom: ['red', 'underline']
  });
//target words array
var targetwords=["chrome", "firefox", "javascript", "jquery", "twitter", "github", "wordpress", "opera", "sass", "layout", "standards", "semantic", "designer", "developer", "module", "component", "website", "creative", "banner", "browser", "screen", "mobile", "footer", "header", "typography", "responsive", "programmer", "css", "border", "compass", "grunt", "pixel", "document", "object", "ruby", "bootstrap", "python", "php", "pattern", "ajax", "node", "element", "android", "application", "adobe", "apple", "google", "microsoft", "bookmark", "internet", "icon", "svg", "background", "property", "syntax", "flash", "html", "font", "blog", "network", "server", "content", "database", "socket", "function", "variable", "link", "apache", "query", "proxy", "backbone", "angular", "email", "underscore", "cloud"];
var letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var i=0;
var noofGuesses=10;
var target;
var guessedletters=[];

//function to pick word to be guessed
function targetWord()
{
    i=0;
    while(guessedletters.length>0)
    {
        guessedletters.pop();
    }
    var randomNumber=Math.floor(Math.random()*targetwords.length);
    //pick random word from targetwords array
    targetword=targetwords[randomNumber];
    console.log("*******************************************************".rainbow);
    console.log("\nWelcome! Please start guessing the word\n");
    console.log("Hint:  Words are web related! \n")
    console.log("*******************************************************".rainbow);
    target = new word(targetword);
    game();
}

//check if character entered is an alphabet and character is already not guessed
function letterGuessed(userguess) {
    if(letters.includes(userguess))
    {
        
        if(!(guessedletters.includes(userguess)))
        {
            guessedletters.push(userguess);
            return true;
        }
        else{
            console.log("\ntry some other letter!\n".custom);
            return false;
        }
    }

}

 
//main game
function game()
{
    var comparisonWord=target.wordString().replace(/ /g, '');
    //display number of guesses remaining to the user
    console.log("\nGuesses remaining:  "+(-i+10));
    
    if((i<noofGuesses)&&(comparisonWord!=targetword))
    {
        
        //printing the guessed letters of the underlying word
        console.log("*******************".rainbow);
        console.log(target.wordString());
        console.log("*******************".rainbow);

        inquirer.prompt([
            {
            name:"guess",
            type:"input",
            message:"Enter your guess.."
            }
        ]).then(function(answer){   
            if(letterGuessed(answer.guess))
            {
                i++;
            }
            //method from word constructor to check if character guessed by user is present in target word 
            target.wordGuess(answer.guess);
            game();
            
    })
    }
    //if user guessed the word 
    else if(comparisonWord===targetword)
    {
        console.log("*************************************".rainbow);
        console.log("Great! You Won! Correct answer was:  "+targetword);
        console.log("*************************************".rainbow);
        inquirer.prompt([
            {
            name:"PlayAgain",
            type:"confirm",
            message:"Do you want to play again?"
            }
        ]).then(function(response){
            //user wants to play again   
            if(response.PlayAgain){
            targetWord();}
            //user wants to stop
            else{
            console.log("Please visit again!!\n");}
        });
    }
    //if total number of attempts exceeded
    else if(noofGuesses===10)
    {
        console.log("********************************************".rainbow);
        console.log("You Lost ! Wrong Answer! Correct answer was:  ".custom+targetword +"\n");
        console.log("********************************************".rainbow);
        inquirer.prompt([
            {
            name:"PlayAgain",
            type:"confirm",
            message:"Do you want to play again?\n"
            }
        ]).then(function(response){   
            if(!response.PlayAgain){
            console.log("Please visit again!!");}
            else{
                targetWord();
            }
    });
    
}
}
//initiate game
targetWord();
