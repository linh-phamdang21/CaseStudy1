let boardGame = new Boardgame();
let tank = new Tank(20,20);
tank.drawTank();
function mainGame() {
    tank.fire();
    requestAnimationFrame(mainGame);
}
mainGame();
// let tank = new Tank(20,20);
// let boardGame = new Boardgame();
