let Enemy = function (xPos,yPos) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = DEFAULT_ENEMY_WIDTH;
    this.height = DEFAULT_ENEMY_HEIGHT;
    this.speed = DEFAULT_ENEMY_SPEED;
    this.enemyCurrentDirection = 0;
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
    this.drawEnemy = function () {
        ctx.beginPath();
        ctx.drawImage(ENEMY_IMG_RIGHT,this.xPos,this.yPos,this.width,this.height);
        ctx.closePath();
    }
    this.reDraw = function (enemyImg) {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.beginPath();
        ctx.drawImage(enemyImg,this.xPos,this.yPos,this.width,this.height);
        ctx.closePath();
    }
    this.moveLeft = function () {
        let enemyImg = ENEMY_IMG_LEFT;
        this.xPos -= this.speed;
        this.reDraw(enemyImg);
    }
    this.moveRight = function () {
        let enemyImg = ENEMY_IMG_RIGHT;
        this.xPos += this.speed;
        this.reDraw(enemyImg);
    }
    this.moveUp = function () {
        let enemyImg = ENEMY_IMG_UP;
        this.yPos -= this.speed;
        this.reDraw(enemyImg);
    }
    this.moveDown = function () {
        let enemyImg = ENEMY_IMG_DOWN;
        this.yPos += this.speed;
        this.reDraw(enemyImg);
    }
}



