---
sidebar_position: 1
---

# Install Dependencies
***
Let's get started by installing our dependencies we'll need for this project.
If you're installing directly off of the `develop` branch, you'll need to install our [modification dependencies](http://localhost:3000/modification/dependencies).

You'll need to install the following dependencies in order to run and use Jexactyl:
***
PHP `8.0` with the following extensions: `cli`, `openssl`, `gd`, `mysql`, `PDO`, `mbstring`, `tokenizer`, `bcmath`, `xml`, `curl`, `zip`, and `fpm`. - fpm is only needed if you're using NGINX as a webserver.

MySQL `5.7.22` or higher (MySQL `8` recommended) or MariaDB `10.2` or higher.

A webserver (`NGINX` is preferred.)

`curl`, `tar`, `unzip`, `git` and `composer` v2.

`NodeJS` v14 or higher, with `npm` and `yarn` installed.
***

## Example Dependency Installation

:::danger BE CAREFUL!

Your OS may be different to the one we've used for this installation.
Make sure that these commands work for you, and if they don't, consult
your operating system's package manager for how to install the dependencies.

:::

```bash
apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg
LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash

apt update
apt -y install php8.0 php8.0-{cli,gd,mysql,pdo,mbstring,tokenizer,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer

curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
apt install -y nodejs
npm i -g yarn
```

