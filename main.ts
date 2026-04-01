/* Copyright (c) 2026 MTHS All rights reserved
 *
 * Created by: Junyoung
 * Created on: April 1ST!!!!!
 * This program check the distance between objects and choose what motors do
*/
//variables
let distanceObject : number = 0

// setup
basic.showIcon(IconNames.Happy)
distanceObject = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.MicroSeconds)

// loop forever
while (true) {
    if (input.buttonIsPressed(Button.A) == true) {
        // turn the motor 180 degrees
        basic.showIcon(IconNames.Yes)
        robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B0)
        robotbit.StepperTurn(robotbit.Steppers.M2, robotbit.Turns.T1B0)
        basic.showIcon(IconNames.Happy)
    }

    if (input.buttonIsPressed(Button.B) == true) {
        // move car forwards and backwards
        basic.showIcon(IconNames.Yes)
        robotbit.StpCarMove(10, 48)
        basic.pause(500)
        robotbit.StpCarMove(-10, 48)
        basic.showIcon(IconNames.Happy)
    }
}
