//Business Logic
function pigLatin() {
  var userInput = $("#userInput").val();
  //removes special characters from input
  var userInput = userInput.toString().replace(/[1234567890\-=`~!@#$%^&*()_+{}\\\[\\\]:";'<>?,./'"`]/g,'');
  //removes spaces at the beginning of user input
  userInput = userInput.toString().replace(/[\n][ ]*/g,/\n/);
  //removes double spaces from middle of user input
  userInput = userInput.toString().replace("  "," ");
  var userInputArray = userInput.split(" ");
  var vowels = ["a", "e", "i", "o", "u"];
  var vowelsY = ["a", "e", "i", "o", "u", "y"];
  var outputArray = [];


  userInputArray.forEach(function(word){
    var splitWord = word.split("");
      //check for words starting with a vowel
    if (vowels.includes(splitWord[0])) {
      outputArray.push(word + "nay")
      //check for words starting with y
    } else if (splitWord[0] === "y") {
      outputArray.push(splitWord.slice(1).join("") + "yay");
      //check for words that start with squ
    } else if (splitWord[0] === "s" && splitWord[1] === "q" && splitWord[2] === "u"){
      outputArray.push(splitWord.slice(3).join("") + "squay");
      //check for words that start with qu
    } else if (splitWord[0] === "q" && splitWord[1] === "u"){
      outputArray.push(splitWord.slice(2).join("") + "quay");
      //takes words that start with consonants, takes all consonants before vowels and pushes them to consArray
    } else {
      var consArray = [];
      for (x = 0; x < splitWord.length; x += 1) {
        if (vowelsY.includes(splitWord[x])) {
          x = splitWord.length
        } else {
          consArray.push(splitWord[x])
        }
      }
      //takes consonants cut before vowel, rejoins letters, and push to outputArray
      outputArray.push((splitWord.slice(consArray.length).join("")) + consArray.join("") + "ay")
    }
    //joins finalArray and puts it in results span
    var finalArray = outputArray.join(" ");
    $("#results").text(finalArray);
  });

}

//User logic
$(document).ready(function() {
  $("#translateBtn").click(function(e) {
    e.preventDefault();
    pigLatin();

  });
});
