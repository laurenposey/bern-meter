var surveyResult = function(bernCount) {
  if (bernCount === 3) {
    return "You're feelin the Bern!!!!!!!<3"
  } else if (bernCount === 0) {
    return "You're a cold hearted Republican :("
  } else {
    return "You're voting for Hillary :/"
  }
}

$(document).ready(function(){
  $("form#bernmeter").submit(function(event){
    event.preventDefault();
    var count = 0;
    count += parseInt($("#edu").val());
    count += parseInt($("#lives").val());
    count += parseInt($("#wage").val());

    $("#result").text(surveyResult(count));
  });
});
