let pot1 = 0
let pot2 = 0
let angle1 = 0
let angle2 = 0
input.onButtonPressed(Button.A, function () {
    robotbit.StpCarMove(10, 48)
    robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B4)
})
input.onButtonPressed(Button.B, function () {
    robotbit.StpCarMove(-10, 48)
    robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B4)
})
basic.forever(function () {
    // Read potentiometers (0–1023)
    pot1 = pins.analogReadPin(AnalogPin.P1)
    pot2 = pins.analogReadPin(AnalogPin.P2)
    // Map to servo angles (0–180)
    angle1 = Math.map(pot1, 0, 1023, 0, 180)
    angle2 = Math.map(pot2, 0, 1023, 0, 180)
    // Move servos
    robotbit.Servo(robotbit.Servos.S1, angle1)
    robotbit.Servo(robotbit.Servos.S2, angle2)
    basic.pause(20)
})
