const BALL_SPEED = 2;
let Ball = function (ball_x,ball_y) {
    this.xPos = ball_x;
    this.yPos = ball_y;
    this.getX = function () {
        return this.xPos;
    }
    this.getY = function () {
        return this.yPos;
    }
    this.speed = BALL_SPEED;
    this.drawBall = function () {
        let ctx = document.getElementById("gameboard").getContext("2d");
        ctx.beginPath();
        ctx.arc(this.getX(),this.getY(), 1, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
    }
    this.moveBall = function (tank) {
        for (let i = 0; i < 100; i++){
            this.yPos -= this.speed;
            ctx.clearRect(0,0,canvas.width,canvas.height);
            this.drawBall();
            tank.drawTank(tank.getX(),tank.getY());
        }
        this.yPos = tank.getY();
    }
}