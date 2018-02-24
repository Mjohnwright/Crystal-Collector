// $(document).ready(function () {
/*-------------------------------
        GLOBAL VARIABLES
--------------------------------*/
var value1 = 0;
var value2 = 0;
var value3 = 0;
var value4 = 0;
// Tracks wins or losses values
var wins = 0;
var losses = 0;
//Tracks the User point total
var userTotal = 0;
var randomComputerNumber = 0;


/*-------------------------------
        FUNCTIONS
--------------------------------*/

function initializeGame() {
    //Generates a random number for 4 crystals
    value1 = Math.floor(Math.random() * 12) + 1;
    console.log('red = ' + value1);

    value2 = Math.floor(Math.random() * 12) + 1;
    console.log('yellow = ' + value2);

    value3 = Math.floor(Math.random() * 12) + 1;
    console.log('blue = ' + value3);

    value4 = Math.floor(Math.random() * 12) + 1;
    console.log('green = ' + value4);


    // Returns a random integer between 19 and 120 for the ComputerNumber and places it in DOM
    randomComputerNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $('#scorePanelBox').text(randomComputerNumber);

    //Writes that user SCORE, WINS and LOSSES to the DOM
    $('#scoreBox').text(userTotal);
    $('#wins').text('Wins = ' + '  ' + wins); //HOW CAN I GET A SPACE AFTER THE = SIGN?????
    $('#losses').text('Losses = ' + losses);

}

/*-------------------------------
        RED CRYSTAL
--------------------------------*/
//STILL HAVE TO MAKE SURE EACH NUMBER IS DIFFERENT FROM THE OTHERS
$("#button-1").on("click", function () {
    userTotal = (userTotal + value1);
    $('#scoreBox').text(userTotal);

    if (userTotal === randomComputerNumber) {
        wins++;
        //updates the WIN total on the DOM
        $('#wins').text('Wins   = ' + wins);
        alert("you win!");
        userTotal = 0;
        initializeGame();

    } else if (userTotal > randomComputerNumber) {
        losses++;
        //updates the LOSS total on the DOM
        $('#losses').text('Losses = ' + losses);
        alert("you lose!");
        userTotal = 0;
        initializeGame();
    }
});

/*-------------------------------
        YELLOW CRYSTAL
--------------------------------*/
//STILL HAVE TO MAKE SURE EACH NUMBER IS DIFFERENT FROM THE OTHERS
$("#button-2").on("click", function () {
    userTotal = (userTotal + value2);
    $('#scoreBox').text(userTotal);

    if (userTotal === randomComputerNumber) {
        wins++;
        //updates the WIN total on the DOM
        $('#wins').text('Wins   = ' + wins);
        alert("you win!");
        userTotal = 0;
        initializeGame();

    } else if (userTotal > randomComputerNumber) {
        losses++;
        //updates the LOSS total on the DOM
        $('#losses').text('Losses = ' + losses);
        alert("you lose!");
        userTotal = 0;
        initializeGame();
    }
});

/*-------------------------------
        BLUE CRYSTAL
--------------------------------*/
//STILL HAVE TO MAKE SURE EACH NUMBER IS DIFFERENT FROM THE OTHERS
$("#button-3").on("click", function () {
    userTotal = (userTotal + value3);
    $('#scoreBox').text(userTotal);

    if (userTotal === randomComputerNumber) {
        wins++;
        //updates the WIN total on the DOM
        $('#wins').text('Wins   = ' + wins);
        alert("you win!");
        userTotal = 0;
        initializeGame();

    } else if (userTotal > randomComputerNumber) {
        losses++;
        //updates the LOSS total on the DOM
        $('#losses').text('Losses = ' + losses);
        alert("you lose!");
        userTotal = 0;
        initializeGame();
    }
});

/*-------------------------------
        GREEN CRYSTAL
--------------------------------*/
//STILL HAVE TO MAKE SURE EACH NUMBER IS DIFFERENT FROM THE OTHERS
$("#button-4").on("click", function () {
    userTotal = (userTotal + value4);
    $('#scoreBox').text(userTotal);

    if (userTotal === randomComputerNumber) {
        wins++;
        //updates the WIN total on the DOM
        $('#wins').text('Wins   = ' + wins);
        alert("you win!");
        userTotal = 0;
        initializeGame();

    } else if (userTotal > randomComputerNumber) {
        losses++;
        //updates the LOSS total on the DOM
        $('#losses').text('Losses = ' + losses);
        alert("you lose!");
        userTotal = 0;
        initializeGame();
    }
});

/*-------------------------------
            MAIN PROCESS
--------------------------------*/

// How do I make each value different from the others.

initializeGame();
