//The html onclick calls this function
function result () {
    //Call the first number value "width"
    var width = document.getElementById("width-input").value;
    //Call the second number value "height"
    var height = document.getElementById("height-input").value;
    //Call the estimate result field "calc"
    var calc = document.getElementById("calc");
    //Call the email result from the field "email-input"
    var userEmail = document.getElementById("email-input").value;
    //Call the submit button
    var userSubmit = document.getElementById("submit");
    //The result is math based on mom's formula
    var result = (width * height) * 0.025;
    //If the email is less than or equal to 5 char, ask to input.
    if (userEmail.length >= 5) {
        calc.value = "$"+result.toFixed(2);
        userSubmit.style.display = "none";
    } else {
        alert("Please enter your email.");
    }
}

//The mobile menu
function menuOpener() {
    var mobileMenu = document.getElementById("mobile-menu");
    var menuIcon = document.getElementById("menu-icon");
    var allThings = document.getElementById("everything");

    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
        menuIcon.style.filter = "brightness(0%)";
        allThings.style.filter = "blur(0px)";
        allThings.style.pointerEvents = "auto";
    } else {
        mobileMenu.style.display = "block";
        menuIcon.style.filter = "brightness(1000%)";  
        allThings.style.filter = "blur(5px)";
        allThings.style.pointerEvents = "none";
    }
}