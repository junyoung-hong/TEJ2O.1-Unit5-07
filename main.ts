/* Copyright (c) 2026 MTHS All rights reserved
 *
 * Created by: Junyoung
 * Created on: April 1ST!!!!!
 * This program check the distance between objects and choose what motors do
*/

// variables
let go: number = 0 

// set up
basic.clearScreen()
basic.showIcon(IconNames.Happy)
robotbit.StpCarMove(0, 48)

// when the "A" button is clicked
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.Yes)
    go = 1 

    // repeat go
    while (go == 1) {
        const distance = sonar.ping(
            DigitalPin.P1,
            DigitalPin.P2,
            PingUnit.Centimeters
        )

        if (distance > 0 && distance <= 10) {
            robotbit.StpCarMove(0, 48)
            basic.showIcon(IconNames.No)
            robotbit.StpCarMove(-10, 48)
            basic.pause(1000)
            robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B4)
            basic.pause(500)
            basic.showIcon(IconNames.Yes)
        } else {
            robotbit.StpCarMove(1, 48)
        }
        basic.pause(50)
    }
})

// when the "B" button is clicked
input.onButtonPressed(Button.B, function () {
    go = 0 
    robotbit.StpCarMove(0, 48)
    basic.showIcon(IconNames.Happy)
})