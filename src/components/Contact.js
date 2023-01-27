import React from "react";
import "../App.css";

export const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <div className="text">
        <p>
          Martin Gerlach
          <br />
          Poststra&szlig;e 5
          <br />
          38154 K&ouml;nigslutter am Elm
          <br />
          Germany
          <br />
          Email-Addresses:
          <br />
          <ol>
            <li>
              <a href="mailto:martin.gerlach1990@gmail.com">
                martin.gerlach1990@gmail.com
              </a>
            </li>
            <li>
              <a href="mailto:martin.gerlach1990@yahoo.com">
                martin.gerlach1990@yahoo.com
              </a>
            </li>
            <li>
              <a href="mailto:martin.gerlach1990@outlook.de">
              martin.gerlach1990@outlook.de
              </a>
            </li>
          </ol>
          Tel.: <a href="tel:+491787107607">+491787107607</a>
        </p>
      </div>
    </div>
  );
};
