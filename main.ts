input.onButtonPressed(Button.AB, function () {
    παύση = 400
})
input.onButtonPressed(Button.A, function () {
    παύση = παύση - 50
})
input.onButtonPressed(Button.B, function () {
    παύση = παύση + 50
})
let παύση = 0
παύση = 400
basic.forever(function () {
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.On)
    for (let δείκτη = 0; δείκτη <= 4; δείκτη++) {
        led.toggle(0, δείκτη)
        basic.pause(παύση)
    }
    for (let δείκτη = 0; δείκτη <= 4; δείκτη++) {
        led.toggle(1, δείκτη)
        basic.pause(παύση)
    }
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.On)
    for (let δείκτη = 0; δείκτη <= 4; δείκτη++) {
        led.toggle(2, δείκτη)
        basic.pause(παύση)
    }
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
    for (let δείκτη = 0; δείκτη <= 4; δείκτη++) {
        led.toggle(3, δείκτη)
        basic.pause(παύση)
    }
    for (let δείκτη = 0; δείκτη <= 4; δείκτη++) {
        led.toggle(4, δείκτη)
        basic.pause(παύση)
    }
})
