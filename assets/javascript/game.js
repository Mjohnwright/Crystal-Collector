$(document).ready(function () {
    // Sets the gem values
    var value1 = 0;
    var value2 = 0;
    var value3 = 0;
    var value4 = 0;
    // Tracks wins or losses values
    var wins = 0;
    var losses = 0;
    var UserTotal = 0;


    //Starts the game over
    function initializeGame() {
        //Sets that value of crystal to empty   I DO NOT THINK I NEED THIS
        var value1 = "";
        var value2 = "";
        var value3 = "";
        var value4 = "";
    }

    // Returns a random integer between 19 and 120 for the ComputerNumber and places it in DOM
    var randomComputerNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $(scorePanelBox).text(randomComputerNumber);  //jquery   WHY DON'T I NEED A # TO IDENTIFY AS AN ID


    // Returns a random number between 1 and 12 for the Crystals (1 thru 4)
    //STILL HAVE TO MAKE SURE EACH NUMBER IS DIFFERENT FROM THE OTHERS
    var value1 = Math.floor(Math.random() * 12) + 1;
    console.log(value1);

    var value2 = Math.floor(Math.random() * 12) + 1;
    console.log(value2);

    var value3 = Math.floor(Math.random() * 12) + 1;
    console.log(value3);

    var value4 = Math.floor(Math.random() * 12) + 1;
    console.log(value4);





    //  Tallies the score

    //sets up click for jewels



  $('#valueOne').on ('click', function(){
    
  })





    initializeGame();
});

    // How do I make each value different from the others.
    // How do I assign the value to the object?
    // 
    // 

