$("document").ready(function(){
  $("#word").submit(function(event){
    event.preventDefault();

    var sentenceInput = $("#sentence").val();

    $(".result").append(sentence(sentenceInput));

  });
});
