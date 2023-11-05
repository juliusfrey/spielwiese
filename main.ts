basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.setLedColor(0xff0000)
        music.playMelody("C5 B A G F E D C ", 120)
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Half))
        basic.setLedColor(0x000000)
    }
})
