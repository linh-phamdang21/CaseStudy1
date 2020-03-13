let Boardgame = function() {
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
                tank.shootStatus = true;
                tank.fire();
                break;
        }
    }
}

