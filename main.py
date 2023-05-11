led.set_brightness(15)
led.set_display_mode(DisplayMode.GREYSCALE)
basic.show_string("W")



def on_in_background2():
    for x in range(5):
        for y in range(5):
            if led.point_brightness(x, y) > 10:
                for valtozofenyesseg in range(26):
                    led.plot_brightness(x, y, valtozofenyesseg * 10)
                led.plot(x, y)
            else:
                pass
control.in_background(on_in_background2)
