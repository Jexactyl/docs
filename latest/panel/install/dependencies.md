# Install Dependencies
You'll need to install the following dependencies in order to run and use Jexactyl:

***

?> Looking for a premium, high quality hosting provider? Check out [HostEZ.io](https://hostez.io),
who support gameservers such as Valheim, Minecraft, and Terraria - while also offering VPS and bare metal solutions.

PHP `8.1` with the extensions:
- `cli`
- `openssl`
- `gd`
- `mysql`
- `PDO`
- `mbstring`
- `tokenizer`
- `bcmath`
- `xml`
- `curl`
- `zip`
- `fpm`.

MariaDB `10.2` or higher, with `redis-server`.

A webserver (`NGINX` is preferred.)

`curl`, `tar`, `unzip`, `git` and `composer` v2.

## Example Dependency Installation

!> Your OS may be different to the one we've used for this installation.
Make sure that these commands work for you, and if they don't, consult
your operating system's package manager for how to install the dependencies.

```bash
apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg

LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php
add-apt-repository ppa:redislabs/redis -y

# The command below is not needed if you are using Ubuntu 22.04 or higher.
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash

apt update
apt -y install php8.1 php8.1-{cli,gd,mysql,pdo,mbstring,tokenizer,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```
