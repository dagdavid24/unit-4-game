// randomly create a number between 19 - 129 and assign to targetScore

var randomNum = Math.floor(Math.random() * 111) + 19;
//console.log(randomNum);
var tar = document.getElementById("targetScore");
tar.textContent = randomNum;

// assign random value between 1 - 12 for each crystal

var crystalRed = Math.floor(Math.random() * 12) + 1;
//console.log(crystalRed);
var red = document.getElementById("red");
red.setAttribute("value", crystalRed);
rvalue = parseInt(red.value);
console.log(red.value);

var crystalBlue = Math.floor(Math.random() * 12) + 1;
//console.log(crystalBlue);
var blue = document.getElementById("blue");
blue.setAttribute("value", crystalBlue);
bvalue =  parseInt(blue.value);
console.log(blue.value);

var crystalYellow = Math.floor(Math.random() * 12) + 1;
//console.log(crystalYellow);
var yellow = document.getElementById("yellow");
yellow.setAttribute("value", crystalYellow);
yValue = parseInt(yellow.value);
console.log(yellow.value);

var crystalGreen = Math.floor(Math.random() * 12) + 1;
//console.log(crystalGreen);
var green = document.getElementById("green");
green.setAttribute("value", crystalGreen);

console.log(green.value);


// add up the value of the number that was assigned to the crystal to yourScore
var yourScore = document.getElementById("yourScore");
var score = 0;

function scoreRed() {
    if (score > 0) { 
        yourScore.textContent = parseInt(yourScore.value) + rvalue;
        yourScore.value = parseInt(yourScore.value) + rvalue;
    }
    else {
        yourScore.textContent = rvalue;
        score = rvalue;
    }
    console.log(red.value);
}
function scoreBlue() {
    if (yourScore.value > 0) {
        yourScore.textContent = parseInt(yourScore.value) + bvalue;
        yourScore.value = parseInt(yourScore.value) + bvalue;
    }
    else {
        yourScore.textContent = bvalue;
        yourScore = blue.value;
    }
    console.log(yourScore);
}
function scoreYellow() {
    if (yourScore > 0) {
        yourScore.textContent = parseInt(yourScore.value) + parseInt(yellow.value);
        yourScore.value = parseInt(yourScore.value) + parseInt(yellow.value);
    }
    else {
        yourScore.textContent = parseInt(yellow.value);
        yourScore = yellow.value;
    }
    console.log(yourScore);
}
function scoreGreen() {
    if (yourScore > 0) {
        yourScore.textContent = parseInt(yourScore.value) + parseInt(green.value);
        yourScore.value = parseInt(yourScore.value) + parseInt(green.value);
    }
    else {
        yourScore.textContent = parseInt(green.value);
        yourScore = green.value;
    }
    //console.log(yourScore);
}


// if yourScore is greater than targetScore increment losses and restart game


// if yourScore is equall to targetScore increment wins and restart game