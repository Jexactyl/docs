---
sidebar_position: 4
---

# Environment Setup
***

## Configuration Files
We'll need to start by copying over the default settings file, called `.env.example`. We'll want
this to be called `.env`, so it's just a case of copying the file over in order to set up the Panel
how you want it.

```bash
cp .env.example .env
```

We also want to copy over the `settings.json.example` file into a file called `settings.json`. 
This is where configurations for Jexactyl-specific features will reside, such as user registration.
If you want to just copy over the file and make no changes to the settings (all modules are enabled by default), 
run the command below:

```bash
cp settings.json.example settings.json
```

However, if you want to make changes to the file, you'll have to rebuild the panel. 
Documentation for how to build Jexactyl can be found in the Modifications category.

## Depdendency installation
After this, we'll need to install Composer dependencies - which will allow the PHP code in our project
(such as the backend and admin-side) to run properly.

```bash
composer install --no-dev --optimize-autoloader
```

Finally, we'll generate a random token which will be the encryption/app key for our project.
:::danger BE CAREFUL!

This encryption key is used to store important data (such as API keys).
Do NOT share this key with anyone - protect it like a password.
If you lose this key, all data is impossible to recover.

:::

```bash
php artisan key:generate --force
```

## Environment Configuration
Jexactyl uses CLI commands to configure most of the base settings of the Panel.
The following will allow you to set up general, database and mail settings.

```bash
php artisan p:environment:setup
php artisan p:environment:database
php artisan p:environment:mail # Not required to run the Panel.
```

## Database Setup
Now we need to setup all of the base data for the Panel in the database you created earlier. The command below may take some time to run depending on your machine. Please **DO NOT exit the process** until it is completed! This command will setup the database tables and then add all of the Nests & Eggs that power Jexactyl.

```bash
php artisan migrate --seed --force
```

## Add admin user
To access the Panel for the first time, you'll need to make a user via the CLI - don't worry, you can 
create users easily via the frontend! Here's a simple command which will take you through the steps of
setting up the initial admin account:
```
php artisan p:user:make
```

## Webserver Permissions
In order for the webserver you're using to access the Panel files, we'll need to assign it permissions
with the `chown` command. Here's how to do this for all types of webservers:
```bash
# If using NGINX or Apache (not on CentOS):
chown -R www-data:www-data /var/www/pterodactyl/*

# If using NGINX on CentOS:
chown -R nginx:nginx /var/www/pterodactyl/*

# If using Apache on CentOS:
chown -R apache:apache /var/www/pterodactyl/*
```