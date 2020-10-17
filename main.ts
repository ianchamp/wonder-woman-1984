scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    music.magicWand.play()
    tiles.setTileAt(location, myTiles.transparency16)
    info.changeScoreBy(1)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f 5 f f . . . . . . 
    . . . . f f 5 2 5 f f . . . . . 
    . . . f f 2 2 2 2 2 f f . . . . 
    . . . f f d d d d d f f . . . . 
    . . . f f d e d e d f f . . . . 
    . . f f f d d d d d f f f . . . 
    . f f f f f d d d f f f f f . . 
    . f f f f d 2 2 2 d f f f f . . 
    . . . . f 5 2 5 2 5 f . . . . . 
    . . . . . d 8 8 8 d . . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . . d . d . . . . . . . 
    . . . . . . 2 . 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.setBackgroundColor(7)
tiles.setTilemap(tiles.createTilemap(hex`1e001e00010101010101010101010101010101010101010101010101010101010101010000000000040000000000000000010000040000000000000400000001010000010101010101010101010100010001010101010101010101010001010001010101010100000400000000010001000000000000040000000001010001000000000000010101010101010001000101010101010101010101010001000101010101010100000000000001000400000000000000000001010401000104000101000000040101010101010101010101010101010001010001000100000000000101000101010101010101000000000400000001010001000000010101010101000100000004000000000001010101010101010001010001010101010100000000010101010101010101000000000001010001010001010100000004010101000000000000040000000101010001010001010001010000010101000400000101010101010101010101040001010401010401010001010000000101010101010101010101000000000101010001010001010001000001010101010101010101010100000101010101010001010001010401000101010100000000000400000000010400000001010001010301010001040101010000010101010101010101010100010001010001010101010001000101010001010400000100040000000100010001010000000001010001000101000001000001000100010100000100010001010001010001010001000101040101000101000100010100000100010001010001010400000001000101000101000101000100000101000100010401010001010001010101000101000101000101000101000001000000010001010001000001010101000101000001000101040001010401010000010001010001000101010101000001010000000101010001010001010104010001010001000101010101010001010101000401000101010000000101010001010001000401010101010000000101010101000101010101000101010001010401010000000000000101000000010101000004000101000000010001010001010101010101000000000400010101010101000000000002010001010001010101010101010101010101010101010101010101010101010401010000000000040000000000000000000000000004000000000000000001010101010101010101010101010101010101010101010101010101010101`, img`
    222222222222222222222222222222
    2..............2.............2
    2..22222222222.2.22222222222.2
    2.222222.......2.2...........2
    2.2......2222222.2.22222222222
    2.2.2222222......2...........2
    2.2.2..22....222222222222222.2
    2.2.2.....22.22222222........2
    2.2...222222.2.........2222222
    2.22.222222....222222222.....2
    2.22.222....222..........222.2
    2.22.22..222....22222222222..2
    2.22.22.22...22222222222....22
    2.22.22.2..222222222222..22222
    2.22.22.2.2222..........2....2
    2.22.22.2.222..22222222222.2.2
    2.22222.2.222.22...2.....2.2.2
    2....22.2.22..2..2.2.22..2.2.2
    2.22.22.2.22.22.22.2.22..2.2.2
    2.22....2.22.22.22.2..22.2.2.2
    2.22.2222.22.22.22.22..2...2.2
    2.2..2222.22..2.22..22.22..2.2
    2.2.22222..22...222.22.222.2.2
    2.2.222222.2222..2.222...222.2
    2.2..22222...22222.22222.222.2
    2.22......22...222....22...2.2
    2.2222222......222222......2.2
    2.22222222222222222222222222.2
    2............................2
    222222222222222222222222222222
    `, [myTiles.transparency16,sprites.dungeon.floorLight0,myTiles.tile1,myTiles.tile2,myTiles.tile3], TileScale.Sixteen))
tiles.placeOnRandomTile(mySprite, myTiles.tile1)
scene.cameraFollowSprite(mySprite)
info.setScore(0)
info.startCountdown(120)
