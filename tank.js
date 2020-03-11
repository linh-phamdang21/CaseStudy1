const DEFAULT_TANK_WIDTH = 8;
const DEFAULT_TANK_HEIGHT = 10;
const DEFAULT_TANK_SPEED = 10;
let canvas = document.getElementById("gameboard");
let ctx = canvas.getContext("2d");

let Tank = function (x,y) {
    this.xPos = x;
    this.yPos = y;
    this.width = DEFAULT_TANK_WIDTH;
    this.height = DEFAULT_TANK_HEIGHT;
    this.speed = DEFAULT_TANK_SPEED;
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
    this.drawTank = function (img) {
        let show_tank = '<img id="showtank" ' +
            'src="' + img + '"' +
            'height="20px"' +
            'width="20px"' +
            'style="left: ' + this.getX() + 'px; top: ' + this.getY() + 'px; position: absolute;" />';
        let ctx = document.getElementById("gameboard").getContext("2d");
        ctx.drawImage(ctx,10,10);
        //return show_tank;
    }


    this.moveLeft = function () {
        this.drawTank('img/player1x4.jpg');
    }
    this.moveRight = function () {
        this.drawTank('img/player1x2.jpg');

    }
    this.moveUp = function () {
        this.drawTank('img/player1x1.jpg');

    }
    this.moveDown = function () {
        this.drawTank('img/player1x3.jpg');

    }
}
window.addEventListener('keydown',moveTank)
function moveTank(evt){
    switch (evt.keyCode) {
        case 38:
            tank.moveUp();
            break;
        case 39:
            tank.moveRight();
            break;
        case 40:
            tank.moveDown();
            break;
        case 37:
            tank.moveLeft();
            break;
        case 32:
            ball.moveBall(tank)
            //ball.moveBall(tank);
            break;
    }
}

let tank = new Tank(30,50);
tank.drawTank('img/player1x2.jpg');


