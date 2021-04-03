let audio = new Audio("lets-go.mp3");

function sleep(seconds) {
  let milliseconds = seconds * 1000;
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function daBaby() {
  audio.play();
  sleep(2.2);
  document.getElementById("letsGo").innerHTML = '<img src="img/after.png" />';
}
