// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){

var lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericArray = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharactersArray = ["?","=",".","*","[","!","@","#","$","%","^","&","]","(",")"];

// While loops to prompt users to input for password, lowercase, numeric, 

  var passwordInput = prompt('How long would you like the generated Password to be? (Must be between 8 and 128 characters).');
  while (passwordInput > 128 || passwordInput < 8) {  
     passwordInput = prompt('How long would you like the generated Password to be? (Must be between 8 and 128 characters.');
  }
  var lowercase = prompt('Would you like to include lowercase character(s)? Yes or No?');
  while (!(lowercase == "Yes" || lowercase == "No")) {
    lowercase = prompt('Would you like to include lowercase character(s)? Yes or No?')
  }
  var numeric = prompt('numeric');
  while (!(numeric == "Yes" || numeric == "No")) {
    numeric = prompt('Would you like to include numeric character(s)? Yes or No?')
  }
  var specialCharacters = prompt('special characters');
  while (!(specialCharacters == "Yes" || specialCharacters == "No")) {
    specialCharacters = prompt('Would you like to include special character(s)? Yes or No?')
  }
  var uppercase = prompt('uppercase');
  while (!(uppercase == "Yes" || uppercase == "No")) {
    uppercase = prompt('Would you like to include uppercase character(s)? Yes or No?')
}



// Write password to the #password input
var password = generatePassword();

function writePassword() {
  generatePassword()
  passwordMin();
  passwordMax(minimumLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var passwordLengthMin = passwordMin();

//Establish function to prompt user for maximum password length

function passwordMax(minimumLength) {

  minimumLength = parseInt(minimumLength);

  var maximumLength = prompt("What is the maximum length of your desired password?");
  maximumLength = parseInt(maximumLength);
  if (maximumLength > 128) {
    
    alert("Your password cannot exceed 128 characters in length.");
   
    passwordMax(minimumLength);
  }
  else if (maximumLength < minimumLength) {
    
    alert("Your password's maximum length must at least be equal to its minimum length.");
    
    passwordMax(minimumLength);
  }
  return maximumLength;
}
console.log(password);

//Establish variable for maximum pass
var passwordLengthMax = passwordMax(passwordLengthMin);

//Establish function to prompt user for pass
function passwordNeeds() {
  var selections = "";
  var lowercase = prompt("Does your password need to include lowercase letters? (y/n)").toLowerCase();    
  if (lowercase === "y") {
    selections = selections + " " + "lowercase";
  }
  var uppercase = prompt("Does your password need to include uppercase letters? (y/n)").toLowerCase();    
  if (uppercase === "y") {
    selections = selections + " " + "uppercase";
  }
  var numeric = prompt("Does your password need to include numeric values? (y/n)").toLowerCase();    
  if (numeric === "y") {
    selections = selections + " " + "numeric";
  }
  var specialCharacters = prompt("Does your password need to include special characters? (y/n)").toLowerCase();
  if (specialCharacters === "y") {
    selections = selections + " " + "special characters";
  }
  if (lowercase === "n" && uppercase === "n" && numeric === "n" && specialCharacters === "n") 
  {
    alert("Your password must contain at least one of the character types (lowercase, uppercase, numeric, or special characters)");
    passwordNeeds();
  
  }
  else {
    alert("`You have selected the following criteria:" + selections);
    var answer = prompt("Would you like to continue?");
    answer = answer.toLowerCase();
    if (answer === "n") {
      passwordNeeds();
    }
  }

  generateBtn.addEventListener("click", writePassword);  
  }
  
}

