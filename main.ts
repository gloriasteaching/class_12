game.setDialogCursor(img`
    . . . . . . . b b . . . . . . . 
    . . . . . . b d d b . . . . . . 
    . . . . . b d 5 5 d b . . . . . 
    . . . . b b 5 5 5 5 b b . . . . 
    . . . . b 5 5 5 5 5 5 b . . . . 
    b b b b b 5 5 5 5 1 1 d b b b b 
    b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b 
    b d d 5 5 5 5 5 5 1 1 1 5 d d b 
    . b d d 5 5 5 5 5 5 5 5 d d b . 
    . . b b 5 5 5 5 5 5 5 5 b b . . 
    . . c b 5 5 5 5 5 5 5 5 b c . . 
    . . c 5 5 5 5 d d 5 5 5 5 c . . 
    . . c 5 5 d b b b b d 5 5 c . . 
    . . c 5 d b c c c c b d 5 c . . 
    . . c c c c . . . . c c c c . . 
    . . . . . . . . . . . . . . . . 
    `)
game.setDialogFrame(img`
    3 3 3 3 3 9 9 9 9 9 3 3 3 3 3 
    3 . . . 3 9 . . . 9 3 . . . 3 
    3 . . . 3 9 . . . 9 3 . . . 3 
    3 . . . 3 9 . . . 9 3 . . . 3 
    3 3 3 3 3 9 9 9 9 9 3 3 3 3 3 
    9 9 9 9 9 3 3 3 3 3 9 9 9 9 9 
    9 . . . 9 3 3 3 3 3 9 . . . 9 
    9 . . . 9 3 3 3 3 3 9 . . . 9 
    9 . . . 9 3 3 3 3 3 9 . . . 9 
    9 9 9 9 9 3 3 3 3 3 9 9 9 9 9 
    3 3 3 3 3 9 9 9 9 9 3 3 3 3 3 
    3 . . . 3 9 . . . 9 3 . . . 3 
    3 . . . 3 9 . . . 9 3 . . . 3 
    3 . . . 3 9 . . . 9 3 . . . 3 
    3 3 3 3 3 9 9 9 9 9 3 3 3 3 3 
    `)
game.showLongText("What R U waiting for?", DialogLayout.Bottom)
music.playMelody("C5 B A G F E D C ", 120)
