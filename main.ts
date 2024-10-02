let reciclable = 0
basic.showLeds(`
    . . # . .
    . # . # .
    . . . . .
    # . . . #
    # # . # #
    `)
basic.forever(function () {
    if (GHBit.Ultrasonic_Handle() <= 5) {
        reciclable += 1
        basic.showNumber(reciclable)
        basic.pause(500)
    }
    if (GHBit.Button(GHBit.enButton.B1, GHBit.enButtonState.Press)) {
        reciclable = 0
        basic.showNumber(reciclable)
        basic.pause(500)
        basic.showLeds(`
            . . # . .
            . # . # .
            . . . . .
            # . . . #
            # # . # #
            `)
    }
})
