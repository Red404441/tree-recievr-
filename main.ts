// Set the same radio group for communication
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Tree Fallen") {
        basic.showString("Alert: Tree Fallen")
        // Play a higher sound (C note) to alert
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
})
// Set the same radio group for communication
radio.setGroup(1)
