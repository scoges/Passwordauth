


var Lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var generateBtn = document.querySelector("#generate")

function generatePassword(){
 
   var Length = prompt("How many characters for your password. Password must contain between 8 and 128 characters.");
   while(Length <= 7 || Length >= 129) 
    {alert("Password must be 8-128 characters long") ; Length = prompt("How many characters for your password")}
  
      
  
   var Spec = confirm("Click OK to include special characters");
   var Num = confirm("Click OK to include numbers");    
   var Low = confirm("Click OK to include lowercase letters");
   var Up = confirm("Click OK to include uppercase letters");
  
  while(Up === false && Low === false && Spec === false && Num === false) {
    alert("You must choose at least one set of characters"); 
     Spec = confirm("Click OK to include special characters");
     Num = confirm("Click OK to include numbers");    
     Low = confirm("Click OK to include lowercase letters");
     Up = confirm("Click OK to include uppercase letters");;
    
  }
  
  var passC = []
      
    if (Spec = true) {passC = passC .concat(specialChar)}
    if (Num = true) {passC = passC .concat(number)}
    if (Low = true) {passC = passC .concat(Lower)}
    if (Up = true) {passC = passC .concat(Upper)}

      var finalp = ""
      
      for (var i = 0; i < Length; i++) {
        finalp = finalp + passC[Math.floor(Math.random() * passC.length)];
        console.log(finalp)
      }
      return finalp;}

 function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} generateBtn.addEventListener("click", writePassword);
