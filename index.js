const config = require("./config")
const clc = require("cli-color")
const Gpio = require("onoff").Gpio
const led = new Gpio(config.gpio.ledPin,"out")
led.write(config.led.on, ()=>{
	console.log(`charge ${clc.red("LED")} state to:`, config.led.on)
})