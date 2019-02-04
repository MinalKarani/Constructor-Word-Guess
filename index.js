var word = require("./Word.js");
var inquirer=require("inquirer");

var targetwords=["internet","html","web","apple","android","google","gmail","android"];
var i=0;
var noofGuesses=5;
var randomNumber=Math.floor(Math.random()*targetwords.length);
targetword=targetwords[randomNumber];
console.log("Target Word:  "+targetword);
var target = new word(targetword);
target.wordString();

function game()
{
   
    if(i<noofGuesses)
    {
        i++;
        inquirer.prompt([
            {
            name:"guess",
            type:"input",
            message:"Enter your guess.."
            }
        ]).then(function(answer){   
            var guess1= new word(answer.guess);
            target.wordGuess(answer.guess);
            //guess1.wordString();
            game();



    })
    }

}
game();