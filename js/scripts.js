$("document").ready(function(){
  $("#word").submit(function(event){
    event.preventDefault();

    var sentenceInput = $("#sentence").val();

    $(".result").text(sentence(sentenceInput));

  });
});

var sentence = function(sentenceInput) {
  var sentArrays = sentenceInput.split("");
  var resultArray = [];

  sentArrays.forEach(function(letter) {
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
      resultArray.push("-");
    } else {
      resultArray.push(letter);
    }

  });

  var resultString = resultArray.join("");
  return resultString;
}
