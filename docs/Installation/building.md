---
sidebar_position: 3
---

# Building Jexactyl
***
:::warning This software is in development
Future releases will not have to be built on your machine.
:::

:::info Check dependency installations
Make sure that NodeJS along with NPM and Yarn is installed.
```bash
node -v # Expected Output: v16.x.x
npm -v # Expected Output: v8.x.x
yarn -v # Expected Output: v1.x.x
```
:::

Firstly, you'll need to install the Node packages in order to build the Panel.
Start by running this command to install the necessary dependencies:
```bash
yarn # Installs all dependencies needed
```
After this process has completed with no errors, you can then build the Panel:
```bash
yarn run build:production
```
:::warning This process will take some time
Building the Panel will take a long time or fail on low end hardware.
If your server is not able to build Jexactyl currently, please wait for a release
which is pre-built from our [GitHub](https://github.com/jexactyl/panel).
:::
When this process completes, the Panel is built and packed for production. Please note
that once the Panel is built, any changes you make to the files of the Panel will require
the frontend to be rebuilt using the `yarn run build:production` command above.