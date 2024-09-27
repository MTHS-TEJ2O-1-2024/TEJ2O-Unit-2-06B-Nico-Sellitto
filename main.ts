/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Nico Sellitto
 * Created on: Sep 2024
 * This program turns an LED on and off
*/


basic.clearScreen()
pins.digitalWritePin(DigitalPin.P16, 16)
basic.showIcon(IconNames.Happy)

// turns light on
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P16, 1)
})
// turns light off
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P16, 0)
})