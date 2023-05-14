// Funcion call: ej_screensaver(n1,n2).
// The function calls insert to "run in bacground" block.
function ej_screensaver (switch_off_LED_max_brightness: number, fade_delay: number) {
    let valtozofenyesseg3: number;
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
                    for (let valtozofenyesseg2 = 0; valtozofenyesseg2 <= 25; valtozofenyesseg2++) {
                        led.plotBrightness(x, y, currentledbrightness - 0 * 10)
                        basic.pause(valtozofenyesseg2 * fade_delay)
                    }
                    led.plotBrightness(x, y, currentledbrightness)
                } else {
                    valtozofenyesseg3 = 0
                    while (valtozofenyesseg3 <= switch_off_LED_max_brightness / 25) {
                        led.plotBrightness(x, y, valtozofenyesseg3 * 25)
                        basic.pause(valtozofenyesseg3 * fade_delay * 10)
                        valtozofenyesseg3 += 1
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
