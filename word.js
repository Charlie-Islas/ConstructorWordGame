var Letter=require("./letter.js");

var Word=function(word){

    this.word=word;
    this.wordLength=word.length;
    this.guessLeft=10;
    this.defaultLetters=[];
    this.displayedLetters=[];
    this.usedGuesses=[];

    this.buildLetters=function(){

        for(var i=0;i<word.length;i++){
            var newLetter=new Letter(this.word.charAt(i));
            if(newLetter.char===' '){
                newLetter.hide=false;
            }
            this.defaultLetters.push(newLetter);
        }
    };

    this.updateDisplay=function(){

        console.log("Feline species to guess: ");
        this.displayedLetters=[];
      
        for(var letter of this.defaultLetters){

            if(letter.hide===true&&letter.value!==' '){
                this.displayedLetters.push('_');
            }

            else if(letter===true&&letter.value===' '){
                this.displayedLetters.push(' ');   
            }

            else{
                this.displayedLetters.push(letter.char);
            }
        }
        console.log(this.displayedLetters.join(' '));
    };

    this.checkInput=function(input){
        if(this.usedGuesses.indexOf(input)<0){
            if(this.word.indexOf(input)<0){
                this.guessLeft--;
                if(this.guessLeft<1){
                    console.log("Game Over! Be devoured by the Roman Lions, come back when you are more apt for the jungle life!");
                    return 0;
                }
                
                else{
                    this.usedGuesses.push(input);
                    console.log("Incorrect Guess! You have "+this.guessLeft+" guesses remaining.");
                    console.log("Letters you have already used: "+this.usedGuesses.join(", "));
                }
            }
            else{
                this.usedGuesses.push(input);
                var hidden=0;
                console.log("Correct Guess!");
                for(var x in this.defaultLetters){
                    if(this.defaultLetters[x].char===input){
                        this.defaultLetters[x].hide=false;
                    }
                    if(this.defaultLetters[x].hide===true){
                        hidden++;
                    }
                }

                if(hidden===0){
                    console.log("Congratulations! You won, you are a feline master.");
                    this.updateDisplay();
                    return 0;
                }
            }
        }
        else{
            console.log("You have already used this letter. Shame on you...");
            console.log("Letters you have already used: "+this.usedGuesses.join(", "));
        }
    }
    };

module.exports=Word;