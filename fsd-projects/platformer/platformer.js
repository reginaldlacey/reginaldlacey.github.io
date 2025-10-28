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
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(600, 500, 30, 90, "black");
createPlatform(100, 300, 40, 80, "orange");
createPlatform(300, 900, 60, 20, "red");
createPlatform(500, 600, 90, 60, "blue");
createPlatform(1000, 200, 80, 40, "green");

    // TODO 3 - Create Collectables
createCollectable("steve", 1350, 50, 0.2, 0.7);
createCollectable("diamond", 400, 170, 0.5, 0.7);
createCollectible("max", 500, 90, 0.6, 0.7);

    
    // TODO 4 - Create Cannons
createCannon("top", 350, 250);
createCannon("left", 250, 100);
createCannon("bottom", 700, 250);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
