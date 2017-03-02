(function(){
	self.Board= function(width,heigth){
		this.width = width;
		this.heigth = heigth;
		this.playing = false;
		this.game_over = false;
		this.bars= [];
		this.ball = null;
	}

	self.Board.prototype = {
		get element(){
			var element = this.bars;
			element.push(ball);
			return element;
		}

	}
})();
(function(){
	self.Bar = function(x,y,width,heigth,board){
		this.x = x;
		this.y = y;
		this.width = width;
		this.board = board;
		this.board.bars.push(this);
		this.kind = "rectangulo"; 
	}
	self.Board.prototype = {
		down: function(){

		},
		up: function(){

		}
	}
})();
(function(){
	self.BoardView = function(canvas,board){
		this.canvas = canvas;
		this.canvas.width = board.width;
		this.canvas.heigth = board.heigth;
		this.board = board;
		this.ctx = canvas.getContext("2d");
	}
	self.BoardView.prototype = {
		draw: function(){
			for( var i = this.board.element.length - 1; i >= 0; i--){
				var el = this.board.element[i];
				draw(this.ctx,el);
			}
		};
	}

	function draw(ctx,element,circle){
		switch(element.kind){
			case "square":
			ctx.fillRect(element.x,element.y,element.width,element.heigth);
			break;
		}
	}

})();

window.addEventListener("load",main);


function main(){
 var board = new Board(800,400);
 var canvas = document.getElementById("canvas");
 var board_view = new BoardView(canvas,board);
 console.log(board);
 board_view.draw();

}