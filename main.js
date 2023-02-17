const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');


// ctx.canvas.height = 500;
// ctx.canvas.width = 500;

// ctx.fillStyle = "red";
// ctx.fillRect(0,0, 500,500);


class SnakeGame{
    constructor(ctx, width, height, noofColums, noofRows){
        this.ctx = ctx;
        this.ctx.canvas.width= width;
        this.ctx.canvas.height = height;
        this.noofColumns = noofColumns;
        this.noofRows = noofRows;
        this.columnSize=width/noofColumns;
        this.rowSize= height/noofRows;
        // this.snakeCoordinates =
    }
    drawBackground(color= "yellow"){
        this.ctx.fillStyle=color;
        this.ctx.fillRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height)
    }
    drawBlock(x,y, color = "red"){
        this.ctx.fillStyle= color;
        this.ctx.fillRect(x*this.columnSize, y*this.rowSize, x+1*this.columnSize, y+1 *this.rowSize)
    }
}

const snakeGame = new SnakeGame(ctx, 600,600,20,20)
snakeGame.drawBackground();      