class Paddle {
    constructor(canvas) {
      this.paddleHeight = 10;
      this.paddleWidth = 100;
      this.paddleX = (canvas.width - this.paddleWidth) / 2;
      // TODO add y
      this.color = '#F08080'
    }
    drawPaddle(ctx, canvas) {
      ctx.beginPath();
      ctx.rect(this.paddleX,
        canvas.height - this.paddleHeight,
        this.paddleWidth,
        this.paddleHeight);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    }
  }
  export default Paddle;