function draw_balls() {
    for (let i = 0; i < balls.length; i++) {
        ctx.beginPath();
        ctx.arc(balls[i].getX(), balls[i].getY(), 5, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
    }
}

function move_balls() {
    for (let i = 0; i < balls.length; i++) {
        balls[i].set("Y", balls[i].get("Y") - ball_speed);
        if (balls[i].getY("Y") < 0) {
            balls.splice(i, 1);
        }
    }
}

function show_balls() {
    draw_ball();
    draw_balls();
    move_balls();
}
function draw_ball(ball_X, ball_Y) {
    let canvas = document.getElementById("gameboard");
    let ctx = canvas.getContext("2d");
    ctx.arc(ball_X, ball_Y, 5, 0, Math.PI * 2);
}

this.moveLeft = function () {
    this.xPos -= this.speed;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    tank.drawTank(tank.getX(),tank.getY());
}
this.moveRight = function () {
    this.xPos += this.speed;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    tank.drawTank(tank.getX(),tank.getY());
}
this.moveUp = function () {
    this.yPos -= this.speed;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    tank.drawTank(tank.getX(),tank.getY());
}
this.moveDown = function () {
    this.yPos += this.speed;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    tank.drawTank(tank.getX(),tank.getY());
}
