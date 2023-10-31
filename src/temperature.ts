import { configureHardware } from "@devicescript/servers";
import { startSHT30 } from "@devicescript/drivers";
import { pins } from "@dsboard/seeed_xiao_esp32c3";

configureHardware({
  i2c: {
    pinSCL: pins.SCL_D5,
    pinSDA: pins.SDA_D4,
  },
});

const sht = await startSHT30();

sht.temperature.reading.subscribe(async (value) => {
  console.log(value);
});
