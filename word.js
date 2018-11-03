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
            if(newLetter.value===' '){
                newLetter.hidden=false;
            }
            this.defaultLetters.push(newLetter);
        }

    };

    this.updateDisplay=function(){

        this.displayedLetters=[];

        for(var letter of this.defaultLetters){

            if(letter.hidden===true&&letter.value!==' '){
                this.displayedLetters.push('_');
            }

            else if(letter===true&&letter.value===' '){
                this.displayedLetters.push(' ');   
            }

            else{
                this.displayedLetters.push(letter.value);
            }
        }

        console.log(this.displayedLetters.join(' '));
    };

    this.checkInput=function(input){
        
        if(this.usedGuesses.indexOf(input)<0){
            if(this.word.indexOf(input)<0){
                this.guessLeft--;
            }
            if(this.guessLeft<1){
                console.log("Game Over! Be devoured by the Roman Lions, come back when you are more apt for the jungle life!");
            }
            else{
                this.usedGuesses.push(input);
                var hidden=0;
                console.log("Correct Guess!");

                for(var letter of this.defaultLetters){
                    if(letter.value===input){
                        letter.hidden=false;
                    }
                    if(letter.hidden){
                        hidden++;
                    }
                }

                if(hidden===0){
                    console.log("You won! Congratulations, you are a feline master.")
                    this.updateDisplay();
                }
            }
        }

        else{
            console.log("You have already used this letter. Shame on you...");
            console.log("Just to refresh your memory, the letters that you have already used are: "+this.usedGuesses.join(' '));
        }

    };

};

module.exports=Word;