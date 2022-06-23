function rectangularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.attackBox.position.x + rectangle1.attackBox.width >=
      rectangle2.position.x &&
    rectangle1.attackBox.position.x <=
      rectangle2.position.x + rectangle2.width &&
    rectangle1.attackBox.position.y + rectangle1.attackBox.height >=
      rectangle2.position.y &&
    rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
  );
}

function determineWinner({ player, player2, timerId }) {
  clearTimeout(timerId);
  document.querySelector("#displayText").style.display = "flex";
  document.querySelector("#displayButton").style.display = "flex";
  let winner;
  let playerName;
  if (player.health === player2.health) {
    document.querySelector("#displayText").innerHTML = "Tie";
    winner = 0;
    document.querySelector("#winner").value = winner;
  } else if (player.health > player2.health) {
    document.querySelector("#displayText").innerHTML = "Player 1 Wins";
    winner = 1;
    playerName = "p1";
    document.querySelector("#winner").value = winner;
    document.querySelector("#playerName").value = playerName;
  } else if (player.health < player2.health) {
    document.querySelector("#displayText").innerHTML = "Player 2 Wins";
    winner = 2;
    playerName = "p2";
    document.querySelector("#winner").value = winner;
    document.querySelector("#playerName").value = playerName;
  }
}

let timer = 60;
let timerId;
function decreaseTimer() {
  if (timer > 0) {
    timerId = setTimeout(decreaseTimer, 1000);
    timer--;
    document.querySelector("#timer").innerHTML = timer;
  }

  if (timer === 0) {
    determineWinner({ player, player2, timerId });
  }
}

console.log(document.currentScript.src);

var sfx = {
  damage: new Howl({
    src: ["damage.wav"],
  }),
  victory: new Howl({
    src: ["victory.wav"],
  }),
  death: new Howl({
    src: ['death.wav'],
  }),
};
