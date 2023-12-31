// based on: https://microsoft.github.io/devicescript/samples/button-led

// Import pin definitions for the microcontroller that we're using
import { pins } from "@dsboard/seeed_xiao_esp32c3";
import { startLightBulb } from "@devicescript/servers";

const led = startLightBulb({
  pin: pins.SCL_D5,
});

// Toggle the LED every second
setInterval(async () => {
  await led.toggle();
}, 1000);
