
var inquirer=require("inquirer");
var Word=require("./word.js");
var validLetters="abcdefghijklmnopqrstuvwxyz";
var felineArray=['clouded leopard','caracal','cat','cheetah','fishing cat','jaguar','jungle cat','lion','lynx','margay','marbled cat','leopard','panther','cougar','red lynx','pampas cat','sand cat','serval','snow leopard','tiger cat','tiger'];
var word='';
var selectedCat='';


function randomNum(min,max){
    min=Math.ceil(min);
    max=Math.floor(max);
    return (Math.floor(Math.random()*(max-min+1))+min);
}

function selectCat(){
    selectedCat=felineArray[randomNum(0,felineArray.length-1)];
}

function validateLetter(userInput){
    if(validLetters.indexOf(userInput)<0||userInput===""){
        console.log("Invalid input. Please enter only letters... no spaces, signs, numbers, or other characters!");
        return false;
    }
    else{
        return true;
    }
}

function askLetter(){
    word.updateDisplay();
    console.log(" ");
    inquirer.prompt([
        { name: 'userInput',
          message: 'Type you letter guess: '
        },
      ]).then((response) => {
        var userInput = response.userInput.toLowerCase();
        if (userInput === 'exit') {
          process.exit();
        }
        else {
          if (validateLetter(userInput)===true) {
            if (word.checkInput(userInput) === 0) {
              otherRound();
            }
            else {
              askLetter();
            }
          }
          else {
            askLetter();
          }
        }
      });
}


function startGame(){
    console.clear();
    console.log("Welcome to the feline word guess game. Do your best to guess the displayed feline species. But beware, too many mistakes will lead to your doom...");
    selectCat();
    word=new Word(selectedCat);
    word.buildLetters();
    askLetter();

}

function otherRound(){
    inquirer.prompt([
        { type: 'list',
          name: 'otherRound',
          message: 'Do you want to guess the next feline species?',
          choices: ['Yes', 'No']
        },
      ]).then(function (res) {
        var otherRound = res.otherRound;
        if (otherRound === 'No') {
          console.log("Boo... fine, we'll keep the Roman Lions ready for the next victim.. Bye...");
          process.exit();
        }
        else {
          startGame();
        }
      });

}

startGame();