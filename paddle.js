class drawPaddle {

constructor(ctx) {
        this.paddleHeight = 10;
        this.paddleWidth = 100;
        this.paddleX = (canvas.width-this.paddleWidth) / 2;  
    }


   drawPaddle(ctx, canvas) {
    ctx.beginPath();
    ctx.rect(this.paddleX, 
        canvas.height-this.paddleHeight, 
        this.paddleWidth, 
        this.paddleHeight);
    ctx.fillStyle = "#f08080";
    ctx.fill();
    ctx.closePath();
}

}