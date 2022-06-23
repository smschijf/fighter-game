<head>
  <script defer src="js/howler.min.js"></script>
  <script defer src="js/utils.js"></script>
  <script defer src="js/classes.js"></script>
  <script defer src="index.js"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
  <style>
    * {
      box-sizing: border-box;
      font-family: "Press Start 2P", cursive;
    }

    body {
      background-color: black;
      display: grid;
      place-content: center;
    }

    @keyframes rainbow_animation {

      0%,
      100% {
        background-position: 0 0;
      }

      50% {
        background-position: 100% 0;
      }
    }
  </style>
</head>

<body>
  <!-- red container div -->
  <div style="position: relative; display: inline-block">
    <!-- smaller red container div -->
    <div style="
        position: absolute;
        display: flex;
        width: 100%;
        align-items: center;
        padding: 20px;
      ">
      <!-- player health -->
      <div style="
          position: relative;
          width: 100%;
          display: flex;
          justify-content: flex-end;
          border-top: 4px solid white;
          border-left: 4px solid white;
          border-bottom: 4px solid white;
        ">
        <div style="background-color: red; height: 30px; width: 100%"></div>
        <div id="playerHealth" style="
            position: absolute;
            background: #818cf8;
            top: 0;
            right: 0;
            bottom: 0;
            width: 100%;
          "></div>
      </div>
      <!-- timer -->
      <div id="timer" style="
          background-color: black;
          width: 100px;
          height: 50px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          border: 4px solid white;
        ">
        10
      </div>
      <!-- player2 health -->
      <div style="
          position: relative;
          width: 100%;
          border-top: 4px solid white;
          border-right: 4px solid white;
          border-bottom: 4px solid white;
        ">
        <div style="background-color: yellow; height: 30px"></div>
        <div id="player2Health" style="
            position: absolute;
            background: #818cf8;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
          "></div>
      </div>
      <div></div>
    </div>
    <div id="displayText" style="
        position: absolute;
        color: white;
        display: none;
        align-items: center;
        justify-content: center;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      "></div>
    <div id="displayButton" style="
        position: absolute;
        top: 320px;
        right: 0;
        bottom: 0;
        left: 440px;
        height: 50px;
        width: 150px;
        background-color: white;
        display: none;
      ">
      <form action="php/insert.php" method="post">
        <input type="number" id="winner" name="winner" value="" style="display: none;">
        <input type="text" id="playerName" name="playerName" value="" style="display: none;">
        <input type="submit" name="save-score" value="Save Score" style="
          border: none;
          background: linear-gradient(
            to right,
            #6666ff,
            #0099ff,
            #00ff00,
            #ff3399,
            #6666ff
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: rainbow_animation 6s ease-in-out infinite;
          background-size: 400% 100%;
          width: 150px;
          height: 50px;
        ">
        </input>
      </form>
    </div>

    <canvas></canvas>
  </div>
</body>