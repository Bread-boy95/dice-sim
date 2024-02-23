let select = document.getElementById("dice");
let die1 = document.getElementById("d1");
let die2 = document.getElementById("d2");

document.getElementById("roll").addEventListener("click", rollDice);
function rollDice() {
  //ROLL ONCE

  if (select.value == "once") {
    let num;
    let num2;
    num = Math.round(Math.random() * 5 + 1);
    num2 = Math.round(Math.random() * 5 + 1);
    if (num == 1) {
      die1.src = "images/1.png";
    } else if (num == 2) {
      die1.src = "images/2.png";
    } else if (num == 3) {
      die1.src = "images/3.png";
    } else if (num == 4) {
      die1.src = "images/4.png";
    } else if (num == 5) {
      die1.src = "images/5.png";
    } else if (num == 6) {
      die1.src = "images/6.png";
    }

    if (num2 == 1) {
      die2.src = "images/1.png";
    } else if (num2 == 2) {
      die2.src = "images/2.png";
    } else if (num2 == 3) {
      die2.src = "images/3.png";
    } else if (num2 == 4) {
      die2.src = "images/4.png";
    } else if (num2 == 5) {
      die2.src = "images/5.png";
    } else if (num2 == 6) {
      die2.src = "images/6.png";
    }
    document.getElementById("out").innerHTML =
      "<span>" + num + "," + num2 + "<span>";
  }

  //ROLL FIVE TIMES
  if (select.value == "five") {
    let num;
    let num2;
    for (let i = 0; i < 5; i++) {
      num = Math.round(Math.random() * 5 + 1);
      num2 = Math.round(Math.random() * 5 + 1);
      if (num == 1) {
        die1.src = "images/1.png";
      } else if (num == 2) {
        die1.src = "images/2.png";
      } else if (num == 3) {
        die1.src = "images/3.png";
      } else if (num == 4) {
        die1.src = "images/4.png";
      } else if (num == 5) {
        die1.src = "images/5.png";
      } else if (num == 6) {
        die1.src = "images/6.png";
      }

      if (num2 == 1) {
        die2.src = "images/1.png";
      } else if (num2 == 2) {
        die2.src = "images/2.png";
      } else if (num2 == 3) {
        die2.src = "images/3.png";
      } else if (num2 == 4) {
        die2.src = "images/4.png";
      } else if (num2 == 5) {
        die2.src = "images/5.png";
      } else if (num2 == 6) {
        die2.src = "images/6.png";
      }
      document.getElementById("out").innerHTML +=
        "<span>" + num + "," + num2 + "<span>";
    }
    console.log(num);
    console.log(num2);
  }

  //ROLL X
  if (select.value == "X") {
    var num;
    var num2;
    var randNum = prompt("enter a whole number", "10");
    for (let l = 0; l < randNum; l++) {
      num = Math.round(Math.random() * 5 + 1);
      num2 = Math.round(Math.random() * 5 + 1);
      if (num == 1) {
        die1.src = "images/1.png";
      } else if (num == 2) {
        die1.src = "images/2.png";
      } else if (num == 3) {
        die1.src = "images/3.png";
      } else if (num == 4) {
        die1.src = "images/4.png";
      } else if (num == 5) {
        die1.src = "images/5.png";
      } else if (num == 6) {
        die1.src = "images/6.png";
      }

      if (num2 == 1) {
        die2.src = "images/1.png";
      } else if (num2 == 2) {
        die2.src = "images/2.png";
      } else if (num2 == 3) {
        die2.src = "images/3.png";
      } else if (num2 == 4) {
        die2.src = "images/4.png";
      } else if (num2 == 5) {
        die2.src = "images/5.png";
      } else if (num2 == 6) {
        die2.src = "images/6.png";
      }
      document.getElementById("out").innerHTML +=
        "<span>" + num + "," + num2 + "</span>";
    }
    console.log(num);
    console.log(num2);
  }

  //ROLL UNTIL SNAKE EYES
  if (select.value == "snakeeyes") {
    //number variables
    let num;
    let num2;

    //while loop
    while (num != 1 && num2 != 1) {
      //rounded randoms
      num = Math.round(Math.random() * 5 + 1);
      num2 = Math.round(Math.random() * 5 + 1);

      //input num & num2 into HTML
      document.getElementById("out").innerHTML +=
        "<span>" + num + "," + num2 + "</span>";

      //if statement (to end the loop when num & num2 both equal 1)
      if (num == 1 && num2 == 1) {
        document.getElementById("out").innerHTML +=
          "<span>" + num + "," + num2 + "</span>";

        //change images to die 1
        die1.src = "images/1.png";
        die2.src = "images/1.png";

        // show num1 and num2 in console
        console.log(num);
        console.log(num2);

        // break loop
        break;
      }
    }
  }
}
