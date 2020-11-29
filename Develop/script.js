//Asignment Code 
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Function to generate password
function generatePassword() {


  let userlength = prompt('Please choose your password length (8-128)');
  let useSpec = confirm('Include special characters?');
  let useLower = confirm('Include lowercase characters?');
  let useUpper = confirm('Include uppercase characters?');
  let useNum = confirm('Include numeric characters?');
  let generatedPassword = '';



  let specArr = ['!', '#', '$', '%', '&', '\\', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '^', '[', '', ']', '^', '_', '`', '{', '|', '}', '~']
  let lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

  let availChar = [];
  let finalChar = [];

  // console.log(userlength);
  // if (userlength <= 8) {
  //   alert('Please choose a number 8-128');
  // }

  if (useSpec) {
    availChar = availChar.concat(specArr);
  }

  if (useLower) {
    availChar = availChar.concat(lowerArr);
  }

  if (useUpper) {
    availChar = availChar.concat(upperArr);
  }

  if (useNum) {
    availChar = availChar.concat(numArr);
  }



  for (i = 0; i <= userlength; i++) {
    let i = Math.floor(Math.random() * availChar.length);
    generatedPassword += availChar[i];



  }
  return generatedPassword;



}


// Alert the password has been generated
// alert("Your password has been generated!")


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
