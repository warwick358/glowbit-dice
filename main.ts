input.onButtonPressed(Button.A, function () {
    die1.clear()
    die1value = randint(0, 5)
    for (let index = 0; index <= 5; index++) {
        if (index <= die1value) {
            die1.setPixelColor(index, neopixel.colors(NeoPixelColors.Indigo))
        }
    }
    die1.show()
})
input.onButtonPressed(Button.B, function () {
    // Include a "scramble" function for added suspense!
    for (let index2 = 0; index2 <= 20; index2++) {
        die2.clear()
        die2value = randint(0, 5)
        for (let index3 = 0; index3 <= 5; index3++) {
            if (index3 >= die2value) {
                die2.setPixelColor(index3, neopixel.colors(NeoPixelColors.Orange))
            }
        }
        die2.show()
        basic.pause(50)
    }
})
let die2value = 0
let die1value = 0
let die2: neopixel.Strip = null
let die1: neopixel.Strip = null
let strip = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)
die1 = strip.range(0, 6)
die2 = strip.range(7, 6)
strip.setBrightness(25)
basic.forever(function () {
	
})
