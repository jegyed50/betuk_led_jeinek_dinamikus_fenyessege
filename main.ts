let currentledbrihtness = 0
led.setBrightness(150)
led.setDisplayMode(DisplayMode.Greyscale)
basic.showString("T")
control.inBackground(function () {
    while (true) {
        for (let x = 0; x <= 4; x++) {
            for (let y = 0; y <= 4; y++) {
                currentledbrihtness = led.pointBrightness(x, y)
                if (currentledbrihtness > 0) {
                    for (let valtozofenyesseg = 0; valtozofenyesseg <= 25; valtozofenyesseg++) {
                        led.plotBrightness(x, y, currentledbrihtness - valtozofenyesseg * 10)
                        basic.pause(valtozofenyesseg * 2)
                    }
                    led.plotBrightness(x, y, 255)
                    for (let valtozofenyesseg = 0; valtozofenyesseg <= 25; valtozofenyesseg++) {
                        led.plotBrightness(x, y, currentledbrihtness - 0 * 10)
                        basic.pause(valtozofenyesseg * 2)
                    }
                    led.plotBrightness(x, y, currentledbrihtness)
                } else {
                    currentledbrihtness = 124
                    for (let valtozofenyesseg = 0; valtozofenyesseg <= 25; valtozofenyesseg++) {
                        led.plotBrightness(x, y, currentledbrihtness - valtozofenyesseg * 10)
                        basic.pause(valtozofenyesseg * 2)
                    }
                    led.plotBrightness(x, y, 0)
                }
            }
        }
    }
})
