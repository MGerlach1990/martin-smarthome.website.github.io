import React from "react";
import "../App.css";

export const HowToInstallNginxProxyManager = () => {
  return (
    <div>
      <h1>How to install Nginx Proxy Manager</h1>
      <div className="text">
        <p>
          You can have an access to a website or a blog, a collection of
          applications/programs and/or a collection of data files. The problem
          is that you don't want to use a lot of different IP address, but you
          want to use the different hostnames of a domain. You also want to use
          the different applications with the same IP address and with different
          ports. If the programs running on your system have the same IP port,
          then the domain or the working group has the problem or trouble
          because it doesn't know where to forward the application(s).
          <br />
          I.e. the program A needs the port 80 to run on the system and the
          program B wants to run on the system with the port 80, but the program
          A or the program B doesn't know which program should run on the system
          with the port 80. Therefore you must change or forward the port 80 to
          another port or vice versa, e.g. program A has the forwarding scheme
          80:80 and the program B has the forwarding scheme 8080:80. If the port
          of an IP address is 80 or forwarded with XXXX:80, this program has a
          TLS or an SSL certificate signed by Letsencrypt for HTTP. If the port
          of an IP address is 443 or forwarded with XXXX:443, this program has a
          TLS or an SSL certificate signed by Letsencrypt for HTTPS (s=secure or
          security).
          <br />
          <br />
          This is the reason why you need the Nginx Proxy Manager to make
          forwarding or redirecting the IP address possible and assign it with
          certificates given and signed by Letsencrypt.
          <br />
          <br />
          Here is the code how to install the Nginx Proxy Manager with a mysql
          or mariadb database running on a Raspberry Pi - you need to create a
          folder, create and save a data file with the name docker-compose.yml
          inside the folder:
          <pre>
            <code>
              version: "3" <br />
              services: <br />
              app: <br />
              image: 'jc21/nginx-proxy-manager:latest' <br />
              restart: unless-stopped <br />
              ports: <br />
              # These ports are in format "host-port":"container-port" <br />
              - '80:80' # Public HTTP Port <br />
              - '443:443' # Public HTTPS Port <br />
              - '81:81' # Admin Web Port <br />
              # Add any other Stream port you want to expose <br />
              # - '21:21' # FTP <br />
              environment: <br />
              DB_MYSQL_HOST: "db" <br />
              DB_MYSQL_PORT: 3306 <br />
              DB_MYSQL_USER: "npm" <br />
              DB_MYSQL_PASSWORD: "npm" <br />
              DB_MYSQL_NAME: "npm" <br />
              # Uncomment this if IPv6 is not enabled on your host <br />
              # DISABLE_IPV6: 'true' <br />
              volumes: <br />
              - ./data:/data <br />
              - ./letsencrypt:/etc/letsencrypt <br />
              depends_on: <br />
              - db <br />
              <br />
              db:
              <br />
              image: 'jc21/mariadb-aria:latest' <br />
              restart: unless-stopped <br />
              environment: <br />
              MYSQL_ROOT_PASSWORD: 'npm' <br />
              MYSQL_DATABASE: 'npm' <br />
              MYSQL_USER: 'npm' <br />
              MYSQL_PASSWORD: 'npm' <br />
              volumes: <br />
              - ./data/mysql:/var/lib/mysql <br />
            </code>
          </pre>
          source:{" "}
          <a
            href="https://nginxproxymanager.com/setup/#using-mysql-mariadb-database"
            target="_blank"
            rel=" noopener noreferrer"
          >
            https://nginxproxymanager.com/setup/#using-mysql-mariadb-database
          </a>
          <br/>
          <br/>
          You enter the command "docker-compose up -d" into the UNIX (=original
          UNIX, BSD, FreeBSD, OpenBSD, Darwine (=MacOSX, MacOS, IOS etc.), Linux
          and Android) terminal or into the Windows application PutTy or into
          the Powershell, then the UNIX command docker-compose up -d composes and
          deploys your application/program as a daemon. With this example The Nginx Proxy Manager is running on your Raspberry Pi with a MySQL database or with a MariaDB database.
        </p>
      </div>
    </div>
  );
};
