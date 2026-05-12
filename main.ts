scene.onOverlapTile(SpriteKind.Player, assets.tile`
        baseTransparency16
        `, function on_overlap_tile(sprite3: Sprite, location2: tiles.Location) {
    game.gameOver(true)
})
info.onScore(300, function on_on_score() {
    NAMOR.setPosition(70, 47)
    NAMOR.sayText("OWIE! YOU KILLED ME! OK, OK, I GIVE UP! YOU ALL WIN!", 5000, true)
    scene.setBackgroundImage(assets.image`
        boston-bridge
        `)
    effects.smiles.startScreenEffect()
})
sprites.onOverlap(SpriteKind.Guard, SpriteKind.Enemy, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    info.changeScoreBy(25)
    NAMOR.setPosition(148, 2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_on_overlap2(sprite4: Sprite, otherSprite2: Sprite) {
    scene.cameraShake(20, 5000)
    shuri.sayText("OW! You Pierced Me!", 2000, true)
    info.changeLifeBy(-5)
    NAMOR.setPosition(148, 2)
    pause(2000)
    for (let index = 0; index < 7000; index++) {
        info.changeLifeBy(5)
        pause(100)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function on_overlap_tile2(sprite2: Sprite, location: tiles.Location) {
    game.gameOver(false)
})
let NAMOR : Sprite = null
let shuri : Sprite = null
info.setLife(7000)
scene.setBackgroundImage(assets.image`
    wakanda
    `)
tiles.setCurrentTilemap(tilemap`
    level2
    `)
scene.cameraFollowSprite(shuri)
game.showLongText("When game begins, press the ARROW KEYS to move Shuri, Okoye and Riri. If Namor catches you, you will lose points! ", DialogLayout.Full)
shuri = sprites.create(assets.image`
    shuri
    `, SpriteKind.Player)
controller.moveSprite(shuri)
shuri.setStayInScreen(true)
NAMOR = sprites.create(assets.image`
    namor
    `, SpriteKind.Enemy)
NAMOR.setPosition(148, 2)
NAMOR.follow(shuri, 30.5)
let Riri = sprites.create(assets.image`
    riri
    `, SpriteKind.Guard)
scene.cameraFollowSprite(Riri)
Riri.setStayInScreen(true)
controller.moveSprite(Riri, 34, -53)
let Okoye = sprites.create(assets.image`
    okoye
    `, SpriteKind.Guard)
scene.cameraFollowSprite(Okoye)
Okoye.setStayInScreen(true)
controller.moveSprite(Okoye, -68, -58)
