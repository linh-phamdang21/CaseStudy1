let Tank = function (xPos,yPos,position) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.position = position;
    this.width = DEFAULT_TANK_WIDTH;
    this.height = DEFAULT_TANK_HEIGHT;
    this.speed = DEFAULT_TANK_SPEED;
    this.tankCurrentDirection = 0;
    this.ballArray = [];
    this.shootStatus = false;
    this.getX = function () {
        return this.xPos;
    }
    this.getY = function () {
        return this.yPos;
    }
    this.getWidth = function () {
        return this.width;
    }
    this.getHeight = function () {
        return this.height;
    }
    this.getSpeed = function () {
        return this.speed;
    }
    this.drawTank = function () {
        ctx.beginPath();
        ctx.drawImage(TANK_IMG_RIGHT, this.xPos, this.yPos, this.width, this.height);
        ctx.closePath();
    }
    this.reDraw = function (tankImg) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.drawImage(tankImg, this.xPos, this.yPos, this.width, this.height);
        ctx.closePath();
    }
    this.moveLeft = function () {
        let tankImg = TANK_IMG_LEFT;
        this.xPos -= this.speed;
        this.reDraw(tankImg);
    }
    this.moveRight = function () {
        let tankImg = TANK_IMG_RIGHT;
        this.xPos += this.speed;
        this.reDraw(tankImg);
    }
    this.moveUp = function () {
        let tankImg = TANK_IMG_UP;
        this.yPos -= this.speed;
        this.reDraw(tankImg);
    }
    this.moveDown = function () {
        let tankImg = TANK_IMG_DOWN;
        this.yPos += this.speed;
        this.reDraw(tankImg);
    }
    this.fire = function () {
        if (this.isShoot) {
            let ball = new Ball(this.xPos + this.width/2,this.yPos+ this.height/2, this.position);
            this.shootStatus = false;
            this.ballArray.push(ball);
        }
        this.ballMove(this.ballArray);
    };
    this.ballMove = function (array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].top < 0) {
                array.splice(i,1);
                i--;
            } else {
                array[i].drawBall();
                array[i].move();
            }
        }
    };
}
let tank = new Tank(100,100,1);
let boardGame = new Boardgame();
boardGame();
tank.drawTank();



