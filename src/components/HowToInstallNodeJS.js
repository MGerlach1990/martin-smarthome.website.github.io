import React from "react";
import "../App.css";

export const HowToInstallNodeJS = () => {
  return (
    <div>
      <h1>How to install NodeJS</h1>
      <div className="text">
        <p>
          You need NodeJS for different programs because these programs need
          some Javascript code, its runtime and its libraries or framework such
          as JSON, JQueries or ReactJS etc.. This is the reason why I install
          NodeJS for a program-on-premises - for example NodeRED.
          <br />
          <br />
          Here is the code for the installation of NodeJS and its package
          manager npm:
          <br />
          <br />
          <pre>
            <code>
              # Using Ubuntu
              <br />
              curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E
              bash -<br />
              sudo apt-get install -y nodejs
              <br />
              # Using Debian, as root
              <br />
              curl -fsSL https://deb.nodesource.com/setup_current.x | bash -
              <br />
              apt-get install -y nodejs
              <br />
              # use `sudo` on Ubuntu or run this as root on debian
              <br />
              apt-get install -y build-essential
            </code>
          </pre>
          Now you must wait for the moment when you finish the process of
          installing NodeJS by downloading the up-to-date packages of NodeJS locally (=on-premise). The time for the installation of NodeJS depends on
          the hardware where Ubuntu or Debian runs – some hardware might be very
          slow, slow, middle, fast and/or very fast. If you use an SD-card the system, the Docker engine and the applications on-premise and the applications on your Docker Engine run very slowly - for example with speed up to about 43 MByte/s without any cache for reading and writing. If you use an M.2 SATA SSD (b-key/b+m-key or only b-key), everything run faster with speed up to about 500 MByte/s, which is faster than a network interface card with a possible speed up to 1 GBit/s, which is equal with exact 125 MByte/s. If you use an M.2 NVMe SSD or a M.2 PCIexpress SSD, everything run with speed up to about 3500 MByte/s (=28 GBit/s or 3.5 GByte/s), 5000 MByte/s (=40 GBit/s or 5 GByte/s) or 7000 MByte/s (=56 GBit/s or 7 GByte/s).
        </p>
      </div>
    </div>
  );
};
