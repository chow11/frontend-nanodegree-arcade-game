frontend-nanodegree-arcade-game
===============================

Students should use this rubric: https://www.udacity.com/course/viewer#!/c-ud015/l-3072058665/m-3072588797

for self-checking their submission.

About
----------

A simple Frogger-like javascript web-application

Configure
---------

Adjustable Game Parameters in (app.js):

ALLOWED_KEYS : an array of 4 key codes that map to the values 'left', 'up', 'right', 'down'

BLOCK_WIDTH and BLOCK_HEIGHT must match the image sizes and if resized, line #135 in (engine.js) must also be updated
BLOCK_WIDTH : image width
BLOCK_HEIGHT : image height

ENEMY_START_Y : an array of 3 elements representing the Y position for each of the enemy layers
ENEMY_SPEED : an array of n elements where n > 0 and each element is the pixels enemies travel in 1000 ticks

PLAYER_START_X : player starting X location
PLAYER_START_Y : player starting Y location

Instructions
------------

Launch the game in a browser by navigating to file://<path-to-project-folder>/index.html

Use the up/down/left/right arrow keys to move the player up to the river while avoiding enemies on the road.
These keys can be mapped to other keys, see the Configure section above.

Contribute
----------

- Source Code: https://github.com/chow11/frontend-nanodegree-arcade-game.git

Support
-------

If you are having issues, please let us know.
We have a mailing list located at: someone@somewhere.com

License
-------

The project is licensed under the BSD license.