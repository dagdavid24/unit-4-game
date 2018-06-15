// randomly create a number between 19 - 129 and assign to targetScore

var randomNum = Math.floor(Math.random()*111)+19;
    //console.log(randomNum);
var tar = document.getElementById("targetScore");
tar.textContent = randomNum;

// assign random value between 1 - 12 for each crystal

var crystalRed = Math.floor(Math.random()*12)+1;
    //console.log(crystalRed);
var red = document.getElementById("red");
red.setAttribute("value",crystalRed);
console.log(red.value);

var crystalBlue = Math.floor(Math.random()*12)+1;
    //console.log(crystalBlue);
var blue = document.getElementById("blue");
blue.setAttribute("value",crystalBlue);
console.log(blue.value);

var crystalYellow = Math.floor(Math.random()*12)+1;
    //console.log(crystalYellow);
var yellow = document.getElementById("yellow");
yellow.setAttribute("value",crystalYellow);
console.log(yellow.value);

var crystalGreen = Math.floor(Math.random()*12)+1;
    //console.log(crystalGreen);
var green = document.getElementById("green");
green.setAttribute("value",crystalGreen);
console.log(green.value);


// add up the value of the number that was assigned to the crystal to yourScore
var yourScore = getElementById("yourScore");
yourScore.textContent = yourScore.value + randomNum;

// if yourScore is greater than targetScore increment losses and restart game

// if yourScore is equall to targetScore increment wins and restart game