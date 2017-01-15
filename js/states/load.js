var loadState = {

	preload: function() {
		var loadingLabel = game.add.text(80, 150, 'loading...',
			{font: '30px Courier', fill: '#ffffff'});

		game.load.tilemap('level1', 'assets/level1.json', null, Phaser.Tilemap.TILED_JSON);
	    game.load.image('tiles-1', 'assets/tiles-1.png');
	    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
	    game.load.spritesheet('droid', 'assets/droid.png', 32, 32);
	    game.load.image('starSmall', 'assets/star.png');
	    game.load.image('starBig', 'assets/star2.png');
	    game.load.image('background', 'assets/background2.png');
	},

	create: function() {
		game.state.start('menu');
	}
};