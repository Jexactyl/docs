---
sidebar_position: 1
---

# Introduction
***

Editing and rebuilding Jexactyl is relatively simple and 
can be done with one simple command in most cases.

## Building the Panel

Firstly, you'll need to install the Node packages in order to build the Panel.
Start by running this command to install the necessary dependencies:
```bash
yarn # Installs all dependencies needed
```
After this process has completed with no errors, you can then build the Panel:
```bash
yarn run build:production
```

This will build the Panel with all of the new files packed and ready to go.
In order to make modifications to the user-side of the Panel you will need to
rebuild it each time there are changed files. 

## Basic code editing

In the next step, we'll show you how to edit parts of Jexactyl as easily as
possible. From changing the login logo to modifying the user system, we'll take
you through each step.