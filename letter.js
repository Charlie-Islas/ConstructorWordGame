var Letter=function(char){

    this.char=char;
    this.hide=true;

    this.showOrHide=function(userInput){

        if(userInput===this.char){
            this.hide=false;
        }
    };
};

module.exports=Letter;
