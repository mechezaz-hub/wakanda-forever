def on_overlap_tile(sprite3, location2):
    game.game_over(True)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        baseTransparency16
        """),
    on_overlap_tile)

def on_on_score():
    NAMOR.set_position(70, 47)
    NAMOR.say_text("OWIE! YOU KILLED ME! OK, OK, I GIVE UP! YOU ALL WIN!",
        5000,
        True)
    scene.set_background_image(assets.image("""
        boston-bridge
        """))
    effects.smiles.start_screen_effect()
info.on_score(300, on_on_score)

def on_on_overlap(sprite, otherSprite):
    info.change_score_by(25)
    NAMOR.set_position(148, 2)
sprites.on_overlap(SpriteKind.guard, SpriteKind.enemy, on_on_overlap)

def on_on_overlap2(sprite4, otherSprite2):
    scene.camera_shake(20, 5000)
    shuri.say_text("OW! You Pierced Me!", 2000, True)
    info.change_life_by(-5)
    NAMOR.set_position(148, 2)
    pause(2000)
    for index in range(7000):
        info.change_life_by(5)
        pause(100)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap2)

def on_overlap_tile2(sprite2, location):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.hazard_lava1,
    on_overlap_tile2)

NAMOR: Sprite = None
shuri: Sprite = None
info.set_score(0)
info.set_life(7000)
scene.set_background_image(assets.image("""
    wakanda
    """))
tiles.set_current_tilemap(tilemap("""
    level2
    """))
scene.camera_follow_sprite(shuri)
game.show_long_text("When game begins, press the ARROW KEYS to move Shuri, Okoye and Riri. If Namor catches you, you will lose points! ",
    DialogLayout.FULL)
shuri = sprites.create(assets.image("""
    shuri
    """), SpriteKind.player)
controller.move_sprite(shuri)
shuri.set_stay_in_screen(True)
NAMOR = sprites.create(assets.image("""
    namor
    """), SpriteKind.enemy)
NAMOR.set_position(148, 2)
NAMOR.follow(shuri, 30.5)
Riri = sprites.create(assets.image("""
    riri
    """), SpriteKind.guard)
scene.camera_follow_sprite(Riri)
Riri.set_stay_in_screen(True)
controller.move_sprite(Riri, 34, -53)
Okoye = sprites.create(assets.image("""
    okoye
    """), SpriteKind.guard)
scene.camera_follow_sprite(Okoye)
Okoye.set_stay_in_screen(True)
controller.move_sprite(Okoye, -68, -58)