  var randomNum, gem1, gem2, gem3, gem4;
  var total = 0;
  var wins = 0;
  var losses = 0;

  $(document).ready(function() {

    gamestart();
    $(".btn").on('click', function() {
      clickpic($(this).data('gem'));
      $("#totalscore").html("Your total so far: " + total);
      check();

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

  function gamestart() {
    total = 0;
    $("#totalscore").html("Your total so far: " + total);
    5
    randomNum = randomizeNumber();
    $("#randomnumber").html(randomNum);
    gem1 = randomGemNumber();
    gem2 = randomGemNumber();
    gem3 = randomGemNumber();
    gem4 = randomGemNumber();
    $("#gem1").attr("data-gem", gem1);
    $("#gem2").attr("data-gem", gem2);
    $("#gem3").attr("data-gem", gem3);
    $("#gem4").attr("data-gem", gem4);
  }

  function check() {
    if (total === randomNum) {
      wins++;
      $("#winslosses").html("Wins: " + wins + "<br>Losses: " + losses);
      var pg = confirm("You Win! Play again?");
      if (pg == true) {
        gamestart();
      } else {
        alert("Goodbye!");
        $(".container").empty();
      }


    } else if (total > randomNum) {
      losses++;
      $("#winslosses").html("Wins: " + wins + "<br>Losses: " + losses);

      var pg = confirm("Game Over You Lose! Play again?");
      if (pg == true) {
        gamestart();
      } else {
        alert("Goodbye!");
        $(".container").empty();
      }


    }
  };
