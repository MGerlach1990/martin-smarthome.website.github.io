import React from "react";
import "../App.css";

export const HowToInstallDocker = () => {
  return (
    <div>
      <h1>How to install Docker</h1>
      <div className="text">
        <p>
          <h3>
            Step 1 – Download and Flash the Image for the Operating System
          </h3>
          <br />
          At first you have to download an image for an operating system, e.g.:
          Home-Assistant Operating System, Debian, Ubuntu, Raspberry Pi OS, Cent
          OS, Fedora OS, Red Hat Linux or another type of Linux distributions.
          In this example the operating system Debian is used.
          <br />
          Then you must format the SD card and flash it with the image of an
          operating system with the help of an application.
          <br />
          After that you must reject and eject the SD card so that you can
          enable the file ssh with no data file suffix and write a new text
          (configuration) for network settings.
          <br />
          <br />
          Here is the code how to enable ssh access – in the directory of a
          flash drive /Volumes/boot:
          <br />
          <br />
          <pre>
            <code>touch ssh</code>
          </pre>
          Here is the code how to enable the network settings:
          <br />
          <br />
          <pre>
            <code>touch wpa_supplicant.conf</code>
          </pre>
          The content of the configuration data for the network settings –
          wpa_supplicant.conf – is the following one:
          <br />
          <br />
          <pre>
            <code>
              country=US
              <br />
              ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
              <br />
              update_config=1
              <br />
              network=&#x2774;
              <br />
              ssid="NETWORK-NAME"
              <br />
              psk="PASSWORD"
              <br />
              &#x2775;
            </code>
          </pre>
          If you don't live in USA, but in a foreign country, then you have to
          change the name of the country for the network configuration settings.
          For example, if you live in Germany, then you must change the variable
          country with its value of US into the variable's value of DE, which is
          the value or the description of Deutschland or the German term for
          Germany.
          <br />
          <br />
          <h3>Step 2 – SSH Access</h3>
          <br />
          You can get access to the Raspberry Pi with a headless setup with
          Debian with the IP address or with the hostname by searching and
          finding the hostname and the IP address of the Raspberry Pi or of
          another device with the router or with an application like Angy IP
          scanner - maybe with a suffix like .local, .fritz or .fritz.box or
          something else. The default settings for a Raspberry Pi are: raspberry
          as hostname, pi as password, .local as a default local domain name and
          the default port for ssh access 22 (-p 22). Here is the code how to
          enable the ssh access, if the inputs of information how to enable ssh
          access are correct:
          <br />
          <br />
          <pre>
            <code>
              Admin@PC-WF-C1~$: sudo -i
              <br />
              Enter the password: <br />
              root@PC-WF-C1~$: ssh-keygen -N raspberry.local -t ecdsa
              <br />
              root@PC-WF-C1~$: ssh pi@raspberry.local -p 22
              <br />
              root@PC-WF-C1~$: Are you sure? (Yes, No or fingerprint?): y<br />
              Enter the password:
              <br />
              pi@raspberry.local~$:
            </code>
          </pre>
          <br />
          <h3>
            Step 3 – Update and Upgrade network settings, interfaces, libraries
            etc.
          </h3>
          <br />
          With the command sudo raspi-config you can use raspi-config and its
          commands to change or to upgrade the network settings, the interfaces,
          the libraries or the kernel or the EEPROM and other stuff else. Then
          you can use the keys up, down, left and right to controll and the
          letters to change the hostname or the domain name or the ssid (=name
          of the network) or the password of the raspberry pi or the password of
          the ssid. With the keys like space or enter you can change the
          language of the operating system, the language of the network and the
          language for the keyboard of its own users (en_UK for English in Great
          Britain, en_US for English in USA, de_AT for German language in
          Austria, de_CH for German language in Switzerland, de_DE for German
          language in Germany). You can also update and/or upgrade the eeprom or
          the kernel of the Raspbery Pi with some commands – such as sudo
          rpi-update or sudo rpi-eeprom-update. Later on, you should have to
          restart/reboot the system or the SoC with the command sudo reboot.
          <br />
          <br />
          <h3>
            Step 4 – Installing Docker engine, Docker Compose V2 and Compose
            Switch
          </h3>
          <br />
          On the website of the company docker.com you can read the manual to
          install the Docker engine for the operating system and the images of
          your applications with their containers which you like and which you
          like to choose. I chose the Docker engine for the Linux distribution
          Debian. You can install the Docker engine for Debian – three different
          installation methods:
          <ol>
            <li>Installing Docker with a repository from Docker</li>
            <li>
              Installing Docker with a DEB package for Debian, Ubuntu and Debian
              based operating systems
            </li>
            <li>Installing Docker with a convenience script</li>
          </ol>
          I chose the third method with a script:
          <br />
          <br />
          <pre>
            <code>
              pi@raspberry.local~$: curl -fsSL https://get.docker.com -o
              get-docker.sh
              <br />
              pi@raspberry.local~$: sudo sh get-docker.sh
            </code>
          </pre>
          The script is running the installation of the docker automatically.
          <br />
          <br />
          After that you might configure some optional post-installation steps:
          <br />
          <br />
          <pre>
            <code>
              pi@raspberry.local~$: sudo groupadd docker
              <br />
              pi@raspberry.local~$: sudo usermod -aG docker $USER
              <br />
              pi@raspberry.local~$: newgrp docker
              <br />
              pi@raspberry.local~$: docker run hello-world
            </code>
          </pre>
          If the demo program hello-world works, you only need to go to the
          other steps to enable the docker engine to start automatically on
          boot.
          <br />
          If the demo program hello-world fails with an error - such as:
          <br />
          <br />
          <pre>
            <code>
              WARNING: Error loading config file: /home/user/.docker/config.json
              - stat /home/user/.docker/config.json: permission denied
            </code>
          </pre>
          I.e. you have to fix the problem you have to remove the ~/.docker
          directory or change its ownership and permissions using the following
          commands:
          <br />
          <br />
          <pre>
            <code>
              pi@raspberry.local~$: sudo chown "$USER":"$USER"
              /home/"$USER"/.docker -R
              <br />
              pi@raspberry.local~$: sudo chmod g+rwx "$HOME/.docker" -R
            </code>
          </pre>
          If you want to start Docker and its engine on boot by default, then
          you have to configure Docker with these commands:
          <br />
          <br />
          <pre>
            <code>
              pi@raspberry.local~$: sudo systemctl enable docker.service
              <br />
              pi@raspberry.local~$: sudo systemctl enable containerd.service
            </code>
          </pre>
          If you want to install the version V2 of docker-compose (the name is
          docker compose) instead of docker-compose V.1.29.2, then you must be
          in the directory $HOME and then you need to download or to pull the
          docker compose image. Here is the code:
          <br />
          <br />
          <pre>
            <code>
              pi@raspberry.local~$: sudo mkdir -p ~/.docker/cli-plugins/ <br />
              pi@raspberry.local~$: curl -SL
              https://github.com/docker/compose/releases/download/v2.2.2/docker-compose-linux-x86_64
              -o ~/.docker/cli-plugins/docker-compose <br />
              pi@raspberry.local~$: chmod +x
              ~/.docker/cli-plugins/docker-compose <br />
              pi@raspberry.local~$: docker compose version <br />
            </code>
          </pre>
          At first you must change the architecture for the docker compose
          version 2.2.2 from docker-compose-linux-x86-64 to the architecture of
          your computer or of your machine. If your computer has the ARM
          architecture, then you must choose the docker compose version 2.2.2
          for armhf (32 bit system) or arm64 (64 bit system). Or ift it has an
          amd architecture, then you must choose the version for amd
          architecture.
          <br />
          <br />
          If everything works fine, then the command “docker compose version”
          returns you the result “Docker Compose version 2.2.2”.
          <br />
          <br />
          Compose Switch is a program which translates the docker-compose V1
          commands into the docker compose V2 commands. If you want to install
          Compose Switch, you must decide for one of two different methods:
          <ol>
            <li>automatically</li>
            <li>manually</li>
          </ol>
          I have chosen the first method of installing Compose Switch
          automatically with a shell script – such as install_linux.sh.
          <br />
          You must enter and run the following code for the automatical
          installation of Compose Switch (maybe you must use the command sudo
          before the rest of the command/code, if the installtion without sudo
          cannot or doesn’t work):
          <br />
          <br />
          <pre>
            <code>
              pi@raspberry.local~$: curl -fsSL
              https://raw.githubusercontent.com/docker/compose-cli/main/scripts/install/install_linux.sh
              | sh
            </code>
          </pre>
          <br />
          <h3>Step 5 – Installation of Portainer</h3>
          <br />
          If you want to configure and install some container with images and
          some environment variables via a GUI, then you’d better had a better
          view and controll over the process, monitoring and management of the
          different images, containers, volumes and different stuff. If you want
          to have a GUI application like Portainer, then you must install
          Portainer with the github code or with the docker code from
          portainer.io – both codes look the same – such as this one:
          <br />
          <br />
          <pre>
            <code>
              docker volume create portainer_data
              <br />
              docker run -d -p 9443:9443 -p 8000:8000 -p 9000:9000\ <br />
              --name portainer --restart=always \ <br />
              -v /var/run/docker.sock:/var/run/docker.sock \ <br />
              -v portainer_data:/data \ <br />
              portainer/portainer-ce:2.16.2
            </code>
          </pre>
          You enter the command "docker-compose up -d" into the UNIX (=original
          UNIX, BSD, FreeBSD, OpenBSD, Darwine (=MacOSX, MacOS, IOS etc.), Linux
          and Android) terminal or into the Windows application PutTy or into
          the Powershell, then the UNIX command docker-compose up -d compose and
          deploy your application/program as a daemon.
        </p>
      </div>
    </div>
  );
};