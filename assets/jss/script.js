// Assignment code here
var specialCharacters = " !$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var alphabetLower = "abcdefghijklmnopqrstuvwxyz";
var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var Numbers = "0123456789";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){

}
// Write password to the #password input
function writePassword() {
  var createpassword = window.prompt ("Would you Like to generate a new password?");
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
 if (createpassword === "yes" || createpassword === "YES" || createpassword === "Y" || createpassword === "Yes" ){
   var passwordCharacters = window.prompt ("How many characters would you like in your password?");
 
}
   if  (createpassword === "no") {
    var noPassword = alert ("Okay have fun doing it yourself!");
   }
else {
     var youDidItWrong = window.prompt ("Please enter yes or no, its quite simple.");
  
   }
 

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



