// Assignment code here
var specialCharacters = "!$%&'()*+,-./:;<=>?@[^_`{|}~";
var alphabetUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];;
var alphabetLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];;
var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const passwordAdditions =[alphabetLower];
var passwordLength = alphabetUpper.length;
var yourPassword =" ";
var passwordCharacters = min = 8, max = 128;

function generatePassword(){
for (let i = 0; i < passwordLength.length; i++) {
  
  yourPassword += passwordAdditions.charAt(Math.floor(Math.random()
  * passwordLength))
  
}
}


  console.log (alphabetLower);
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var generateBtn = document.querySelector("#generate");
  
  
  
  //write the password function
  function writePassword() {
    var createpassword = window.prompt ("Would you Like to generate a new password?");
    
    //this tells that the person wants to generate a password
   if (createpassword === "yes" || createpassword === "YES" || createpassword === "Y" || createpassword === "Yes" ){
     // add the choose characters function here
    passwordCharacters = window.prompt ("How many characters would you like in your password? (8-128)");
    if (passwordCharacters <=128 && passwordCharacters >=8){

    var getUpper = window.confirm ("Would you like to add Uppercase letters to your password?");
    if (getUpper){
      passwordAdditions.push(alphabetUpper);
    }
    
    var getNumbers = window.confirm ("Would you like to add Numbers to your password?");
    if (getNumbers){
      passwordAdditions.push(Numbers);
    }
    var getSpecialCharacters = window.confirm ("Would you like to add special characters to your password?");
    if (getSpecialCharacters) {
      passwordAdditions.push(specialCharacters)
    }
    console.log(passwordAdditions);
}
  else{
    alert ('please enter a number between 8 and 128')
  }
  }
    // need to restart or exit function here
     if  (createpassword === "no") {
      var noPassword = alert ("Okay have fun doing it yourself!");

     }
  else {
       var youDidItWrong = alert ("Please enter yes or no, its quite simple.");
  

      }
  }
  
// Get references to the #generate element



// Write password to the #password input


  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



