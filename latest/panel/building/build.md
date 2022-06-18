# Building panel assets

!> Please note that we dont provide support to modified installs

## Instal NodeJS
You can skip this proccess if you have it already installed.

### Ubuntu/Debian
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
apt install -y nodejs

### CentOS
curl -sL https://rpm.nodesource.com/setup_14.x | sudo -E bash -
sudo yum install -y nodejs yarn # CentOS 7
sudo dnf install -y nodejs yarn # CentOS 8

## Install yarn
```bash
  cd /var/www/jexactyl
  npm i -g yarn # Install Yarn # Install yarn
```
To build the panel you need to have yarn installed.

## Build the panel
```bash
  yarn # Install all required dependencies
  yarn build:production # Build the panel
```
