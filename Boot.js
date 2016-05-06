var MonkeyDefense = {};

MonkeyDefense.Boot = function (game) {};

MonkeyDefense.Boot.prototype = {
    preloader: function () {
        this.load.image('MonkeyDefenseTitle', 'C:\\Users\\1381362\\Google Drive\\AdvProgramming Project_\\Master\\Image assets\\monkeydefensetitle.png');
        this.load.image('preloadBar', 'C:\\Users\\1381362\\Google Drive\\AdvProgramming Project_\\Master\\Image assets\\PreloadBar.png');
        
    },
        
    create: function () {
		this.input.maxPointers = 10;
		this.stage.disableVisibilityChange = false;
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.minWidth = 700;
		this.scale.minHeight = 500;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		this.stage.forcePortrait = true;
		this.scale.setScreenSize(true);

		this.input.addPointer();
		this.stage.backgroundColor = '#FFFFCC';
        
        this.state.start('Preloader');
	}
    
},
    
        


