import React from "react";
import "../App.css";

export const HowToInstallNodeRED = () => {
  return (
    <div>
      <h1>How to install NodeRED</h1>
      <div className="text">
        <p>
          If you want to manipulate a router to show some network data or to
          show some diagrams, charts, graphics etc. of the different MQTT
          sensors, binary sensors, input and output elements and some functions
          and/or methods, switches and more combining elements and some elements
          such as the switch-case for C, C++, C# and more languages. But the
          application NodeRED is written in Javascript and is used to program
          and implement some nodes and flows made with nodes.
          <br />
          <br />
          Here is the code for the installation of NodeRED with the method using
          named data volumes:
          <br />
          <br />
          <pre>
            <code>
              $ docker volume create --name node_red_data
              <br />
              $ docker volume ls
              <br />
              DRIVER VOLUME NAME
              <br />
              local node_red_data
              <br />$ docker run -it -p 1880:1880 -v node_red_data:/data --name
              mynodered nodered/node-red
            </code>
          </pre>
        </p>
      </div>
    </div>
  );
};
