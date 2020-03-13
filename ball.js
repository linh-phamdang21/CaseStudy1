let Ball = function (xPos, yPos,position) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.position = position;
    this.speed = DEFAULT_BALL_SPEED;
    this.ball = [];

    this.drawBall = function () {
        ctx.beginPath();
        ctx.rect(this.xPos, this.yPos, 10, 10);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
    }
    this.move = function () {
        switch (this.direction) {
            case 1 :
                this.ballMoveUp();
                break;
            case 2 :
                this.ballMoveRight();
                break;
            case 3 :
                this.ballMoveDown();
                break;
            case 4 :
                this.ballMoveLeft();
                break;
        }
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