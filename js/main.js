function sleep(seconds) {
  let milliseconds = seconds * 1000;
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
let letsgoo = new Audio("../music/lets-go.mp3");
let sheeshSound = new Audio("../music/sheesh.mp3");
function daBaby() {
  letsgoo.play();
  sleep(2.2);
  document.getElementById("letsGo").innerHTML =
    '<img src="../img/after.png" />';
}

function sheesh() {
  sheeshSound.play();
  document.getElementById("id-sheesh").innerHTML =
    '<img src="../img/afterSH.png" />';
}

function reset() {
  document.getElementById("letsGo").innerHTML =
    '<img src="../img/before.png" />';
}

function resetsh() {
  document.getElementById("id-sheesh").innerHTML =
    '<img src="../img/beforeSH.PNG" />';
}
