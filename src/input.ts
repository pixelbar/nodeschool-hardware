// based on: https://microsoft.github.io/devicescript/samples/button-led

// Import pin definitions for the microcontroller that we're using
import { pins } from "@dsboard/seeed_xiao_esp32c3";
import { startLightBulb, startButton } from "@devicescript/servers";

const led = startLightBulb({
  pin: pins.SCL_D5,
});

const button = startButton({
  pin: pins.MOSI_D10,
});

// Toggle LED on button press
button.down.subscribe(async () => {
  await led.toggle();
});
