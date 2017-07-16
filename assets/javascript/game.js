$(document).ready(function() {
  var randomNum = randomizeNumber();
  var gem1 = randomGemNumber();
  var gem2 = randomGemNumber();
  var gem3 = randomGemNumber();
  var gem4 = randomGemNumber();
  var total;
  var val;
  var counter;

  function randomizeNumber() {
    return Math.floor(Math.random() * (120 - 19 + 1) + 19);

  };

  function randomGemNumber() {
    return Math.floor(Math.random() * (12 - 1 + 1) + 1);

  };



  $("#randomnumber").html(randomNum);
  $("#gem1").attr("data-gem", gem1);
  $("#gem2").attr("data-gem", gem2);
  $("#gem3").attr("data-gem", gem3);
  $("#gem4").attr("data-gem", gem4);

  function clickpic() {

    counter = $(".btn").data("gem");
    total += counter;
  };

  $(".btn").click(clickpic());




  console.log(gem1);
  console.log(gem2);
  console.log(gem3);
  console.log(gem4);
  console.log(total);
});
