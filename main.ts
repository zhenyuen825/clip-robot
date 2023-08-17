basic.forever(function () {
    basic.showIcon(IconNames.Angry)
    SuperBit.Servo2(SuperBit.enServo.S1, 0)
    basic.pause(200)
    SuperBit.Servo2(SuperBit.enServo.S1, 100)
    basic.pause(200)
})
