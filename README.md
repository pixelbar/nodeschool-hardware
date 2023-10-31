# NodeSchool Rotterdam

[![](media/title.png)](https://www.meetup.com/nodeschool-rotterdam/events/296236108/)

_This information is for the workshop given on Oct. 31st at [Pixelbar](https://pixelbar.nl), The Netherlands._

[👀 Prerequisites](#rerequisites) •
[📚 Getting started](#getting-started) •
[⚡️ Connecting the microcontroller to your computer](#rerequisites) •
[👨‍💻 Run code](#rerequisites)

## 👀 Prerequisites

- Microcontroller: Seeed Studio XIAO ESP32C3
- Components: breadboard, wires, LEDs, buttons, and PIM board
- USB-C cable to connect microcontroller to your computer
- A computer
- Basic JavaScript knowledge: [JS for cats](http://jsforcats.com/)

## 📚 Getting started

1. [Install Node.js](https://nodejs.org/en/download) (v18 recommended, check by running `node -v` in your terminal)
2. Install [Visual Studio Code](https://code.visualstudio.com)
3. Install [DeviceScript](https://marketplace.visualstudio.com/items?itemName=devicescript.devicescript-vscode) extension for Visual Studio Code
4. Clone or download this project
   - Download: https://github.com/pixelbar/nodeschool-hardware/archive/refs/heads/main.zip
   - Clone: `git clone https://github.com/pixelbar/nodeschool-hardware.git`
5. Open the cloned directory in Visual Studio Code
6. Install dependencies
   - Run in terminal: `npm install`

## 🚀 Connecting the microcontroller to your computer

1. Connect the microcontroller to your computer using a USB-C cable
2. Open Visual Studio Code, make sure you have the DeviceScript extension installed
3. Open the DeviceScript panel (1)
4. Click on "Connect Device" (2)
5. A prompt will appear, select "Serial" (3)
6. The device should now appear in the panel

![Connect to a device](media/connect-device.png)

![Device successfully connected](media/device-overview.png)

## 👨‍💻 Run code

To run your code on the microcontroller, first follow the connection steps above, then open `src/main.ts` and press the run button in the upper-right corner.

1. Follow the steps for connecting the microcontroller above.
2. Open `src/main.ts`
3. Press the run button in the upper-right corner (1)
4. A panel should appear on the bottom or right side of the screen (2). The panel shows the output of your code (e.g., any `console.log`s in your code).
5. VS Code may prompt to start the DeviceScript simulator. You can press "Don't show again". If you're interested in simulation, learn more [here](https://microsoft.github.io/devicescript/developer/simulation).
6. To stop the output, disconnect the device, or press `Ctrl+C` in the output panel (2)

![](media/run-code.png)

## ⚡️ Flashing the microcontroller

The microcontroller comes pre-flashed with the DeviceScript firmware. An update to DeviceScript might require you to re-flash the microcontroller.

1. Connect the microcontroller to your computer using a USB-C cable
2. Open the [Command Palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette) (`Command+Shift+P` on Mac, `Ctrl+Shift+P` on Windows and Linux) and enter "flash".

![](media/flash.png)

1. Select `DeviceScript: Flash Firmware...`
2. You'll be prompted to select a device, search for "seeed studio" and select `Seeed Studio XIAO ESP32C3`

![](media/flash-2.png)

3. A command prompt should appear on the bottom or the side of your editor, wait until it says "flash OK". You can now reconnect to the device.

![](media/flash-success.png)

If you're experiencing any problems you can try to clean the flash, follow steps 1 and 2, and select `DeviceScript: Clean Flash...`.

## Project 1: Blinky

![](media/blinky.jpeg)

For the first project we'll create what is known as the "hello world" for hardware, we'll make an LED blink!

![](media/lesson_1.png)

Connect the components according to the schematic displayed above.

You can find the code for this project in `src/blinky.ts`. To run the code, replace the contents of `src/main.ts` with `import "./blinky";`. Play around with the code, e.g., change the interval in which the LED blinks up.

## Project 2: Input

![](media/input.jpeg)

We'll now use a button to make the LED light up.

![](media/lesson_2.png)

You can find the code for this project in `src/blinky.ts`. To run the code, replace the contents of `src/main.ts` with `import "./input";`. Play around with the code, e.g., dim the LED on a button press (tip: add `dimmable: true` to `startLightBulb`).

## Project 3: PIM

![PIM board connected to ESP32](media/pim.jpeg)

Now let's connect PIM. PIM is a custom designed PCB - which means you don't need a breadboard anymore. It contains 4 buttons and 4 LEDs. You can find the code for this project in `src/pim.ts`. To run the code, replace the contents of `src/main.ts` with `import "./pim";`.

The provided example demonstrates the basic functionality of toggling an LED on or off in response to a button press.

Experiment with the code, e.g., make the LEDs blink up in some sequence.

## Project 4: it's your turn!

Now it's your turn to play around with the hardware and software! You can extend any of the above projects, or create something new. Here are some ideas:

- Create a digital dice roller with the PIM.
- Create a reaction time game where a random LED serves as the target. You can even post the reaction times to a server to create a high-score list!
- Create Simon Says.
- Create a temperature sensor that publishes to MQTT. A temperature sensor (SHT30) is provided! You can follow this guide: https://microsoft.github.io/devicescript/samples/temperature-mqtt. Note: you'll have to make some adjustments for the hardware provided. MQTT is a protocol specifically designed to send and receive small messages, especially dealing with IoT devices. You can use the [MQTT Explorer](http://mqtt-explorer.com/) to inspect the messages being sent.

Refer to the pinout diagram below when connecting components.

![Seeed Studio XIAO ESP32C3 pinout reference](media/esp.png)