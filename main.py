# Funcion call: ej_screensaver(n1,n2).
# The function calls insert to "run in bacground" block.
def ej_screensaver(switch_off_LED_max_brightness: number, fade_delay: number):
    global currentledbrightness
    while True:
        for x in range(5):
            for y in range(5):
                currentledbrightness = led.point_brightness(x, y)
                if currentledbrightness > 0:
                    for valtozofenyesseg in range(26):
                        led.plot_brightness(x, y, currentledbrightness - valtozofenyesseg * 10)
                        basic.pause(valtozofenyesseg * fade_delay)
                    led.plot_brightness(x, y, 255)
                    for valtozofenyesseg2 in range(26):
                        led.plot_brightness(x, y, currentledbrightness - 0 * 10)
                        basic.pause(valtozofenyesseg2 * fade_delay)
                    led.plot_brightness(x, y, currentledbrightness)
                else:
                    valtozofenyesseg3 = 0
                    while valtozofenyesseg3 <= switch_off_LED_max_brightness / 25:
                        led.plot_brightness(x, y, valtozofenyesseg3 * 25)
                        basic.pause(valtozofenyesseg3 * fade_delay * 10)
                        valtozofenyesseg3 += 1
                    led.plot_brightness(x, y, 0)
                    basic.pause(fade_delay * 100)
currentledbrightness = 0
led.set_brightness(150)
led.set_display_mode(DisplayMode.GREYSCALE)
basic.show_string("T")

def on_in_background():
    ej_screensaver(255, 3)
control.in_background(on_in_background)
