//Possible2Bits Possible2Bits.js
//author: Kian Kai Ang

var output = "";
var combinationN = 0; 
var textbox = document.getElementById("userInput");

//press enter to click calculate
//
textbox.addEventListener("keyup",function(event){
    if(event.keyCode == 13){
        event.preventDefault();
        document.getElementById("calculate-clicked").click();
    }
})


//calculate and display the possible bits of n
//
function calculatePosBits(){
    var input = document.getElementById("userInput").value;
    
    if(input == ""){
        document.getElementById("combinationNum").innerHTML = "Combination: " + combinationN;
        document.getElementById("output").innerHTML = "ERROR! Please enter a number.";
        
        output = "";
        combinationN = 0;
    }else{
        recursiveCal(input, "");
        output = "{" + output;
        output = output.replaceAt(output.length-2,"}");
        combinationN = "Combination: " + combinationN;
    
        document.getElementById("combinationNum").innerHTML = combinationN;
        document.getElementById("output").innerHTML = output;
    
        output = "";
        combinationN = 0;
    }
    
}

//recursive function tp create possible n bits
//
function recursiveCal(n,s){
    //console.log(s);
    if(n == 0){
        combinationN ++;
        output += s + ", ";
        return;
    }else{
        recursiveCal(n-1, s + "0");
        recursiveCal(n-1, s + "1");
        return;
    }
}

//function that used to replace a char or string in a specific position of the string given
//We can't replace it, so we create new string by this :
//
String.prototype.replaceAt = function(index,replacement){
    return this.substr(0,index) + replacement + this.substr(index+replacement.length);
}

//typeWriter using JS
//
function typeWriter(i,txt,speed){
    if(i < txt.length()){
        document.getElementById("instruction").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter(i,txt,speed),speed);
    }
}