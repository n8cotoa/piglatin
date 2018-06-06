function pigLatin() {
  var userInput = $("#userInput").val();
  var userInputArray = userInput.split(" ");
  var vowels = ["a", "e", "i", "o", "u"];
  var vowelsY = ["a", "e", "i", "o", "u", "y"];
  var outputArray = [];


  userInputArray.forEach(function(word){
    var splitWord = word.split("");
    if (vowels.includes(splitWord[0])) {
      outputArray.push(word + "nay")
    } else if (splitWord[0] === "y") {
      outputArray.push(splitWord.slice(1).join("") + "yay");
    } else if (splitWord[0] === "s" && splitWord[1] === "q" && splitWord[2] === "u"){
      outputArray.push(splitWord.slice(3).join("") + "squay");
    } else if (splitWord[0] === "q" && splitWord[1] === "u"){
      outputArray.push(splitWord.slice(2).join("") + "quay");
    } else {
      var consArray = [];
      for (x = 0; x < splitWord.length; x += 1) {
        if (vowelsY.includes(splitWord[x])) {
          x = splitWord.length
          console.log("should end here " + x)
        } else {
          consArray.push(splitWord[x])
          console.log("pushing " + splitWord[x] + " to consarray")
        }
      }
      outputArray.push((splitWord.slice(consArray.length).join("")) + consArray.join("") + "ay")
    }
    console.log(outputArray);
  });

}


$(document).ready(function() {
  $("#translateBtn").click(function(e) {
    e.preventDefault();
    pigLatin();

  });
});
