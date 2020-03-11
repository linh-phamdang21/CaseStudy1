const DEFAULT_TANK_WIDTH = 12;
const DEFAULT_TANK_HEIGHT = 12;
const DEFAULT_TANK_SPEED = 5;
let canvas = document.getElementById("gameboard");
let ctx = canvas.getContext("2d");

let Tank = function (xPos,yPos) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = DEFAULT_TANK_WIDTH;
    this.height = DEFAULT_TANK_HEIGHT;
    this.speed = DEFAULT_TANK_SPEED;
    this.tankCurrentDirection = 0;
    this.ballArray = [];
    this.shootStatus = false;
    this.tankImgUp = document.getElementById("player1");
    this.tankImgRight = document.getElementById("player2");
    this.tankImgDown = document.getElementById("player3");
    this.tankImgLeft = document.getElementById("player4");

    // this.getX = function () {
    //     return this.xPos;
    // }
    // this.getY = function () {
    //     return this.yPos;
    // }
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
        ctx.drawImage(this.tankImgRight,this.xPos,this.yPos,this.width,this.height);
        ctx.closePath();
    }
    this.reDraw = function (tankImg) {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.beginPath();
        ctx.drawImage(tankImg,this.xPos,this.yPos,this.width,this.height);
        ctx.closePath();
    }
    this.moveLeft = function () {
        let tankImg = this.tankImgLeft;
        this.xPos -= this.speed;
        this.reDraw(tankImg);
    }
    this.moveRight = function () {
        let tankImg = this.tankImgRight;
        this.xPos += this.speed;
        this.reDraw(tankImg);
    }
    this.moveUp = function () {
        let tankImg = this.tankImgUp;
        this.yPos -= this.speed;
        this.reDraw(tankImg);
    }
    this.moveDown = function () {
        let tankImg = this.tankImgDown;
        this.yPos += this.speed;
        this.reDraw(tankImg);
    }

    this.fire = function () {
        if (this.shootStatus){
            let ball = new Ball(this.xPos, this.yPos)
            this.ballArray.push(ball);
            this.shootStatus = false;
        }
        for (let i = 0; i < this.ballArray.length; i++){
            if (this.ballArray[i].top < 0){
                this.ballArray.splice(i,1)
            }  else{
                if (this.tankCurrentDirection === 1){
                    this.ballArray[i].drawBall();
                    this.ballArray[i].ballMoveUp();
                } else if (this.tankCurrentDirection === 2){
                    this.ballArray[i].drawBall();
                    this.ballArray[i].ballMoveRight();
                } else if (this.tankCurrentDirection === 3){
                    this.ballArray[i].drawBall();
                    this.ballArray[i].ballMoveDown();
                } else if (this.tankCurrentDirection === 4){
                    this.ballArray[i].drawBall();
                    this.ballArray[i].ballMoveLeft();
                }
            }
        }
    }


    // this.fire = function () {
    //     if (this.isShoot) {
    //         let bullet = new Bullet(this.left + tank.width / 2 - 10, this.top + tank.height / 2, this.direction);
    //         this.bullet_array.push(bullet);
    //         this.isShoot = false;
    //     }
    //     for (let i = 0; i < this.bullet_array.length; i++) {
    //         if (this.bullet_array[i].top < 0) {
    //             this.bullet_array.splice(i, 1);
    //             i--;
    //         } else {
    //             this.bullet_array[i].drawBullet();
    //             this.bullet_array[i].move();
    //         }
    //     }
    // }
}



