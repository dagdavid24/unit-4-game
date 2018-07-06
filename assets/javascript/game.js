// randomly create a number between 19 - 129 and assign to targetScore
var randomNum;
var tar;
var blue;
var red;
var yellow;
var green;
var crystalRed;
var crystalBlue;
var crystalGreen;
var crystalYellow;

// add up the value of the number that was assigned to the crystal to yourScore
var yourScore = document.getElementById("yourScore");

function setUp() {
    randomNum = Math.floor(Math.random() * 111) + 19;
    //console.log(randomNum);
    tar = document.getElementById("targetScore");
    tar.textContent = randomNum;

    // assign random value between 1 - 12 for each crystal

    crystalRed = Math.floor(Math.random() * 12) + 1;
    //console.log(crystalRed);
    red = document.getElementById("red");
    red.setAttribute("value", crystalRed);
    rvalue = parseInt(red.value);
    console.log(red.value);

    crystalBlue = Math.floor(Math.random() * 12) + 1;
    //console.log(crystalBlue);
    blue = document.getElementById("blue");
    blue.setAttribute("value", crystalBlue);
    bvalue = parseInt(blue.value);
    console.log(blue.value);

    crystalYellow = Math.floor(Math.random() * 12) + 1;
    //console.log(crystalYellow);
    yellow = document.getElementById("yellow");
    yellow.setAttribute("value", crystalYellow);
    yvalue = parseInt(yellow.value);
    console.log(yellow.value);

    crystalGreen = Math.floor(Math.random() * 12) + 1;
    //console.log(crystalGreen);
    green = document.getElementById("green");
    green.setAttribute("value", crystalGreen);
    gvalue = parseInt(green.value);
    console.log(green.value);

    //
    yourScore.value = 0;
    yourScore.textContent = 0;
}
setUp();



function scoreRed() {
    if (parseInt(yourScore.value) > 0) {
        yourScore.textContent = parseInt(yourScore.value) + rvalue;
        yourScore.value = parseInt(yourScore.value) + rvalue;
        score = parseInt(yourScore.value) + rvalue;
    }
    else {
        yourScore.textContent = rvalue;
        yourScore.value = rvalue;
        score = rvalue;
    }
    console.log(red.value);
    
    //check3r put here at a specific time (waiting for if else statement to run first)
    checker();
}
function scoreBlue() {
    if (parseInt(yourScore.value) > 0) {
        yourScore.textContent = parseInt(yourScore.value) + bvalue;
        yourScore.value = parseInt(yourScore.value) + bvalue;
        score = parseInt(yourScore.value) + bvalue;
    }
    else {
        yourScore.textContent = bvalue;
        yourScore.value = bvalue;
        score = bvalue;
    }
    console.log(red.value);
    checker();
}
function scoreYellow() {
    if (parseInt(yourScore.value) > 0) {
        yourScore.textContent = parseInt(yourScore.value) + yvalue;
        yourScore.value = parseInt(yourScore.value) + yvalue;
        score = parseInt(yourScore.value) + yvalue;
    }
    else {
        yourScore.textContent = yvalue;
        yourScore.value = yvalue;
        score = yvalue;
    }
    console.log(red.value);
    checker();
}
function scoreGreen() {
    if (parseInt(yourScore.value) > 0) {
        yourScore.textContent = parseInt(yourScore.value) + gvalue;
        yourScore.value = parseInt(yourScore.value) + gvalue;
        score = parseInt(yourScore.value) + gvalue;
    }
    else {
        yourScore.textContent = gvalue;
        yourScore.value = gvalue;
        score = gvalue;
    }
    console.log(red.value);
    checker();
}


// if yourScore is greater than targetScore increment losses and restart game, function used to ensure that after every click this statement is always checked
var wins = 0;
var losses = 0;
function checker() {
    if (parseInt(yourScore.value) === parseInt(tar.textContent)) {
        alert('You won');
        wins++;
        document.getElementById("wins").textContent = wins;
        setUp();
    }
    else if (parseInt(yourScore.value) > parseInt(tar.textContent)) {
        alert('You Lost');
        losses++;
        document.getElementById("losses").textContent = losses;
        setUp();
    }
}


// if yourScore is equall to targetScore increment wins and restart game