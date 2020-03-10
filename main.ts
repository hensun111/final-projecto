namespace SpriteKind {
    export const elec = SpriteKind.create()
    export const boi = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 9 9 2 2 2 2 2 2 2 9 9 2 2 2 
2 2 2 2 2 2 2 2 2 2 9 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 9 2 2 2 
2 2 2 2 9 9 2 2 2 2 2 2 9 9 2 2 
2 2 2 2 2 2 9 9 2 2 2 2 2 9 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 9 9 9 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`
}
function projectiles () {
	
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    game.over(false)
})
function waves () {
	
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.player2.changeScoreBy(-1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (amm > 0) {
        projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 1 . . . . . . 1 . . . . . 
. 1 1 . . . . . . 1 . . . . . . 
. . . 1 1 . . . 1 . . 1 . . . . 
. . . . . 1 . . 1 . 1 . . . . . 
. . 1 1 1 1 1 1 1 1 1 . 1 . . . 
. . 1 1 1 1 1 1 1 1 1 . . . . . 
. . . 1 . . . 1 . . 1 1 . . . . 
. . 1 . . 1 . . . 1 . 1 . . . . 
. . . 1 . . . . 1 . . . 1 1 . . 
. . . . 1 . 1 1 1 . . . . 1 . . 
. . . . . 1 . . . . . . . . 1 1 
. . . . . . . . . . . . . . . 1 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite2, 250, 0)
        amm += -1
    }
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    info.player2.setScore(1000)
    scene.setTileMap(img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.showLongText("you actually caught up to me now you die", DialogLayout.Bottom)
    mySprite3.destroy()
    boss_guy = sprites.create(img`
. . . . . . f f . . . . . . . . . f . . 
. . . . . f e f . . . . . . . . f 5 f . 
. . . . . f 5 f . . . . . . . f 5 4 4 f 
. . . . f 5 5 f . . . . f f f 5 4 4 4 f 
. . . . f 5 5 f . . f f e e f 4 4 4 f . 
. . . f 5 5 5 5 f f 5 5 e f 4 4 4 f . . 
. . f 5 5 5 5 5 5 5 5 5 f f 4 4 f . . . 
. f 1 5 5 5 5 5 5 5 5 5 f . f 4 4 f . . 
. f f 5 5 5 5 5 5 5 5 5 f . f 4 4 f . . 
. f 5 5 5 5 1 f 5 5 5 5 5 f f 4 f . . . 
. . f 5 5 5 f f 5 5 5 5 4 f f f . . . . 
. . . f 4 5 5 5 2 2 5 4 4 4 f . . . . . 
. . . f 4 5 5 5 2 4 4 4 e e f . . . . . 
. 1 f 5 4 4 4 4 4 4 5 4 4 4 f . . . . . 
. . . f f 5 5 5 5 5 5 4 4 e f . . . . . 
. . . . f 4 5 5 5 5 5 4 4 4 f . . . . . 
. . . f 4 f 4 4 4 4 4 4 4 4 f . . . . . 
. . . f f f f f 5 5 5 4 4 f . . . . . . 
. . . . . . . . f f f 4 f f . . . . . . 
. . . . . . . . . f 5 5 4 f . . . . . . 
. . . . . . . . . . f f f . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    boss_guy.setPosition(156, 57)
    boss_guy.setVelocity(0, 50)
    boss_guy.setFlag(SpriteFlag.BounceOnWall, true)
    boss_guy.setFlag(SpriteFlag.StayInScreen, true)
    info.player2.setScore(10)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Food, function (sprite, otherSprite) {
    projectile3.destroy()
})
function surfer () {
    mySprite2 = sprites.create(img`
. . . . . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f d d d d d f f . . . . . . . . 
. . . . . . . . . . f d d d d d d d f . . . . . . . . 
. . . . . . . . . . f d d 1 1 d 1 d f . . . . . . . . 
. . . . . . . . . . f d 1 f f d f 1 f . . . . . . . . 
. . . . . . . . . . f d 1 f f d f 1 f . . . . . . . . 
. . . . . . . . . . f d d 1 1 d 1 d f . . . . . . . . 
. . . . . . . . . . f d d d d d d d f . . . . . . . . 
. . . . . . . f f f d d d d d d d f f f . . . . . . . 
. . . . . . . f d d d d d d d d d d d f . . . . . . . 
. . . . . . f d d d d d d d d d d d d d f . . . . . . 
. . . . . f d d d d d d f d d d f d d d d f . . . . . 
. . . . . f d d d f f f f d d d f f f d d f . . . . . 
. . . . . f d d d d f f f d d d f f d d d f . . . . . 
. . . . . f d d d d f f f d d d f f d d d f . . . . . 
. . . . . f f f f f . . f 2 2 2 f . f f f f . . . . . 
. . . . . . . . . . . f d d 2 d d f . . . . . . . . . 
. . . . . . . . . . f d d d f d d d f . . . . . . . . 
. . . . . . . . . f f d d f . f d d d f . . . . . . . 
. . . . . . . f f d d d f . . . f d d d f . . . . . . 
. . . . . . f d d d d d f . . . f d d d d f . . . . . 
. f f f f f f f f f f f f f f f f f f f f f f f f f . 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
. f f f f f f f f f f f f f f f f f f f f f f f f f . 
`, SpriteKind.Player)
    mySprite2.setPosition(1, 76)
    controller.moveSprite(mySprite2)
}
let electricity: Sprite = null
let projectile3: Sprite = null
let boss_guy: Sprite = null
let mySprite2: Sprite = null
let projectile2: Sprite = null
let mySprite3: Sprite = null
let amm = 0
scene.setTileMap(img`
9 1 1 1 1 9 9 9 9 9 1 1 1 1 1 
9 1 1 1 1 1 9 9 1 1 1 1 1 1 1 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`)
surfer()
info.setScore(0)
info.setLife(10)
amm = 10
scene.setTile(9, img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`, true)
mySprite3 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f . . . . . . . . . . . . . . 
. . . . . . . . f f f f . . . . . . . . . . . . . . . . . . . . . f f f f . . . . . . . . . . . . . 
. . . . . . . f f f f f f f f f . . . . . . . . . . . . . . . . f 5 f f f . . . . . . . . . . . . . 
. . . . . . . . f f f f 5 5 5 5 f f f . . . . . . . . . . . . . f 5 5 f f . . . . . . . . . . . . . 
. . . . . f f . . f f f 5 5 5 5 5 5 5 f f . . . . f f f f f f f 5 5 5 5 f . . . . . . . . . . . . . 
. . . . . f 5 f . . f f f 5 5 5 5 5 5 5 5 f f f f 5 5 5 5 5 5 5 f f 5 5 f . . . . . . . . . . . . . 
. . . . f 5 5 5 f . . f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 5 f . . . . . . . . . . . . . 
. . . . f 5 5 5 f . . . . f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f . . . . . . . . . . . . . . 
. . . f 5 5 5 5 5 f . . . . f f 5 5 5 5 5 5 5 5 f f 5 5 5 5 5 5 5 5 5 f . . . . . . . . . . . . . . 
. . . f 5 5 5 5 5 f . . . . . . f f 5 5 5 5 5 f f 5 f 5 5 5 5 5 5 f f 5 f . . . . . . . . . . . . . 
. . f 5 5 5 5 5 5 5 f . . . . . f 5 5 5 5 5 5 f f f f 5 5 5 5 5 5 f 5 f f . . . . . . . . . . . . . 
. . f 5 5 5 5 5 5 5 f . . . . . f 5 5 5 5 5 5 5 f f 5 5 5 5 5 5 5 f f f 5 f . . . . . . . . . . . . 
. . f 5 5 5 5 5 5 5 5 f . . . . f 5 5 5 5 2 2 5 5 5 5 5 5 5 5 f 5 5 f 5 5 f . . . . . . . . . . . . 
. . . f 5 5 5 5 5 5 5 f . . . f 5 5 5 5 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 f . . . . . . . . . . . . 
. . . . f 5 5 5 5 5 5 5 f . . f 5 5 5 5 2 2 2 2 5 5 5 f 5 5 f f 5 f 5 5 2 2 f . . . . . . . . . . . 
. . . . . f 5 5 5 5 5 5 f . f 5 5 5 5 5 5 2 2 5 5 5 5 5 f f 5 5 f 5 5 2 2 2 f . . . . . . . . . . . 
. . . . . . f 5 5 5 5 f . . f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 f . . . . . . . . . . . 
. . . . . . f 5 5 5 f . . f 5 5 5 5 5 5 5 5 f f 5 5 5 5 5 5 5 5 5 5 5 5 2 f . . . . . . . . . . . . 
. . . . . f 5 5 5 f . . . f f 5 5 5 5 5 f f 5 5 f 5 5 5 5 5 5 5 5 5 5 5 f . . . . . . . . . . . . . 
. . . . f 5 5 5 f . . . f f f f 5 5 5 f 5 5 5 5 f 5 5 5 5 5 5 5 5 5 5 f . . . . . . . . . . . . . . 
. . . . f 5 5 5 5 f . . f f 5 5 5 5 5 5 5 5 5 5 5 f 5 5 5 5 5 5 5 5 5 f . . . . . . . . . . . . . . 
. . . . . f 5 5 5 5 f f 5 5 5 5 5 5 5 5 5 5 5 f f 5 5 5 5 5 5 5 5 5 5 f f f . . . . . . . . . . . . 
. . . . . . f 5 5 5 5 f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 5 5 f . . . . . . . . . . . 
. . . . . . . f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 5 5 5 f . . . . . . . . . . 
. . . . . . . f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 5 5 5 f . . . . . . . . . . 
. . . . . . . f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 5 5 5 f . . . . . . . . . . . 
. . . . . . f 5 5 5 5 5 5 5 5 5 5 5 5 f f f 5 5 5 5 5 5 5 5 5 5 5 5 f f f f . . . . . . . . . . . . 
. . . . . . . f f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 5 5 5 5 5 5 5 5 5 5 5 f . . . . . . . . . . . . . . . 
. . . . . . . . . f f 5 5 5 5 5 5 5 5 5 5 5 5 f 5 5 5 5 5 5 5 5 5 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f 5 5 5 5 5 5 5 5 5 5 5 f 5 5 5 5 5 5 5 5 5 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . . . f f 5 5 5 f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f . . . . . . . . 
. . . . . . . . . . . . f f f f f 9 9 9 9 9 9 9 6 6 6 6 6 6 6 6 6 6 6 9 9 9 f 9 9 9 f f . . . . . . 
. . . . . . . . f f f f 9 9 9 9 9 9 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 9 9 9 9 9 f f f . . . 
. . . . . . f f 9 9 9 9 9 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 6 6 6 9 9 9 9 9 f f . . 
. . . . f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f 6 6 6 6 6 6 9 9 9 f f . . 
. . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f f f 6 6 6 6 6 6 6 6 6 9 f f . . . 
. . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f . . . . 
. . . . f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f f . . . . . . . 
. . . . . . . f f f f 6 6 f 6 6 6 6 6 6 f 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f f f . . . . . . . . . . . 
. . . . . . . . . . . f f f 6 6 6 6 6 f 6 6 6 6 6 6 6 f f f f f f f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f 6 6 6 6 f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f 6 6 6 f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
mySprite3.setPosition(87, 61)
info.player2.setScore(1000)
mySprite3.setVelocity(100, 0)
game.onUpdateInterval(1500, function () {
    if (info.score() <= 200) {
        projectile3 = sprites.createProjectileFromSide(img`
. . . . e e e e e e e . . . . . 
. . e e e e e d e e e e e . . . 
. e e d e d e e e e e e e e . . 
. e e e e e d e e e e e e e . . 
e e e e e e e e e e e e e e e . 
e e 9 e e e 9 e e d e 9 e e e 9 
e d 9 9 e e 9 d d d 9 d e e e . 
e e e 9 e e e e e 9 e e 9 e e . 
. e e 9 e 9 e 9 9 e e 9 9 e . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(-20, -200), 0)
        projectile3.setPosition(161, 87)
        projectile3.setKind(SpriteKind.Food)
    }
})
game.onUpdate(function () {
    if (info.score() == 200) {
        info.changeScoreBy(10)
        mySprite3 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f . . . . . . . . . . . . . . 
. . . . . . . . f f f f . . . . . . . . . . . . . . . . . . . . . f f f f . . . . . . . . . . . . . 
. . . . . . . f f f f f f f f f . . . . . . . . . . . . . . . . f 5 f f f . . . . . . . . . . . . . 
. . . . . . . . f f f f 5 5 5 5 f f f . . . . . . . . . . . . . f 5 5 f f . . . . . . . . . . . . . 
. . . . . f f . . f f f 5 5 5 5 5 5 5 f f . . . . f f f f f f f 5 5 5 5 f . . . . . . . . . . . . . 
. . . . . f 5 f . . f f f 5 5 5 5 5 5 5 5 f f f f 5 5 5 5 5 5 5 f f 5 5 f . . . . . . . . . . . . . 
. . . . f 5 5 5 f . . f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 5 f . . . . . . . . . . . . . 
. . . . f 5 5 5 f . . . . f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f . . . . . . . . . . . . . . 
. . . f 5 5 5 5 5 f . . . . f f 5 5 5 5 5 5 5 5 f f 5 5 5 5 5 5 5 5 5 f . . . . . . . . . . . . . . 
. . . f 5 5 5 5 5 f . . . . . . f f 5 5 5 5 5 f f 5 f 5 5 5 5 5 5 f f 5 f . . . . . . . . . . . . . 
. . f 5 5 5 5 5 5 5 f . . . . . f 5 5 5 5 5 5 f f f f 5 5 5 5 5 5 f 5 f f . . . . . . . . . . . . . 
. . f 5 5 5 5 5 5 5 f . . . . . f 5 5 5 5 5 5 5 f f 5 5 5 5 5 5 5 f f f 5 f . . . . . . . . . . . . 
. . f 5 5 5 5 5 5 5 5 f . . . . f 5 5 5 5 2 2 5 5 5 5 5 5 5 5 f 5 5 f 5 5 f . . . . . . . . . . . . 
. . . f 5 5 5 5 5 5 5 f . . . f 5 5 5 5 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 f . . . . . . . . . . . . 
. . . . f 5 5 5 5 5 5 5 f . . f 5 5 5 5 2 2 2 2 5 5 5 f 5 5 f f 5 f 5 5 2 2 f . . . . . . . . . . . 
. . . . . f 5 5 5 5 5 5 f . f 5 5 5 5 5 5 2 2 5 5 5 5 5 f f 5 5 f 5 5 2 2 2 f . . . . . . . . . . . 
. . . . . . f 5 5 5 5 f . . f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 f . . . . . . . . . . . 
. . . . . . f 5 5 5 f . . f 5 5 5 5 5 5 5 5 f f 5 5 5 5 5 5 5 5 5 5 5 5 2 f . . . . . . . . . . . . 
. . . . . f 5 5 5 f . . . f f 5 5 5 5 5 f f 5 5 f 5 5 5 5 5 5 5 5 5 5 5 f . . . . . . . . . . . . . 
. . . . f 5 5 5 f . . . f f f f 5 5 5 f 5 5 5 5 f 5 5 5 5 5 5 5 5 5 5 f . . . . . . . . . . . . . . 
. . . . f 5 5 5 5 f . . f f 5 5 5 5 5 5 5 5 5 5 5 f 5 5 5 5 5 5 5 5 5 f . . . . . . . . . . . . . . 
. . . . . f 5 5 5 5 f f 5 5 5 5 5 5 5 5 5 5 5 f f 5 5 5 5 5 5 5 5 5 5 f f f . . . . . . . . . . . . 
. . . . . . f 5 5 5 5 f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 5 5 f . . . . . . . . . . . 
. . . . . . . f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 5 5 5 f . . . . . . . . . . 
. . . . . . . f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 5 5 5 f . . . . . . . . . . 
. . . . . . . f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 5 5 5 f . . . . . . . . . . . 
. . . . . . f 5 5 5 5 5 5 5 5 5 5 5 5 f f f 5 5 5 5 5 5 5 5 5 5 5 5 f f f f . . . . . . . . . . . . 
. . . . . . . f f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 5 5 5 5 5 5 5 5 5 5 5 f . . . . . . . . . . . . . . . 
. . . . . . . . . f f 5 5 5 5 5 5 5 5 5 5 5 5 f 5 5 5 5 5 5 5 5 5 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f 5 5 5 5 5 5 5 5 5 5 5 f 5 5 5 5 5 5 5 5 5 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . . . f f 5 5 5 f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f . . . . . . . . 
. . . . . . . . . . . . f f f f f 9 9 9 9 9 9 9 6 6 6 6 6 6 6 6 6 6 6 9 9 9 f 9 9 9 f f . . . . . . 
. . . . . . . . f f f f 9 9 9 9 9 9 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 9 9 9 9 9 f f f . . . 
. . . . . . f f 9 9 9 9 9 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 6 6 6 9 9 9 9 9 f f . . 
. . . . f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f 6 6 6 6 6 6 9 9 9 f f . . 
. . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f f f 6 6 6 6 6 6 6 6 6 9 f f . . . 
. . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f . . . . 
. . . . f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f f . . . . . . . 
. . . . . . . f f f f 6 6 f 6 6 6 6 6 6 f 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f f f . . . . . . . . . . . 
. . . . . . . . . . . f f f 6 6 6 6 6 f 6 6 6 6 6 6 6 f f f f f f f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f 6 6 6 6 f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f 6 6 6 f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
        mySprite3.setPosition(164, 75)
        mySprite3.setVelocity(-10, 0)
    }
    if (amm == 0) {
        mySprite2.say("No ammo")
    } else {
        mySprite3.say("")
    }
})
game.onUpdate(function () {
    if (info.player2.score() == 0) {
        boss_guy.destroy()
    }
})
game.onUpdateInterval(500, function () {
    info.changeScoreBy(10)
})
game.onUpdateInterval(2700, function () {
    if (info.score() <= 200) {
        projectile3 = sprites.createProjectileFromSide(img`
. . . . e e e e e e e . . . . . 
. . e e e e e d e e e e e . . . 
. e e d e d e e e e e e e e . . 
. e e e e e d e e e e e e e . . 
e e e e e e e e e e e e e e e . 
e e 9 e e e 9 e e d e 9 e e e 9 
e d 9 9 e e 9 d d d 9 d e e e . 
e e e 9 e e e e e 9 e e 9 e e . 
. e e 9 e 9 e 9 9 e e 9 9 e . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(-20, -200), 0)
        projectile3.setPosition(162, 119)
        projectile3.setKind(SpriteKind.Food)
    }
})
game.onUpdateInterval(5000, function () {
    if (info.score() <= 200) {
        projectile3 = sprites.createProjectileFromSide(img`
. . . . e e e e e e e . . . . . 
. . e e e e e d e e e e e . . . 
. e e d e d e e e e e e e e . . 
. e e e e e d e e e e e e e . . 
e e e e e e e e e e e e e e e . 
e e 9 e e e 9 e e d e 9 e e e 9 
e d 9 9 e e 9 d d d 9 d e e e . 
e e e 9 e e e e e 9 e e 9 e e . 
. e e 9 e 9 e 9 9 e e 9 9 e . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(-20, -200), 0)
        projectile3.setPosition(163, 57)
        projectile3.setKind(SpriteKind.Food)
    }
})
game.onUpdateInterval(5000, function () {
	
})
game.onUpdateInterval(3005, function () {
    if (info.score() <= 200) {
        projectile3 = sprites.createProjectileFromSide(img`
. . . . e e e e e e e . . . . . 
. . e e e e e d e e e e e . . . 
. e e d e d e e e e e e e e . . 
. e e e e e d e e e e e e e . . 
e e e e e e e e e e e e e e e . 
e e 9 e e e 9 e e d e 9 e e e 9 
e d 9 9 e e 9 d d d 9 d e e e . 
e e e 9 e e e e e 9 e e 9 e e . 
. e e 9 e 9 e 9 9 e e 9 9 e . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(-20, -200), 0)
        projectile3.setPosition(159, 93)
        projectile3.setKind(SpriteKind.Food)
    }
})
game.onUpdateInterval(1000, function () {
    if (info.player2.score() <= 1000) {
        electricity = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 5 5 . . . . . . . . . . . . . . . . . 
. . . . . . 5 5 5 . . . . . . . 5 5 . . . . . . . . 
. . . . . . 5 5 5 . . . . . . . 5 5 . . . . . . . . 
. . . . 5 5 5 5 5 5 . . . . . 5 5 5 5 . . . . . . . 
. . . 5 5 5 5 5 5 5 5 . . . 5 5 5 5 5 . . . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 . 5 5 5 5 5 5 5 . . . . . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . . . . 5 5 5 5 5 . . . . . . . . . 5 5 5 5 5 . . 
. . . . . . 5 5 5 . . . . . . . . . . . 5 5 5 5 . . 
. . . . . . 5 5 . . . . . . . . . . . . . 5 5 . . . 
. . . . . . . 5 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`, boss_guy, -100, 0)
        electricity.setKind(SpriteKind.Food)
    }
    amm += 1
})
