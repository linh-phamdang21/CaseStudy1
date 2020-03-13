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

let Bullet = function (left, top, direction) {
    this.left = left;
    this.top = top;
    this.direction = direction;
    this.speed = BULLET_DEFAULT_SPEED;

    this.drawBullet = function () {
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.rect(this.left, this.top, 15, 15);
        ctx.fill();
        ctx.closePath();
    };
    this.move = function () {
        switch (this.direction) {
            case 1 :
                this.moveUp();
                break;
            case 2 :
                this.moveDown();
                break;
            case 3 :
                this.moveLeft();
                break;
            case 4 :
                this.moveRight();
                break;
        }
    };

    this.moveUp = function () {
        this.top -= this.speed;
    };
    this.moveDown = function () {
        this.top +=this.speed;
    };
    this.moveLeft = function () {
        this.left -= this.speed;
    };
    this.moveRight = function () {
        this.left += this.speed;
    };
};