import React from "react";
import "../App.css";

export const OldProjects = () => {
  return (
    <div>
      <h1>Old Projects</h1>
      <div className="text">
        <p>
          <br />
          <h3>Apprenticeship to become a media designer</h3>
          <br />
          I started programming some websites with an Adobe package on an iMac
          with the company I went to for the apprenticeship to become a media
          designer or a web designer. During this time I had had a training in
          an external working place and I had made a website with a CMS – maybe
          it was TYPO3 or Drupal. But after a year of apprenticeship I had had
          to stop before I could start my apprenticeship to become an IT
          assistant.
          <br />
        </p>
        <p>
          <br />
          <h3>Apprenticeship to become an IT assistant</h3>
          <br />
          Later on I finished my apprenticeship to become an IT assistant or an
          IT specialist successfully with the final practical exam part.
          Therefore I had had to program a website or a web interface – for the
          company where I went to for my apprenticeship – to check the content
          of each first aid kit and to list the missing articles of each first
          aid kit – written in PHP and the components of PHP's frameworks such
          as XAMPP – the Apache webserver written in PHP, MySQL for the
          database, Perl and Python and more. I finished this practical part of
          my graduation exam successfully and now I am an IT assistant or an IT
          specialist.
          <br />
        </p>
        <p>
          <br />
          <h3>Work Experience at one of my parents' friends</h3>
          <br />
          I programmed a web interface for data migration with XAMPP including a
          MYSQL-database. The paths for the data migration were entries of the
          different tables – you can recognize them with the IDs of the tables
          which belong to the MYSQL-database. For encoding the paths I had had
          to use one of these operators such as OR, XOR, NOR, NOT, AND, NAND and
          I used the PHP-method base64. I wrote a function/method which
          implements another pre-built function/method to encrypt the encoded
          stuff with “3DES-128-GCM” as a variable/as a parameter with the type
          of a string.
          <br />
          I also programmed a sensor for temperature, humidity and CO with the
          application Home Assistant on-premises. Therefore I had had to learn
          the language YAML/YML. I realized that learning YAML has some
          similarities with XML.
          <br />
          If you want to code a microcontroller like an ESP8266 or an ESP32,
          then you have to write some following code – in this example the
          ESP8266 microcontroller has the name livingroom to make a living room
          smart:
          <br />
          <br />
          <pre>
            <code>
              esphome:
              <br />
              name: livingroom
              <br />
              platform: ESP8266
              <br />
              board: nodemcuv2
            </code>
          </pre>
          If you want to program the settings for wifi, api, logger and
          over-the-air components, then you have to write the following code:
          <br />
          <br />
          <pre>
            <code>
              wifi:
              <br />
              ssid: 'YOUR_SSID'
              <br />
              password: 'YOUR_PASSWORD'
              <br />
              manual_ip:
              <br />
              static_ip: 10.0.0.42
              <br />
              gateway: 10.0.0.1
              <br />
              subnet: 255.255.255.0
              <br />
              dns1: 1.1.1.1
              <br />
              dns2: 1.0.0.1
              <br />
              api:
              <br />
              password: 'MyPassword'
              <br />
              logger:
              <br />
              level: DEBUG
              <br />
              ota:
              <br />
              safe_mode: true
              <br />
              password: 'VERYSECURE'
              <br />
              captive_portal:
            </code>
          </pre>
          If you want to program a sensor, then you must know where the sensor
          has its own place – described with A for Analog and D for Digital with
          numbers. The GPIO pins and the A and D pins are different, but they
          have the same functions, but the GPIO pins have different descriptions
          than the A and D pins. If you have some problems with the pins, then
          you might have a look at a map of an ESP microcontroller.
          <br />
          <br />
          <img
            src="https://esphome.io/_images/nodemcu_esp8266-full.jpg"
            alt="NodeMCU2 ESP8266"
            width="100%"
          />
          <br />
          <br />
          Source: Otto Winter took a photograph of a NodeMCU ESP8266 for the
          following website{" "}
          <a
            href="https://esphome.io/_images/nodemcu_esp8266-full.jpg"
            target="_blank"
            rel="norefferrer noreferrer"
          >
            https://esphome.io/_images/nodemcu_esp8266-full.jpg
          </a>
          .
          <br />
          <br />
          If you want to program a sensor with the{" "}
          <a
            href="https://en.wikipedia.org/wiki/I%C2%B2C"
            target="_blank"
            rel="noreferrer"
          >
            i²c
          </a>{" "}
          (paraphrased from{" "}
          <a
            href="https://en.wikipedia.org/wiki/I%C2%B2C"
            target="_blank"
            rel="noreferrer"
          >
            https://en.wikipedia.org/wiki/I%C2%B2C)
          </a>{" "}
          or with i²c-bus to communicate between the circuit of a controller and
          the circuit of the periphery bidirectionally, then you have to write a
          code such as this example – extracted/paraphrased from the URL{" "}
          <a
            href="https://esphome.io/components/i2c.html"
            target="_blank"
            rel="noreferrer"
          >
            https://esphome.io/components/i2c.html
          </a>
          :
          <br />
          <br />
          <pre>
            <code>
              i2c:
              <br />
              sda: 21
              <br />
              scl: 22
              <br />
              scan: true
              <br />
              id: bus_a
            </code>
          </pre>
          If you want to program two sensors of the type i²c, the code is a
          little bit different than the first code for only a sensor:
          <br />
          <br />
          <pre>
            <code>
              # Example configuration entry
              <br />
              i2c:
              <br />
              - id: bus_a
              <br />
              sda: 13
              <br />
              scl: 16
              <br />
              scan: true
              <br />
              - id: bus_b
              <br />
              sda: 14
              <br />
              scl: 15
              <br />
              scan: true
              <br />
              # Sensors should be specified as follows
              <br />
              - platform: bme680
              <br />
              i2c_id: bus_b
              <br />
              address: 0x76
              <br />
              # ... # If a I²C multiplexer is used all I²C devices can be
              additionally configured like:
              <br />
              - platform: bmp280
              <br />
              multiplexer:
              <br />
              id: multiplex0
              <br />
              channel: 0<br /># ...
            </code>
          </pre>
          In this example if the hexadecimal spelling for the address 0x76 or
          0x77 is wrong or cannot work properly, then you have to change the
          address 0x76 into 0x77 or 0x77 into 0x76 or something else.
          <br />
          <br />
          If you want to program a sensor with the{" "}
          <a
            href="https://en.wikipedia.org/wiki/I%C2%B2S"
            target="_blank"
            rel="noreferrer"
          >
            i²s-bus
          </a>
          , which was developed by Philips for the serial digital audio data
          communication between the different integrated circuits or ICs, then
          you can do it too. You can also use the i²s-bus for every{" "}
          <a
            href="https://en.wikipedia.org/wiki/Modular_connector#8P8C"
            target="_blank"
            rel="noreferrer"
          >
            8P8C
          </a>{" "}
          cable or for every RJ45 cable and their sockets.
          <br />
          <br />
          If you want to know how to program SPI bus , UART bus etc. for a
          sensor, a socket or the devices such as ESP8266 or ESP32, then you
          must research for the term you want / have to look for, such as SPI,
          UART and more. The wiki for you how to program ESP8266, ESP32, their
          sensors and these settings has the following URL address:{" "}
          <a href="https://esphome.io/" target="_blank" rel="noreferrer">
            https://esphome.io/
          </a>
          .
          <br />
          If you want to know the temperature, the humidity and the pressure,
          then you must have a microcontroller like an ESP8266, have a sensor
          like a BME280 and at least you must write the following code, which
          later will be built, compiled, interpreted or translated into an
          assembly code, a machine language, a markup language or a script
          language which can run on your Turing-like machine such as a tower PC,
          laptop, Raspberry Pi, ODROID etc.. The following code is:
          <br />
          <br />
          <pre>
            <code>
              # Example configuration entry
              <br />
              sensor:
              <br />
              - platform: bme280
              <br />
              temperature:
              <br />
              name: "BME280 Temperature"
              <br />
              oversampling: 16x
              <br />
              pressure:
              <br />
              name: "BME280 Pressure"
              <br />
              humidity:
              <br />
              name: "BME280 Humidity"
              <br />
              address: 0x77
              <br />
              update_interval: 60s
            </code>
          </pre>
          The sensor BME280 – a sensor for temperature, humidity and pressure
          looks like this device:
          <br />
          <br />
          <img
            src="https://esphome.io/_images/bme280-full.jpg"
            alt="BME280 - A sensor for temperature, humidity and pressure"
            width="100%"
          />
          <br />
          <br />
          Source: Otto Winter took a photograph of a BME280 for the following
          website{" "}
          <a
            href="https://esphome.io/_images/bme280-full.jpg"
            target="_blank"
            rel="noreferrer"
          >
            https://esphome.io/_images/bme280-full.jpg
          </a>
          .
        </p>
      </div>
    </div>
  );
};
