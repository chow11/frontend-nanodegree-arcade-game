// Game Parameters
var ALLOWED_KEYS = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
};

// BLOCK_WIDTH and BLOCK_HEIGHT must match the image sizes
var BLOCK_WIDTH = 101;
var BLOCK_HEIGHT = 83;
// set enemy starting Y locations and possible speeds
var ENEMY_START_Y = [60, 60 + BLOCK_HEIGHT, 60 + BLOCK_HEIGHT * 2];
var ENEMY_SPEED = [100, 130, 200, 250, 300];
// player starting location
var PLAYER_START_X = 202;
var PLAYER_START_Y = 392;

// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.initialize();
}

Enemy.prototype.initialize = function() {
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    this.x = -BLOCK_WIDTH;
    // choose a random level and speed for the enemy
    this.y = ENEMY_START_Y[Math.floor(Math.random() * ENEMY_START_Y.length)];
    this.speed = ENEMY_SPEED[Math.floor(Math.random() * ENEMY_SPEED.length)];
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;

    // check for enemy off screen to the right
    if (this.x > BLOCK_WIDTH * 9) {
        this.initialize();
    }

    // check if enemy is near player on same level
    if (this.y === player.y && Math.abs(this.x - player.x) < (BLOCK_WIDTH / 2)) {
        player.initialize();
    }
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.initialize();

    // pick a random avatar (alternative to use of arrays as for the enemy object)
    switch(Math.floor(Math.random() * 5)) {
        case 0 :
            this.sprite = 'images/char-boy.png';
        break;

        case 1 :
            this.sprite = 'images/char-cat-girl.png';
        break;

        case 2 :
            this.sprite = 'images/char-horn-girl.png';
        break;

        case 3 :
            this.sprite = 'images/char-pink-girl.png';
        break;

        case 4 :
            this.sprite = 'images/char-princess-girl.png';
        break;

        default:
            this.sprite = 'images/char-boy.png';
    }
}

Player.prototype.initialize = function() {
    this.x = PLAYER_START_X;
    this.y = PLAYER_START_Y;
    this.move = null;
}

// Update the player's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    switch(this.move) {
        case 'left' :
            if (this.x > 0) {
                this.x -= BLOCK_WIDTH;
            }
        break;

        case 'up' :
            this.y -= BLOCK_HEIGHT;
        break;

        case 'right' :
            if (this.x < BLOCK_WIDTH * 4) {
                this.x += BLOCK_WIDTH;
            }
        break;

        case 'down' :
            if (this.y < PLAYER_START_Y) {
                this.y += BLOCK_HEIGHT;
            }
        break;

        default:
    }
    this.move = null;

    // reset the game if the player makes it to the river
    if (this.y < 60) {
        this.initialize();
        this.lives -= 1;
    }
}

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Draw the player on the screen, required method for game
Player.prototype.handleInput = function(direction) {
    this.move = direction;
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(), new Enemy(), new Enemy(), new Enemy()];
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    player.handleInput(ALLOWED_KEYS[e.keyCode]);
});

// disable default key actions
document.addEventListener('keydown', function(e) {
    if (typeof ALLOWED_KEYS[e.keyCode] === 'undefined') {
        e.preventDefault();
    }
}, false);

