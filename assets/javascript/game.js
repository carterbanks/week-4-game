
var counter = 0;
var lost = 0;
var win = 0;    
var randonNumber = Math.floor(Math.random() * 100) + 20; 


// resetAndStart Function 
var resetAndStart = function () {
    randonNumber = Math.floor(Math.random() * 100) + 20; 
    //console.log(randonNumber);
    $("#crystals").empty();     
    $("#number-to-guess").empty();      
    var targetNumber = $("<h1>");
    targetNumber.attr("data-randomValue", randonNumber);
    targetNumber.text(randonNumber);
    $("#number-to-guess").append(targetNumber);
    //console.log(randonNumber); 
    // LOOP CREATED FOR EACH numberOption
    for (var i = 0; i < 4; i++) {
        var crystalRandom = Math.floor(Math.random() * 12 + 1);
        console.log(crystalRandom);
        // IMAGE CRYSTAL CREATED FOR ITERATION
        var imageCrystal = $("<img>");
        // CLASS ".crystal-image" GIVEN TO EACH CRYSTAL
        // ALLOWING CSS TO TAKE EFFECT
        imageCrystal.addClass("crystal-image");
        // Each imageCrystal GIVEN A SRC LINK TO EACH ImageCrystal
        imageCrystal.attr("src", "assets/images/CRYSTALS-01.jpg");
        // Each imageCrystal GIVEN A DATA ATTRIBUTE CALLED data-crystalValue
        // DATA ATTRIBUTE SET EQUAL TO ARRAY VALUE
        imageCrystal.attr("data-crystalvalue", crystalRandom);
        // EACH CRYSTAL IMAGE (complete w/ classes and attributes) ADDED TO PAGE
        $("#crystals").append(imageCrystal);
    }  
};  

resetAndStart();    

    
    //EVENT DELEGATION 
$(document).on("click", ".crystal-image", function () {


        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;   
        console.log("New score: " + counter);
       

        $("#counter").html(counter);   

        if (counter === randonNumber) {
            win++;
            $("#win").html("Wins " + win); 
            counter = 0;  
            randonNumber = 0;
            $("#counter").html("Counter") 
            resetAndStart();    
        } else if (counter >= randonNumber) {
            lost--;
            $("#lost").html("Losses " + lost); 
            counter = 0; 
            randonNumber = 0; 
            $("#counter").html("Counter")    
            resetAndStart();    
        }

});


