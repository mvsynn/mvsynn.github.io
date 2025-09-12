$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms

createPlatform(100, 20, 10, 100, "darkred"); // bright green for a finished platform
createPlatform(500, 0, 20, 290, "black")
createPlatform(400, 400, 200, 20, "black", 200, 1200, 2)
createPlatform(400, 600, 200, 20, "black", 100, 850, -4)
createPlatform(400, 200, 200, 20, "black", 500, 1100, 1)
createPlatform(400, 500, 200, 20, "black", 150, 700, 0)
createPlatform(400, 300, 800, 20, "black", 150, 700, 0)
createPlatform(500, 100, 200, 20, "black", 150, 700, 0)
    // TODO 3 - Create Collectables
createCollectable("steve", 1350, 50);
createCollectable("diamond", 600, 60, 0.5, 0.7);


    // TODO 4 - Create Cannons
createCannon("top", 200, 1000);
createCannon("right", 300, 1000);
createCannon("left", 400, 1000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
body {
  margin: 0px;
}

canvas {
  background-color: rgb(255, 0, 0);
  margin: 20px;
}

img {
  display: none;
}
