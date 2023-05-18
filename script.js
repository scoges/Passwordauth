


var Lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var generateBtn = document.querySelector("#generate")

function generatePassword(){
 
  var Length = prompt("Choose the amount of characters for your password. Password must contain between 8 and 128 characters.");

  while(Length <= 7 || Length >= 129) {
      alert("Password must be 8-128 characters long");
      var Length = prompt("How many characters would you like in your password? Password must contain between 8 and 128 characters.");
      } 

 
      var Spec = confirm("Click OK to include special characters");
      var Num = confirm("Click OK to include numbers");    
      var Low = confirm("Click OK to include lowercase letters");
      var Up = confirm("Click OK to include uppercase letters");
 
      while(Up === false && Low === false && Spec === false && Num === false) {
        alert("You must choose at least one set of characters");
        var Spec = confirm("Click OK to include special characters");
        var Num = confirm("Click OK to include numbers");    
        var Low = confirm("Click OK to include lowercase letters");
        var Up = confirm("Click OK to include uppercase letters");   
    } 
  var passwordC = []
      
    if (Spec = true) {passwordC = passwordC .concat(specialChar)}
    if (Num = true) {passwordC = passwordC .concat(number)}
    if (Low = true) {passwordC = passwordC .concat(Lower)}
    if (Up = true) {passwordC = passwordC .concat(Upper)}

      console.log(passwordC)

      var finalp = ""
      
      for (var i = 0; i < Length; i++) {
        finalp = finalp + passwordC[Math.floor(Math.random() * passwordC.length)];
        console.log(finalp)
      }
      return finalp;}

 function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} generateBtn.addEventListener("click", writePassword);
