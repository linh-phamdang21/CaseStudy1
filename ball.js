const DEFAULT_BALL_SPEED = 20;
let FPS = 30;
let Ball = function (xPos, yPos) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.speed = DEFAULT_BALL_SPEED;

    this.drawBall = function () {
        ctx.beginPath();
        ctx.rect(this.xPos, this.yPos, 10, 10);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
    }
    this.ballMoveUp = function () {
        this.yPos -= this.speed;
        this.drawBall();
    }
    this.ballMoveDown = function () {
        this.yPos += this.speed;
        this.drawBall();
    }
    this.ballMoveLeft = function () {
        this.xPos -= this.speed;
        this.drawBall();
    }
    this.ballMoveRight = function () {
        this.xPos += this.speed;
        this.drawBall();
    }
}