let canvas = document.getElementById("gameboard");
let ctx = canvas.getContext("2d");
let Enemy = function (xPos,yPos) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = DEFAULT_ENEMY_WIDTH;
    this.height = DEFAULT_ENEMY_HEIGHT;
    this.speed = DEFAULT_ENEMY_SPEED;
    this.enemyCurrentDirection = 0;
    this.ballArray = [];
    this.shootStatus = false;
    this.enemyImgUp = document.getElementById("enemy_up");
    this.enemyImgRight = document.getElementById("enemy_right");
    this.enemyImgDown = document.getElementById("enemy_down");
    this.enemyImgLeft = document.getElementById("enemy_left");

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
    this.drawEnemy = function () {
        ctx.beginPath();
        ctx.drawImage(this.enemyImgRight,this.xPos,this.yPos,this.width,this.height);
        ctx.closePath();
    }
    this.reDraw = function (enemyImg) {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.beginPath();
        ctx.drawImage(enemyImg,this.xPos,this.yPos,this.width,this.height);
        ctx.closePath();
    }
    this.moveLeft = function () {
        let enemyImg = this.enemyImgLeft;
        this.xPos -= this.speed;
        this.reDraw(enemyImg);
    }
    this.moveRight = function () {
        let enemyImg = this.enemyImgRight;
        this.xPos += this.speed;
        this.reDraw(enemyImg);
    }
    this.moveUp = function () {
        let enemyImg = this.enemyImgUp;
        this.yPos -= this.speed;
        this.reDraw(enemyImg);
    }
    this.moveDown = function () {
        let enemyImg = this.enemyImgDown;
        this.yPos += this.speed;
        this.reDraw(enemyImg);
    }
}



