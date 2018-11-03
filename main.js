//https://github.com/Geoff-Goodwin-Dev/Constructor-Word-Guess/blob/master/index.js
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