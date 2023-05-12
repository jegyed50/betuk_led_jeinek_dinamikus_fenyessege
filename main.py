def ej_screensaver(switch_off_LED_max_brightness: number, fade_delay: number):
    global currentledbrihtness
    while True:
        for x in range(5):
            for y in range(5):
                currentledbrihtness = led.point_brightness(x, y)
                if currentledbrihtness > 0:
                    for valtozofenyesseg in range(26):
                        led.plot_brightness(x, y, currentledbrihtness - valtozofenyesseg * 10)
                        basic.pause(valtozofenyesseg * 2)
                    led.plot_brightness(x, y, 255)
                    for valtozofenyesseg2 in range(26):
                        led.plot_brightness(x, y, currentledbrihtness - 0 * 10)
                        basic.pause(valtozofenyesseg2 * 2)
                    led.plot_brightness(x, y, currentledbrihtness)
                else:
                    pass
currentledbrihtness = 0
led.set_brightness(150)
led.set_display_mode(DisplayMode.GREYSCALE)
basic.show_string("T")

def on_in_background():
    ej_screensaver(255, 10)
control.in_background(on_in_background)
