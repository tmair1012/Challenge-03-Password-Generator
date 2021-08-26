// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Write password to the #password input
  passwordText.value = password;

}




function generatePassword() {
  var specialCharacters = "!$%&'()*+,-./:;<=>?@[^_`{|}~";
  var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var alphabetLower = "abcdefghijklmnopqrstuvwxyz";
  var Numbers = "0123456789";
  var passwordAdditions = "";
  var yourPassword = " ";
  var createpassword = window.prompt("Would you Like to generate a new password?");

  //this tells that the person wants to generate a password
  if (createpassword === "yes" || createpassword === "YES" || createpassword === "Y" || createpassword === "Yes") {
    // add the choose characters function here
    passwordCharacters = window.prompt("How many characters would you like in your password? (8-128)");
    if (passwordCharacters <= 128 && passwordCharacters >= 8) {
      var getUpper = window.confirm("Would you like to add Uppercase letters to your password? Ok for 'yes' cancel for 'no'");
      if (getUpper) {
        passwordAdditions += alphabetUpper;
      }

      var getNumbers = window.confirm("Would you like to add Numbers to your password? Ok for 'yes' cancel for 'no'");
      if (getNumbers) {
        passwordAdditions += Numbers;
      }
      var getSpecialCharacters = window.confirm("Would you like to add special characters to your password? Ok for 'yes' cancel for 'no'");
      if (getSpecialCharacters) {
        passwordAdditions += specialCharacters;
      }
      generatePassword();
      var password = generatePassword();

    }
    else {
      alert('please enter a number between 8 and 128')
    }
  }
  // need to restart or exit function here
  if (createpassword === "no") {
    alert("Okay have fun doing it yourself!");

  }
  else {
    alert("Please enter yes or no, its quite simple.");


  }
  for (let i = 0; i < passwordCharacters; i++) {
    console.log(passwordAdditions.charAt(Math.random() * passwordAdditions.length));

  }

}




var passwordText = document.querySelector("#password");



//write the password function
function writePassword() {

}










// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



