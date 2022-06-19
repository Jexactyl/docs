# Install Build Tools

***

This guide will inform you on how to get started with building and modifying Jexactyl.

***

### Installing NodeJS and Yarn

Firstly, we'll need to install the `NodeJS` package and also add `Yarn` so we can build the Panel's frontend.

```bash
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
apt install -y nodejs
```

Install `Yarn` and the dependencies needed for Jexactyl to be built.

```bash
npm i -g yarn
cd /var/www/jexactyl
yarn # Installs building dependencies.
```

***

Next, refer to our [building](latest/build/building.md) guide on how to build the frontend.