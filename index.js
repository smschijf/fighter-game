const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

c.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 0.7;

const background = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: "./img/background.png",
});

const shop = new Sprite({
  position: {
    x: 600,
    y: 128,
  },
  imageSrc: "./img/shop.png",
  scale: 2.75,
  framesMax: 6,
});

const player = new Fighter({
  position: {
    x: 0,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  offset: {
    x: 0,
    y: 0,
  },
  imageSrc: "./img/samuraiMack/Idle.png",
  framesMax: 8,
  scale: 2.5,
  offset: {
    x: 215,
    y: 157,
  },
  sprites: {
    idle: {
      imageSrc: "./img/samuraiMack/Idle.png",
      framesMax: 8,
    },
    run: {
      imageSrc: "./img/samuraiMack/Run.png",
      framesMax: 8,
    },
    jump: {
      imageSrc: "./img/samuraiMack/Jump.png",
      framesMax: 2,
    },
    fall: {
      imageSrc: "./img/samuraiMack/Fall.png",
      framesMax: 2,
    },
    attack1: {
      imageSrc: "./img/samuraiMack/Attack1.png",
      framesMax: 6,
    },
    takeHit: {
      imageSrc: "./img/samuraiMack/Take hit.png",
      framesMax: 4,
    },
    death: {
      imageSrc: "./img/samuraiMack/Death.png",
      framesMax: 6,
    },
  },
  attackBox: {
    offset: {
      x: 100,
      y: 50,
    },
    width: 160,
    height: 50,
  },
});

const player2 = new Fighter({
  position: {
    x: 400,
    y: 100,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  offset: {
    x: -50,
    y: 0,
  },
  imageSrc: "./img/kenji/Idle.png",
  framesMax: 4,
  scale: 2.5,
  offset: {
    x: 215,
    y: 170,
  },
  sprites: {
    idle: {
      imageSrc: "./img/kenji/Idle.png",
      framesMax: 4,
    },
    run: {
      imageSrc: "./img/kenji/Run.png",
      framesMax: 8,
    },
    jump: {
      imageSrc: "./img/kenji/Jump.png",
      framesMax: 2,
    },
    fall: {
      imageSrc: "./img/kenji/Fall.png",
      framesMax: 2,
    },
    attack1: {
      imageSrc: "./img/kenji/Attack1.png",
      framesMax: 4,
    },
    takeHit: {
      imageSrc: "./img/kenji/Take hit.png",
      framesMax: 3,
    },
    death: {
      imageSrc: "./img/kenji/Death.png",
      framesMax: 7,
    },
  },
  attackBox: {
    offset: {
      x: -170,
      y: 50,
    },
    width: 170,
    height: 50,
  },
});

const keys = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  ArrowRight: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
};

decreaseTimer();

function animate() {
  window.requestAnimationFrame(animate);
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
  background.update();
  shop.update();
  player.update();
  player2.update();

  player.velocity.x = 0;
  player2.velocity.x = 0;

  //player1 movement
  if (keys.a.pressed && player.lastKey === "a") {
    player.velocity.x = -5;
    player.switchSprite("run");
  } else if (keys.d.pressed && player.lastKey === "d") {
    player.velocity.x = 5;
    player.switchSprite("run");
  } else {
    player.switchSprite("idle");
  }

  //player1 jumping
  if (player.velocity.y < 0) {
    player.switchSprite("jump");
  } else if (player.velocity.y > 0) {
    player.switchSprite("fall");
  }

  //player2 movement
  if (keys.ArrowLeft.pressed && player2.lastKey === "ArrowLeft") {
    player2.velocity.x = -5;
    player2.switchSprite("run");
  } else if (keys.ArrowRight.pressed && player2.lastKey === "ArrowRight") {
    player2.velocity.x = 5;
    player2.switchSprite("run");
  } else {
    player2.switchSprite("idle");
  }

  //player2 jumping
  if (player2.velocity.y < 0) {
    player2.switchSprite("jump");
  } else if (player2.velocity.y > 0) {
    player2.switchSprite("fall");
  }

  //detect for collision & player2 gets hit
  if (
    rectangularCollision({
      rectangle1: player,
      rectangle2: player2,
    }) &&
    player.isAttacking &&
    player.framesCurrent === 4
  ) {
    player2.health -= 20;
    player2.takeHit();
    player.isAttacking = false;
    document.querySelector("#player2Health").style.width = player2.health + "%";
  }

  //if player misses
  if (player.isAttacking && player.framesCurrent === 4) {
    player.isAttacking = false;
  }

  //detect for collision & player gets hit
  if (
    rectangularCollision({
      rectangle1: player2,
      rectangle2: player,
    }) &&
    player2.isAttacking &&
    player2.framesCurrent === 2
  ) {
    player.health -= 10;
    player.takeHit();
    player2.isAttacking = false;
    document.querySelector("#playerHealth").style.width = player.health + "%";
  }

  //if player misses
  if (player2.isAttacking && player2.framesCurrent === 2) {
    player2.isAttacking = false;
  }

  //end game based on health
  if (player2.health <= 0 || player.health <= 0) {
    determineWinner({ player, player2, timerId });
  }
}

animate();

window.addEventListener("keydown", (event) => {
  if (!player.dead) {
    switch (event.key) {
      //player1 keys
      case "d":
        keys.d.pressed = true;
        player.lastKey = "d";
        break;
      case "a":
        keys.a.pressed = true;
        player.lastKey = "a";
        break;
      case "w":
        player.velocity.y = -20;
        break;
      case " ":
        player.attack();
        break;
    }
  }

  if (!player2.dead) {
    switch (event.key) {
      //player2 keys
      case "ArrowRight":
        keys.ArrowRight.pressed = true;
        player2.lastKey = "ArrowRight";
        break;
      case "ArrowLeft":
        keys.ArrowLeft.pressed = true;
        player2.lastKey = "ArrowLeft";
        break;
      case "ArrowUp":
        player2.velocity.y = -20;
        break;
      case "ArrowDown":
        player2.attack();
        break;
    }
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "d":
      keys.d.pressed = false;
      break;
    case "a":
      keys.a.pressed = false;
      break;

    case "ArrowRight":
      keys.ArrowRight.pressed = false;
      break;
    case "ArrowLeft":
      keys.ArrowLeft.pressed = false;
      break;
  }
});
