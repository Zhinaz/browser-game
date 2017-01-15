var menuState = {
	create: function() {
		var nameLabel = game.add.text(80, 80, 'Billes Ninja Wars',
			{font: '50px Arial', fill: '#ffffff'});

		var startLabel = game.add.text(80, game.world.height-80, 'Press SPACE to join',
			{font: '25px Arial', fill: '#ffffff'});

		var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		spaceKey.onDown.addOnce(this.start, this);
	},

	start: function() {
		game.state.start('play');
	}
};