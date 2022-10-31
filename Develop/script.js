// need prompt for length between 8-128
// need prompt for uppercase, lowercase, numeric, special characters
// generates password that matches criteria
// Assignment code here

let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

var confirmLength = "";
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;


function generatePassword () {
  var confirmLength = (prompt('How long would you like your password to be?'));

  while(confirmLength <= 7 || confirmLength >= 129) {
    alert('Password length must be between 8-128 characters. Try again');
    var confirmLength = (prompt("How many characters would you like your password to be?"));
}
    alert(`Your password will have ${confirmLength} characters`);

    // Password will include 
    var confirmLower = confirm('Click OK to confirm if you would like to include lowercase letters in your password.');
    var confirmUpper = confirm('Click OK to confirm if you would like to include uppercase letters in your password.');
    var confirmNumber = confirm('Click OK to confirm if you would like to include numbers in your password.'); 
    var confirmSpecial = confirm('Click OK to confirm if you would like to include special chacters in your password');

    while(confirmLower === false && confirmUpper === false && confirmNumber === false && confirmSpecial === false) {
      alert("You must choose at least one parameter");    
      var confirmLower = confirm('Click OK to confirm if you would like to include lowercase letters in your password.');
      var confirmUpper = confirm('Click OK to confirm if you would like to include uppercase letters in your password.');
      var confirmNumber = confirm('Click OK to confirm if you would like to include numbers in your password.');
      var confirmSpecial = confirm('Click OK to confirm if you would like to include special chacters in your password');
    }

    var passwordConfirm = []

    if (confirmLower) {
      passwordConfirm = passwordConfirm.concat(lower)
    }

    if (confirmUpper) {
      passwordConfirm = passwordConfirm.concat(upper)
    }

    if (confirmNumber) {
      passwordConfirm = passwordConfirm.concat(number)
    }

    if (confirmSpecial) {
      passwordConfirm = passwordConfirm.concat(special)
    }

    console.log(passwordConfirm)

    var randomPassword = ""
    for (var i = 0; i < confirmLength; i++) {
      randomPassword = randomPassword + passwordConfirm[Math.floor(Math.random() * passwordConfirm.length)];
      console.log(randomPassword)
    }
    return randomPassword;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
