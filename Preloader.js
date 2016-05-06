MonkeyDefense.Preloader= function (game) {
    this.preloadBar = null;
    this.titleText = null;
    this.reader = false;
    
    
};

MonkeyDefense.Preloader.prototpe = {
    
    preload: function () {
        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloadBar');
        this.preloadBar.anchor.setTo(0.5, 0.5);
        
        this.titleText = this.add.image(this.world.centerX, this.world.centerY - 320, 'MonkeyDefenseTitle');
        this.titleText.anchor.setTo(0.5, 0.5);
        
        this.load.image('titlescreen', 'C:\Users\1381362\Google Drive\AdvProgramming Project_\Master\Image assets\MDtitlescreen.png');
        
        this.load.image('Gunner', 'C:\Users\1381362\Google Drive\AdvProgramming Project_\Master\Image assets\monkeygunner.png');
        
        this.load.image('Enemy', 'C:\Users\1381362\Google Drive\AdvProgramming Project_\Master\Image assets\Evilmonkey.png');
        
        this.load.image('Bullet', 'C:\Users\1381362\Google Drive\AdvProgramming Project_\Master\Image assets\Coconuts.png')
        
        this.load.image('Background', 'C:\Users\1381362\Google Drive\AdvProgramming Project_\Master\Image assets\Background_Final.png')
    },
 
    create: function () {
        this.preloadBar.cropEnabled = false;
        
    },
  
    update: function() {
        this.ready = false;
        this.state.satrt('StartMenu');
    } 
    
};