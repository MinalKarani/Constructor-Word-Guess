var word = require("./Word.js");
var inquirer=require("inquirer");

var targetwords=["internet","html","web","apple","android","google","gmail","android"];
var i=0;
var noofGuesses=8;
var target;

function targetWord()
{
    i=0;
    var randomNumber=Math.floor(Math.random()*targetwords.length);
    targetword=targetwords[randomNumber];
    console.log("Target Word:  "+targetword);
    target = new word(targetword);
    game();
}

function game()
{
    var comparisonWord=target.wordString();
    console.log("comparison  "+comparisonWord);
    console.log("target  "+targetword);
    console.log("Guesses remaining:  "+(-i+8));
    if((i<noofGuesses)&&(comparisonWord!=targetword))
    {
        i++;
        
        console.log(target.wordString());
        inquirer.prompt([
            {
            name:"guess",
            type:"input",
            message:"Enter your guess.."
            }
        ]).then(function(answer){   
            target.wordGuess(answer.guess);
            game();
    })
    }
    else if(comparisonWord===targetword)
    {
        console.log("Correct Answer!");
        inquirer.prompt([
            {
            name:"PlayAgain",
            type:"input",
            message:"Do you want to play again?"
            }
        ]).then(function(answer){   
            if(answer.PlayAgain)
            targetWord();
        });
    }
    else if(noofGuesses===8)
    {
        console.log("Wrong Answer!");
        inquirer.prompt([
            {
            name:"PlayAgain",
            type:"confirm",
            message:"Do you want to play again?"
            }
        ]).then(function(response){   
            if(!response.PlayAgain)
            console.log("Plese visit again!!");
    });
    
}
}
targetWord();
