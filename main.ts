sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 500)
    Apple.say("crunch", 500)
    pause(200)
    Head.say("yum", 500)
})
let Head: Sprite = null
let Apple: Sprite = null
Apple = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 . . . . . . . . 
    . . . . . 6 6 6 . . . . . . . . 
    . . . . . 6 . 6 6 6 6 . . . . . 
    . . . . . . . . 6 6 6 . . . . . 
    . . . . . . . . 6 . . . . . . . 
    . . . . . . . . 6 . . . . . . . 
    . . . . . 2 2 2 6 2 2 . . . . . 
    . . . . 2 2 2 2 2 2 2 2 2 . . . 
    . . . . 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . 2 2 2 2 2 2 2 2 . . . 
    . . . . . . 2 2 2 2 2 2 2 . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
Head = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 4 4 4 4 4 4 . . . . . . . 
    . . . 4 4 4 4 4 4 . . . . . . . 
    . . . 5 5 1 1 f 1 5 5 5 . . . . 
    . . . 5 5 5 1 1 1 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 . . . . . . . 
    . . . 5 5 5 5 5 5 . . . . . . . 
    . . . 5 5 5 f 5 5 5 . . . . . . 
    . . . . . 5 f f f 5 . . . . . . 
    . . . . . 5 5 5 f f . . . . . . 
    . . . . . 5 5 5 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Head.setPosition(20, 60)
Apple.setPosition(120, 60)
game.onUpdate(function () {
    Head.x += controller.dx(100)
})
