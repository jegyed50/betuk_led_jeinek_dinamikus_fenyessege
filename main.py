currentledbrihtness = 0
led.set_brightness(100)
led.set_display_mode(DisplayMode.GREYSCALE)
basic.show_string("W")

def on_in_background():
    global currentledbrihtness
    while True:
        for x in range(5):
            for y in range(5):
                currentledbrihtness = led.point_brightness(x, y)
                if currentledbrihtness > 10:
                    for valtozofenyesseg in range(26):
                        led.plot_brightness(x, y, currentledbrihtness - valtozofenyesseg * 10)
                        basic.pause(valtozofenyesseg * 2)
                    led.plot_brightness(x, y, 255)
                    for valtozofenyesseg2 in range(26):
                        led.plot_brightness(x, y, currentledbrihtness - valtozofenyesseg2 * 10)
                        basic.pause(valtozofenyesseg2 * 2)
                    led.plot_brightness(x, y, currentledbrihtness)
                else:
                    currentledbrihtness = 124
                    for valtozofenyesseg3 in range(26):
                        led.plot_brightness(x, y, currentledbrihtness - valtozofenyesseg3 * 10)
                        basic.pause(valtozofenyesseg3 * 2)
                    for valtozofenyesseg4 in range(26):
                        led.plot_brightness(x, y, currentledbrihtness - valtozofenyesseg4 * 1)
                        basic.pause(valtozofenyesseg4 * 2)
                    led.plot_brightness(x, y, 0)
control.in_background(on_in_background)
