
var world = new World();

var container = document.getElementById('world');

world.tiles = 
[[new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new WoodenTile(), new WoodenTile(), new WoodenTile(), new WoodenTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new WaterTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new WaterTile(), new FountainTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new WaterTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new ExitTile(), new ExitTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new ExitTile(), new ExitTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()]];
var player = new Player();
Utils.setUpPlayer(player, world);
player.magician.actor.y = 13;
player.magician.actor.x = 20;
player.scientist.actor.y = 12;
world.draw(container);
world.loop();
C.jumpBoost = -14;
