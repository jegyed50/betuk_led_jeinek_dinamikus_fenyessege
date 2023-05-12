// Funcion call: ejscreensaver(n1,n2).
// The function calls insert to "run in bacground" block.
function ej_screensaver (switch_off_LED_max_brightness: number, fade_delay: number) {
    while (true) {
        for (let x = 0; x <= 4; x++) {
            for (let y = 0; y <= 4; y++) {
                currentledbrightness = led.pointBrightness(x, y)
                if (currentledbrightness > 0) {
                    for (let valtozofenyesseg = 0; valtozofenyesseg <= 25; valtozofenyesseg++) {
                        led.plotBrightness(x, y, currentledbrightness - valtozofenyesseg * 10)
                        basic.pause(valtozofenyesseg * fade_delay)
                    }
                    led.plotBrightness(x, y, 255)
                    for (let valtozofenyesseg = 0; valtozofenyesseg <= 25; valtozofenyesseg++) {
                        led.plotBrightness(x, y, currentledbrightness - 0 * 10)
                        basic.pause(valtozofenyesseg * fade_delay)
                    }
                    led.plotBrightness(x, y, currentledbrightness)
                } else {
                    for (let valtozofenyesseg = 0; valtozofenyesseg <= switch_off_LED_max_brightness / 25; valtozofenyesseg++) {
                        led.plotBrightness(x, y, valtozofenyesseg * 25)
                        basic.pause(valtozofenyesseg * fade_delay * 10)
                    }
                    led.plotBrightness(x, y, 0)
                    basic.pause(fade_delay * 100)
                }
            }
        }
    }
}
let currentledbrightness = 0
led.setBrightness(150)
led.setDisplayMode(DisplayMode.Greyscale)
basic.showString("T")
control.inBackground(function () {
    ej_screensaver(255, 3)
})
