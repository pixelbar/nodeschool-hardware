import { pins } from "@dsboard/seeed_xiao_esp32c3";
import { startButton, startLightBulb } from "@devicescript/servers";

// Start button servers on pins D0 up until D3
const button1 = startButton({ pin: pins.A0_D0 });
const button2 = startButton({ pin: pins.A1_D1 });
const button3 = startButton({ pin: pins.A2_D2 });
const button4 = startButton({ pin: pins.A3_D3 });

// Start LED servers on pins D10 up until D7
const led1 = startLightBulb({ pin: pins.MOSI_D10 });
const led2 = startLightBulb({ pin: pins.MISO_D9 });
const led3 = startLightBulb({ pin: pins.SCK_D8 });
const led4 = startLightBulb({ pin: pins.RX_D7 });

button1.down.subscribe(async () => {
  await led1.toggle();
});

button2.down.subscribe(async () => {
  await led2.toggle();
});

button3.down.subscribe(async () => {
  await led3.toggle();
});

button4.down.subscribe(async () => {
  await led4.toggle();
});
