//var for the Generate Button
var generateButton = document.querySelector("#generate");

//Create Function for Password 
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Event listener for the click
generateButton.addEventListener("click", writePassword);
