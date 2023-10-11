// based on: https://microsoft.github.io/devicescript/samples/button-led

// Import pins for the specific microcontroller that we're using
import { pins } from "@dsboard/seeed_xiao_esp32c3";
import { startLightBulb } from "@devicescript/servers";

// List of pins: https://microsoft.github.io/devicescript/devices/esp32/seeed-xiao-esp32c3
const led = startLightBulb({
  pin: pins.MOSI_D10,
});

// Toggle the LED every second
setInterval(async () => {
  await led.toggle();
}, 1000);
