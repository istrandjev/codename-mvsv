
var world = new World();

var container = document.getElementById('world');

world.tiles = 
[[new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new WaterTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new WaterTile(), new FountainTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new WaterTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new TrapTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new TerminalTile(), new GroundTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new ExitTile(), new ExitTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new ExitTile(), new ExitTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()], [new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile(), new GroundTile(), new GroundTile(), new GroundTile(), new GroundTile(), new FreeTile(), new FreeTile(), new GroundTile(), new FreeTile(), new FreeTile(), new FreeTile(), new FreeTile()]];
for(var i = 0;i<world.tiles.length;++i) {
  for (var j=0;j<world.tiles.length;++j){
    if (Utils.getObjectClass(world.tiles[i][j]) == "TerminalTile") {
      world.tiles[i][j].hack = function(){
	for (var k = 13; k <= 18; ++k) {
	  for (var l = 2+k-13; l <= 2+k-12; ++l) {
	    world.tiles[l][k].node.parentElement.removeChild(world.tiles[l][k].node);
	    world.tiles[l][k] = new FreeTile();
	    world.tiles[l][k].draw(container, l, k, world);
	  }
	}
	for (var k = 13; k <= 19; ++k) {
	  for (var l = 2+k-14; l <= 2+k-11; l+=3) {
	    world.tiles[l][k].node.parentElement.removeChild(world.tiles[l][k].node);
	    world.tiles[l][k].draw(container, l, k, world);
	  }
	}
	for (var l = 8; l <= 19; ++l) {
	  for (var k = 17; k<=18;++k) {
	    world.tiles[l][k].node.parentElement.removeChild(world.tiles[l][k].node);
	    if ( l != 11) {
	      world.tiles[l][k] = new FreeTile();
	    } else {
	      world.tiles[l][k] = new WoodenTile();
	    }
	    world.tiles[l][k].draw(container, l, k, world);
	  }
	}
	
      }
      break;
    }
  }
}
var player = new Player();
Utils.setUpPlayer(player, world);
player.magician.actor.y = 12;
player.scientist.actor.y = 12;
player.scientist.dynamite = 1;
world.draw(container);
world.loop();
C.jumpBoost = -14;