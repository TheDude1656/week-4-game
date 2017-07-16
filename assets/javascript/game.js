  var randomNum = randomizeNumber();
  var gem1 = randomGemNumber();
  var gem2 = randomGemNumber();
  var gem3 = randomGemNumber();
  var gem4 = randomGemNumber();
  var total = 0;
  var val;
  var counter;

  $(document).ready(function() {

    $("#randomnumber").html(randomNum);
    $("#gem1").attr("data-gem", gem1);
    $("#gem2").attr("data-gem", gem2);
    $("#gem3").attr("data-gem", gem3);
    $("#gem4").attr("data-gem", gem4);

    $(".btn").on('click', function() {
      clickpic($(this).data('gem'));
    });



    console.log(gem1);
    console.log(gem2);
    console.log(gem3);
    console.log(gem4);

    console.log(total);
  });

  function randomizeNumber() {
    return Math.floor(Math.random() * (120 - 19 + 1) + 19);

  };

  function randomGemNumber() {
    return Math.floor(Math.random() * (12 - 1 + 1) + 1);

  };

  function clickpic(currentGem) {
    total += currentGem;
    console.log(total);
  };
