var boot = function(game){
	console.log("%cKäynnistä peli", "color:white; background:red");
};

boot.prototype = {
	preload: function(){
          //latauskuva?? this.game.load.image("loading","assets/loading.png");
	},
  	create: function(){
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		//this.scale.setScreenSize();
		this.game.state.start("Preload");
	}
}   


//preload alkaa tästä
var preload = function(game){}

preload.prototype = {
	preload: function(){
          //var loadingBar = this.add.sprite(160,240,"loading");
          //loadingBar.anchor.setTo(0.5,0.5);
          //this.load.setPreloadSprite(loadingBar);
          this.game.stage.backgroundColor = '';
          this.game.load.image('start', 'putket/start.png');
          this.game.load.image('straight1', 'putket/straight1.png');
          this.game.load.image('straight2', 'putket/straight2.png');
          this.game.load.image('corner1', 'putket/corner1.png');
          this.game.load.image('corner2', 'putket/corner2.png');
          this.game.load.image('corner3', 'putket/corner3.png');
          this.game.load.image('corner4', 'putket/corner4.png');
          this.game.load.image('menu', 'valikko.png');
          this.game.load.audio('mystery', 'mystery.mp3');
	},
  	create: function(){
		this.game.state.start("startGame");
	}
}