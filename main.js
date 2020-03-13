let boardGame = new Boardgame();
let tank = new Tank(100,100,1);
let enemy = new Enemy(20,20);

function mainGame() {
    boardGame();
    tank.drawTank();
    enemy.drawEnemy();
    tank.fire();
}
mainGame();



